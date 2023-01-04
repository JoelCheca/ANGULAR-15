import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamerService {

  constructor(private http: HttpClient) { }

  gamerSelect(){
    const ruta ="https://www.freetogame.com/api/games"
    return this.http.get(ruta);
  }
}
