import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'carrito', component: CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
