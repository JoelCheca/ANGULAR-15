import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/entities/publicacion';
import { Tipo } from 'src/app/entities/tipos';
import { Venta } from 'src/app/entities/ventas';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-cnstipvent',
  templateUrl: './cnstipvent.component.html',
  styleUrls: ['./cnstipvent.component.css']
})
export class CnstipventComponent implements OnInit {
  listaVentas: Venta[] | undefined;
  columnaOrden: String = "idventa";
  reversa: boolean = false;
  pagina: number = 1;
  ventaEditar: Venta | undefined;
  textoBuscar: String = "";
  datos: Venta[] | undefined;
  tipoBuscar:Venta [] | undefined;  
  listaTipos: Tipo[] | undefined;
  total: number = 0;

  venta: Venta = new Venta();

  constructor(private ventasService: VentasService,private publicacionesService: PublicacionService) { }

  //listar ventas
 ngOnInit(): void {
  this.ventasService.ventasSelect().subscribe(
    (res) => {
      console.log(res)
      this.listaVentas = JSON.parse(JSON.stringify(res))
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
  let datosFiltrados= this.listaVentas?.filter((item: any)=>{    
  return idtipo !=="Seleccionar"   
  ?(item["idpublicacion"]).toLowerCase().indexOf(idtipo.toLowerCase())>-1  
  :true
  })
  console.log(idtipo)
  this.datos =datosFiltrados
  console.log(datosFiltrados)
    
 
}


buscar=()=>{
  if(this.textoBuscar=="Revista") {
    this.textoBuscar="rev"
  }  

  let datosFiltrados= this.listaVentas?.filter((item: any)=>{    
  return this.textoBuscar !==""   
  ?(item["cliente"]).toLowerCase().indexOf(this.textoBuscar.toLowerCase())>-1  
  :true
  })
  console.log(this.textoBuscar)
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
