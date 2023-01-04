import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuentas } from '../entities/cuentas';
import { Operaciones } from '../entities/operaciones';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  constructor(private http: HttpClient) { }

  cuentasSelect(){
    const ruta ="http://www.servicioapi.somee.com/API/cuenta"
    return this.http.get(ruta);
  }

  private baseURL ="http://www.servicioapi.somee.com/api/operacion?id=";  
  cuentasUpdateDepositar(Id:string,tipo:string,cuenta:Cuentas){
    const formData= new FormData();  
   console.log(tipo)
    return this.http.put(`${this.baseURL}${Id}&tipo=DEPOSITO`,  cuenta)    
  }

  cuentasUpdateRetirar(Id:string,tipo:string,cuenta:Cuentas){
    const formData= new FormData();  
   console.log(tipo)
    return this.http.put(`${this.baseURL}${Id}&tipo=RETIRO`,  cuenta)    
  }


  cuentasTransferir(operaciones:Operaciones) : Observable<Object>{
    const ruta ="http://www.servicioapi.somee.com/api/operacion"
      return this.http.post(ruta, operaciones);
  }








}
