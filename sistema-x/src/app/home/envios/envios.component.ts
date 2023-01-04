import { Component, OnInit } from '@angular/core';
import { Envio } from 'src/app/entities/envios';
import { EnviosService } from 'src/app/services/envios.service';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {
  listaEnvios: Envio[] | undefined;

  constructor(private enviosService: EnviosService) { }

  ngOnInit(): void {
    this.enviosService.enviosSelect().subscribe(
      (res) => {
        //console.log(res);
        this.listaEnvios = JSON.parse(JSON.stringify(res));
      }
    )
  }

}
