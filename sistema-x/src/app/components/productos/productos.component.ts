import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/entities/categoria';
import { Producto } from 'src/app/entities/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() categoriaX: Categoria | undefined;
  listaProductos: Producto[] | undefined;
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    //console.log(this.categoriaX)
    this.productosService.productosSelect(this.categoriaX?.idcategoria).subscribe(
      (res) => {
        console.log(res);
        this.listaProductos = JSON.parse(JSON.stringify(res));
      }
    )
  }

  agregarCarrito(item: any): void {
    //console.log(item)
    item.cantidad = 1;
    let carrito: any = [];

    if (sessionStorage.getItem("carrito")) {
      carrito = JSON.parse(sessionStorage.getItem("carrito")!)

      let index = -1;
      for (let i = 0; i < carrito.length; i++) {
        let itemCarrito = carrito[i];
        if (itemCarrito.idproducto === item.idproducto) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        carrito.push(item);
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
      }
      else {
        let iCarrito = carrito[index];
        iCarrito.cantidad++;
        carrito[index] = iCarrito;
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
      }
    }
    else {
      carrito.push(item);
      sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }

}






