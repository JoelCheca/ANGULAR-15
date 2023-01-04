import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicacion } from '../entities/publicacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private http: HttpClient) { }

  publicacionesSelect(){
    const ruta ="http://localhost:8080/api/publicaciones"
    return this.http.get(ruta);
  }



  publicacionesInsert(publicacion:Publicacion) : Observable<Object>{
    const ruta ="http://localhost:8080/api/publicaciones"
      return this.http.post(ruta, publicacion);
  }



  private baseURL ="http://localhost:8080/api/publicaciones";
  
  publicacionesUpdate(idpublicacion:string,publicacion: Publicacion){
    const formData= new FormData();  
   // console.log(venta)
    return this.http.put(`${this.baseURL}/${idpublicacion}`,  publicacion)    
  }



  eliminarPublicacion(idpublicacion:string): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${idpublicacion}`);
  }





 private baseURLS ="http://localhost:8080/api/publicaciones/consulta?idtipo"

  TipoBuscar(idtipo:string): Observable<any>{
     //console.log(idtipo)    
    return this.http.get(`${this.baseURLS}=${idtipo}`);
  }


  tiposSelect(){
    const ruta ="http://localhost:8080/api/tipos"
    return this.http.get(ruta);
  }








}
