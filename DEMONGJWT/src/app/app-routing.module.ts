import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos/contactos.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:ContactosComponent,
    canActivate: [AuthGuard]
  },
 { path:'login',
  component:LoginComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
