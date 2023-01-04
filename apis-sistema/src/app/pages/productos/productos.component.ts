import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Producto } from 'src/app/entities/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  listaProductos: Producto[]|undefined;
  productoEditar: Producto|undefined;
  datos:Producto[]|undefined;
  textoBuscar: String="";

  columnaOrden: String ="precio";
  reversa: boolean =false;
  pagina: number=1;

  productoAgregado:Producto[];

  public previsualizacion: string="";
  public archivos: any = []
  

 

  productosUpdateForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    price: new FormControl(),

  })

  productosInsertForm = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),

  })



  producto : Producto = new Producto();


  constructor(private productosService:ProductosService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.producto);
    this.productosService.productosSelect().subscribe(
      (res)=>{
        console.log(res)
        this.listaProductos = JSON.parse(JSON.stringify(res))
        this.datos=JSON.parse(JSON.stringify(res))
      }
    )
  }


  productosInsert(){  
    this.insertarProducto();
    
  }

  

  insertarProducto(){
    this.productosService.productosInsert(this.producto).subscribe(
      res =>{
               
        this.productosInsertForm.reset();  
        document.getElementById("btn-cerrar-insert")!.click();
         this.productoAgregado= Array.from([  JSON.parse(JSON.stringify(res))]); 
        //this.productoAgregado = Array.from([ Title,price]);
        //this.productoAgregado =  console.log(this.productoAgregado);
        console.log(this.productoAgregado)   
      }
    );
  }

  editarCategoria(item:Producto){
    console.log(item);
    this.productoEditar=item;
  }

  productosUpdate(values: any){  
    this.productosService.productosUpdate(values.id,values.title, values.price).subscribe();
    document.getElementById("btn-cerrar-update")!.click()
    //this.ngOnInit();
    //this.productosUpdateForm.reset();
  }

 
  
  
  verDetallesProducto(id:number){

  }



buscar=()=>{
let datosFiltrados= this.listaProductos?.filter((item: any)=>{
return this.textoBuscar !==""
?(item["title"]).toLowerCase().indexOf(this.textoBuscar.toLowerCase())>-1 
:true
})
this.datos =datosFiltrados
}



setOrder=(value: String)=>{
  
  if(this.columnaOrden=value){
    this.reversa=!this.reversa
  }
  else{
    this.columnaOrden = value
  };
}

     //capturar foto 
     capturarFile(event:any){
      const archivoCapturado= event.target.files[0]
      this.extraerBase64(archivoCapturado).then((imagen:any) =>{
        this.previsualizacion = imagen.base;
        console.log(imagen);
      })
     // this.archivos.push(archivoCapturado)
      //console.log(event.target.files);
    }



    //convertir foto en base64
    extraerBase64 = async($event: any) => new Promise((resolve, reject)=> {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);        
        reader.onload =()=>{
          resolve({            
            base: reader.result
          });
        };
        reader.onerror = error =>{
          resolve({
            base: null
          });
        };
      }catch(e){
        return 
      }
})
}
