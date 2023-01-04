import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operaciones } from '../entities/operaciones';


@Injectable({
  providedIn: 'root'
})
export class OperacionesService {

  constructor(private http: HttpClient) { }

  operacionesSelect(){
    const ruta ="http://www.servicioapi.somee.com/api/operacion"
    return this.http.get(ruta);
  }

  

  private basesURL="http://www.servicioapi.somee.com/api/operacion"
  operacionesDelete(Id:string): Observable<Object>{
    return this.http.delete(`${this.basesURL}/${Id}`);
  }

  
}
