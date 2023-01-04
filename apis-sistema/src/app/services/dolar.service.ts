import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  constructor(private http: HttpClient)  { }



  dolarSelect(){
    const ruta ="https://api.apis.net.pe/v1/tipo-cambio-sunat"
    return this.http.get(ruta);
  }
}
