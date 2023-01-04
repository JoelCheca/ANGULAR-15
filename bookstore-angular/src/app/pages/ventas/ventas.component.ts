import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publicacion } from 'src/app/entities/publicacion';
import { Venta } from 'src/app/entities/ventas';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  listaVentas: Venta[] | undefined;
  columnaOrden: String = "idventa";
  reversa: boolean = false;
  pagina: number = 1;
  ventaEditar: Venta | undefined;
  textoBuscar: String = "";
  datos: Venta[] | undefined;
  tipoBuscar:Venta [] | undefined; 
  listaPublicaciones: Publicacion[] | undefined;


  total: number = 0;

  ventasInsertForm = new FormGroup({
    idventa: new FormControl(),
    cliente: new FormControl(),
    fecha: new FormControl(),
    idempleado: new FormControl(),
    idpublicacion: new FormControl(),
    cantidad:new FormControl(),
    precio: new FormControl(),
    dcto: new FormControl(),
    subtotal:new FormControl(),
    impuesto: new FormControl(),
    total: new FormControl(),
  })

  ventasUpdateForm = new FormGroup({
    idventa: new FormControl(),
    cliente: new FormControl(),
    fecha: new FormControl(),
    idempleado: new FormControl(),
    idpublicacion: new FormControl(),
    cantidad:new FormControl(),
    precio: new FormControl(),
    dcto: new FormControl(),
    subtotal:new FormControl(),
    impuesto: new FormControl(),
    total: new FormControl(),
  })


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

  this.publicacionesService.publicacionesSelect().subscribe(
    (res) => {
      console.log(res)
      this.listaPublicaciones = JSON.parse(JSON.stringify(res))   
     }
  )
  }



   //insertar  venta
   ventasInsert() {
    this.insertarVenta();

  }


//insertar  venta
insertarVenta() {
  console.log(this.venta)  
  this.ventasService.ventasInsert(this.venta).subscribe(
    res => {
          
      this.ventasInsertForm.reset();
      document.getElementById("btn-cerrar-insert")!.click()
      this.ngOnInit();
    }
  );

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


    calcularTotal = (precio:number ) => {
     
      console.log(precio)
  
    }







}