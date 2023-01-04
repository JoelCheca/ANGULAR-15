import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviosService {

  constructor(private http: HttpClient) { }
  enviosSelect(){
    const ruta ="https://servicios.campus.pe/servicioenvios.php"
    return this.http.get(ruta);
  }
}
