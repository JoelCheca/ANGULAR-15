import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Producto } from '../entities/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  productosSelect(){
    const ruta ="https://fakestoreapi.com/products"
    return this.http.get(ruta);
  }

  
  productosInsert(producto:Producto) : Observable<Object>{
    const ruta ="https://fakestoreapi.com/products"
      return this.http.post(ruta, producto);
  }



  productosUpdate(id:string,title: string,price:string){
    const ruta ="https://fakestoreapi.com/products"
    const formData= new FormData();
    formData.append("id", id);
    formData.append("title", title);
    formData.append("price", price);  

    return this.http.post(ruta,  formData)
  }

  

}
