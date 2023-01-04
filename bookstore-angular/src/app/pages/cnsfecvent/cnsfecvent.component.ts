import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/entities/publicacion';
import { Tipo } from 'src/app/entities/tipos';
import { Venta } from 'src/app/entities/ventas';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-cnsfecvent',
  templateUrl: './cnsfecvent.component.html',
  styleUrls: ['./cnsfecvent.component.css']
})
export class CnsfecventComponent implements OnInit {
  listaVentas: Venta[] | undefined;
  columnaOrden: String = "idventa";
  reversa: boolean = false;
  pagina: number = 1;
  ventaEditar: Venta | undefined;
  textoBuscar: String = "";
  textoBuscar2: String = "";
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
}

buscar=()=>{ 
  let datosFiltrados= this.listaVentas?.filter((item: any)=>{    
  return this.textoBuscar !==""   && this.textoBuscar2 !==""   
  ?(item["fecha"]).toLowerCase().indexOf(this.textoBuscar.toLowerCase() )>-1   ||
  (item["fecha"]).toLowerCase().indexOf(this.textoBuscar2.toLowerCase() )>-1 
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