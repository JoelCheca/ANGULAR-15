import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.carrito = JSON.parse(sessionStorage.getItem("carrito")!);
    //console.log(this.carrito);
    this.calcularTotal();

  }

  vaciarCarrito = () => {
    sessionStorage.removeItem("carrito");
    this.carrito = [];
    this.calcularTotal();

  }

  eliminaritemCarrito = (item: any) => {
    //console.log();
    let carritoMenos = this.carrito.filter(itemCarrito => itemCarrito["idproducto"] !== item.idproducto)
    this.carrito = carritoMenos;
    sessionStorage.setItem("carrito", JSON.stringify(this.carrito));
    this.calcularTotal();
  }

  calcularTotal = () => {
    /*
    let acumulador = 0;
    for (let i=0; i< this.carrito.length; i++) {
      acumulador += this.carrito[i].cantidad * this.carrito[i].precio;
    }
    this.total = acumulador;
    */
this.total = this.carrito.reduce((acumulador, item) => acumulador + (item.cantidad * item.precio), 0);


  }


}
