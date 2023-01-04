import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.component.html',
  styleUrls: ['./descargas.component.css']
})
export class DescargasComponent implements OnInit {
  descargas : any[]= [];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.descargas = JSON.parse(sessionStorage.getItem("descargas")!);
    console.log(this.descargas);
  }
  vaciarDescargas = () => {
    sessionStorage.removeItem("descargas");
    this.descargas = [];
    

  }

  eliminaritemDescargas = (item: any) => {
    //console.log();
    let carritoMenos = this.descargas.filter(itemDescargas => itemDescargas["id"] !== item.id)
    this.descargas = carritoMenos;
    sessionStorage.setItem("descargas", JSON.stringify(this.descargas));
   
  }




}
