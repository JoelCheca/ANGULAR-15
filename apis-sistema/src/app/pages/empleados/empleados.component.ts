import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Dni } from 'src/app/entities/dni';
import { Empleado } from 'src/app/entities/empleados';
import { DniService } from 'src/app/services/dni.service';
import { EmpleadosService } from 'src/app/services/empleados.service';




@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
 
  public previsualizacion: string="";
  public archivos: any = []
  
  listaEmpleados: Empleado[] | undefined;
  empleadoElegida: Empleado | undefined;
  datos: Empleado[] | undefined;

  textoBuscar: String = "";
  columnaOrden: String = "precio";
  reversa: boolean = false;
  pagina: number = 1;



  empleadoEditar: Empleado | undefined;
  idempleado: String | undefined;

  dniBuscar:Dni [] ;
 
 

  empleadosReniecForm = new FormGroup({
   
    numeroDocumento: new FormControl(),
    apellidoMaterno: new FormControl(),
    apellidoPaterno: new FormControl(),
    nombres: new FormControl(),
  })
  
   empleadosUpdateForm = new FormGroup({
    idempleado: new FormControl(),
    dni: new FormControl(),
    nombre: new FormControl(),
    apepat: new FormControl(),
    apemat: new FormControl(),
    direccion: new FormControl(),
    condicion: new FormControl(),
    sueldo: new FormControl(),
    email: new FormControl(),


  })

  empleadosInsertForm = new FormGroup({
    idempleado: new FormControl(),
    dni: new FormControl(),
    nombre: new FormControl(),
    apepat: new FormControl(),
    apemat: new FormControl(),
    direccion: new FormControl(),
    condicion: new FormControl(),
    sueldo: new FormControl(),
    email: new FormControl(),
  
  })

  empleado: Empleado = new Empleado();


  constructor(private empleadosService: EmpleadosService, private sanitizer: DomSanitizer,
    private dniService: DniService) { }

    
    



  buscarDni(dni: string){
    //console.log(dni)
    this.dniService.dniSelect(dni).subscribe(res =>{          
      this.dniBuscar= Array.from([  JSON.parse(JSON.stringify(res))]); 
       //this.empleadosReniecForm.reset();  
      //console.log(this.dniBuscar)
      
    })
  }




  //listar empleados
  ngOnInit(): void {
    this.empleadosService.empleadosSelect().subscribe(
      (res) => {
        console.log(res)
        this.listaEmpleados = JSON.parse(JSON.stringify(res))
        this.datos = JSON.parse(JSON.stringify(res))
      }
    )
  }

//insertar  empleado
  empleadosInsert() {
    this.insertarEmpleado();

  }
  
//insertar  empleado
  insertarEmpleado() {
    this.empleadosService.empleadosInsert(this.empleado).subscribe(
      res => {
        // console.log(res)     
        this.empleadosInsertForm.reset();
        document.getElementById("btn-cerrar-insert")!.click()
        this.ngOnInit();
      }
    );

  }

  //capturar  empleado
  editarEmpleado(item: Empleado) {
    //console.log(item);
    this.empleadoEditar = item;

  }

  //update  empleado
  empleadosUpdate(values: any) {
    console.log(values);
    this.empleadosService.empleadosUpdate(values.idempleado, values).subscribe(dato => {
      this.ngOnInit();
      document.getElementById("btn-cerrar-update")!.click()
      
    });
  }

   //eliminar  empleado
  empleadosEliminar(values: any) {

    this.empleadosService.eliminarEmpleado(values.idempleado).subscribe(dato => {
      this.ngOnInit();
    });

  }

 //capturar empleado
  elegirEmpleado(item: Empleado) {
    console.log(item);
    this.empleadoElegida = item;
  }


 //buscar empleado 
  buscar=()=>{
    let datosFiltrados= this.listaEmpleados?.filter((item: any)=>{
    return this.textoBuscar !==""
    ?(item["nombre"]).toLowerCase().indexOf(this.textoBuscar.toLowerCase())>-1  ||
    (item["apepat"]).toLowerCase().indexOf(this.textoBuscar.toLowerCase())>-1  ||
    (item["apemat"]).toLowerCase().indexOf(this.textoBuscar.toLowerCase())>-1  
    :true
    })
    this.datos =datosFiltrados
    console.log(datosFiltrados)
    }



 //ordenar por precio
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












