import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private http: HttpClient) { }
  proveedoresSelect(){
    const ruta ="http://localhost:8080/api/v1/publicacion"
    return this.http.get(ruta);
  }
}
