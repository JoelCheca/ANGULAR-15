import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/entities/publicacion';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Tipo } from 'src/app/entities/tipos';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  listaPublicaciones: Publicacion[] | undefined;
  columnaOrden: String = "precio";
  reversa: boolean = false;
  pagina: number = 1;
  publicacionEditar: Publicacion | undefined;
  textoBuscar: String = "";
  datos: Publicacion[] | undefined;
  tipoBuscar:Publicacion [] | undefined; 
  listaTipos: Tipo[] | undefined;

  publicacionesInsertForm = new FormGroup({
    idpublicacion:new FormControl(),
    titulo: new FormControl(),
    idtipo:new FormControl(),
    autor: new FormControl(),
    nroedicion: new FormControl(),
    precio: new FormControl(),
    stock:new FormControl()

  })

  publicacionesUpdateForm = new FormGroup({
    idpublicacion:new FormControl(),
    titulo: new FormControl(),
    idtipo:new FormControl(),
    autor: new FormControl(),
    nroedicion: new FormControl(),
    precio: new FormControl(),
    stock:new FormControl()
  })

  publicacion: Publicacion = new Publicacion();
  constructor(private publicacionesService: PublicacionService) { }

   //listar publicaciones
   ngOnInit(): void {
    this.publicacionesService.publicacionesSelect().subscribe(
      (res) => {
        console.log(res)
        this.listaPublicaciones = JSON.parse(JSON.stringify(res))
        this.datos = JSON.parse(JSON.stringify(res))
      
      }
    )
    this.publicacionesService.tiposSelect().subscribe(
      (res) => {
        console.log(res)
        this.listaTipos = JSON.parse(JSON.stringify(res))
        
      
      }
    )
  }


  //insertar  publicacion
  publicacionesInsert() {
    this.insertarPublicacion();

  }


//insertar  publicacion
insertarPublicacion() {
  this.publicacionesService.publicacionesInsert(this.publicacion).subscribe(
    res => {
      // console.log(res)     
      this.publicacionesInsertForm.reset();
      document.getElementById("btn-cerrar-insert")!.click()
      this.ngOnInit();
    }
  );

}



//capturar  publicacion
editarPublicacion(item: Publicacion) {
  console.log(item);
  this.publicacionEditar = item;

}

//update  publicacion
publicacionUpdate(values: any) {
  console.log(values);
  this.publicacionesService.publicacionesUpdate(values.idpublicacion, values).subscribe(dato => {
    this.ngOnInit();
    document.getElementById("btn-cerrar-update")!.click()
    
  });
}


 //eliminar  empleado
 publicacionEliminar(values: any) {

  this.publicacionesService.eliminarPublicacion(values.idpublicacion).subscribe(dato => {
    this.ngOnInit();
  });

}

buscarTipo(idtipo: string){
  if(idtipo=="Revista"){ idtipo="rev"  }
   if(idtipo=="Libro"){idtipo="lib" }
    else{ if(idtipo=="Separata" ){idtipo="sep"} }
  console.log(idtipo)
  this.publicacionesService.TipoBuscar(idtipo).subscribe(res =>{          
    this.datos =  JSON.parse(JSON.stringify(res));   
   
     //this.empleadosReniecForm.reset();  
    console.log( this.datos  )
    
  })
}










 //buscar 
 buscar=()=>{
  let datosFiltrados= this.listaPublicaciones?.filter((item: any)=>{
  return this.textoBuscar !==""
  ?(item["titulo"]).toLowerCase().indexOf(this.textoBuscar.toLowerCase())>-1  ||
  (item["autor"]).toLowerCase().indexOf(this.textoBuscar.toLowerCase())>-1  ||
  (item["idtipo"]).toLowerCase().indexOf(this.textoBuscar.toLowerCase())>-1  ||
  (item["idpublicacion"]).toLowerCase().indexOf(this.textoBuscar.toLowerCase())>-1  
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
}
