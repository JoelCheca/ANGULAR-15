import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentasComponent } from './pages/cuentas/cuentas.component';
import { DescargasComponent } from './pages/descargas/descargas.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { GamerComponent } from './pages/gamer/gamer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { OperacionesComponent } from './pages/operaciones/operaciones.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'productos', component:ProductosComponent},
  {path:'gamer',component:GamerComponent},
  {path:'descargas', component:DescargasComponent},
  {path:'empleados', component:EmpleadosComponent},
  {path:'operaciones', component:OperacionesComponent},
  {path:'cuentas', component:CuentasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
