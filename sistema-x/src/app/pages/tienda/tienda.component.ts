import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/entities/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  listaCategorias: Categoria[] | undefined;
  categoriaElegida: Categoria | undefined;
  constructor(private categoriaService: CategoriasService) { }
  ngOnInit(): void {
    this.categoriaService.categoriaSelect().subscribe(
      (res) => {
        console.log(res);
        this.listaCategorias = JSON.parse(JSON.stringify(res));
      }
    )
  }

  seleccionarCategoria(itemSeleccionado: Categoria){
    //console.log(itemSeleccionado);
    this.categoriaElegida = itemSeleccionado;
  }

}