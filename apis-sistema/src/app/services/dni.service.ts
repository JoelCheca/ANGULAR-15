import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DniService {

  constructor(private http: HttpClient) { }



  private baseURL ="https://api.apis.net.pe/v1/dni?numero"

  dniSelect(dni:string): Observable<any>{
     console.log(dni)    
    return this.http.get(`${this.baseURL}=${dni}`);
  }

}