import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpladosService {

  constructor(private http: HttpClient) { }
  emepleadosSelect(){
    const ruta ="https://servicios.campus.pe/empleados.php"
    return this.http.get(ruta);
  }
}

 