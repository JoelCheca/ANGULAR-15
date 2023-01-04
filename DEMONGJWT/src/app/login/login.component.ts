import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Credentials } from '../model';
import{NgForm} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  creds: Credentials={
    email:'',
    password:''
  };

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

 

login(form: NgForm){
  console.log('form value', form.value);
  this.apiService.login(this.creds).subscribe(response=>{
    this.router.navigate(['/']);
  })

}

}
