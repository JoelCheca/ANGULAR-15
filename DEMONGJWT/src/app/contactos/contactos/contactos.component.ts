import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Contacto } from 'src/app/model';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  contactos: Contacto[]|undefined;;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getContactos().subscribe
   (contactos =>{
      this.contactos= contactos;
    })
  }

}
