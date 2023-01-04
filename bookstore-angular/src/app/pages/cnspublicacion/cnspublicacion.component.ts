import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/entities/publicacion';
import { Tipo } from 'src/app/entities/tipos';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-cnspublicacion',
  templateUrl: './cnspublicacion.component.html',
  styleUrls: ['./cnspublicacion.component.css']
})
export class CnspublicacionComponent implements OnInit {
  listaPublicaciones: Publicacion[] | undefined;
  columnaOrden: String = "precio";
  reversa: boolean = false;
  pagina: number = 1;
  publicacionEditar: Publicacion | undefined;
  textoBuscar: String = "";
  datos: Publicacion[] | undefined;
  tipoBuscar:Publicacion [] | undefined; 
  listaTipos: Tipo[] | undefined;


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

//buscar empleado 
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
