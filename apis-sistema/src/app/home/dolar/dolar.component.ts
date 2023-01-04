import { Component, OnInit } from '@angular/core';
import { Dolar } from 'src/app/entities/dolar';
import { DolarService } from 'src/app/services/dolar.service';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit {
  listaDolar: Dolar[] | undefined;
  constructor(private dolarService: DolarService) { }

  ngOnInit(): void {
    this.dolarService.dolarSelect().subscribe(
    (res) => {
      
      this.listaDolar = JSON.parse(JSON.stringify(res));
      console.log(this.listaDolar);
      
    }
  )
}

}
