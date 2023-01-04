import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../entities/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {




  constructor(private http: HttpClient) { }

  empleadosSelect(){
    const ruta ="http://localhost:8080/api/v1/empleado"
    return this.http.get(ruta);
  }

  

  empleadosInsert(empleado:Empleado) : Observable<Object>{
    const ruta ="http://localhost:8080/api/v1/empleado"
      return this.http.post(ruta, empleado);
  }


  private baseURL ="http://localhost:8080/api/v1/empleado";
  
  empleadosUpdate(idempleado:string,empleado:Empleado){
    const formData= new FormData();  
   // console.log(venta)
    return this.http.put(`${this.baseURL}/${idempleado}`,  empleado)    
  }

 eliminarEmpleado(idempleado:string): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${idempleado}`);
  }



}


