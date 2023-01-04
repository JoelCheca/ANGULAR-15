import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../entities/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }

  ventasSelect(){
    const ruta ="http://localhost:8080/api/ventas"
    return this.http.get(ruta);
  }


  ventasInsert(venta:Venta) : Observable<Object>{
    const ruta ="http://localhost:8080/api/ventas"
      return this.http.post(ruta, venta);
  }
}
