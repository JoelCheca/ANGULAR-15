import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/entities/gamer';
import { GamerService } from 'src/app/services/gamer.service';

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.css']
})
export class GamerComponent implements OnInit {
  listaGames: Game[] | undefined;
  datos: Game[] | undefined;
  textoBuscar: String = "";
  columnaOrden: String = "precio";
  reversa: boolean = false;
  pagina: number = 1;
  

  constructor(private gamesService: GamerService) { }

  game: Game = new Game();

  ngOnInit(): void {
    console.log(this.game);
    this.gamesService.gamerSelect().subscribe(
      (res) => {
        //console.log(res)
        this.listaGames = JSON.parse(JSON.stringify(res))
        this.datos = JSON.parse(JSON.stringify(res))
      }
    )
  }
  agregarDescargas(item: any): void {
    item.cantidad = 1;
    //console.log(item)
    let descargas: any = [];

    if (sessionStorage.getItem("descargas")) {
      descargas = JSON.parse(sessionStorage.getItem("descargas")!)

      let index = -1;
      for (let i = 0; i < descargas.length; i++) {
        let itemDescargas = descargas[i];
        if (itemDescargas.id === item.id) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        descargas.push(item);
        sessionStorage.setItem("descargas", JSON.stringify(descargas));
      }
      else {
        let iDescargas = descargas[index];
        iDescargas.cantidad++;
        descargas[index] = iDescargas;
        sessionStorage.setItem("descargas", JSON.stringify(descargas));
      }
    }
    else {
      descargas.push(item);
      sessionStorage.setItem("descargas", JSON.stringify(descargas))
    }



  }


  buscar = () => {
    let datosFiltrados = this.listaGames?.filter((item: any) => {
      return this.textoBuscar !== ""
        ? (item["title"]).toLowerCase().indexOf(this.textoBuscar.toLowerCase()) > -1
        : true
    }
    )
    this.datos = datosFiltrados;


  }

  setOrder = (value: String) => {

    if (this.columnaOrden = value) {
      this.reversa = !this.reversa
    }
    else {
      this.columnaOrden = value
    };
  }









}

