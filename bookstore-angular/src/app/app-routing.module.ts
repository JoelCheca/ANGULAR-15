import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CnsfecventComponent } from './pages/cnsfecvent/cnsfecvent.component';
import { CnspublicacionComponent } from './pages/cnspublicacion/cnspublicacion.component';
import { CnstipventComponent } from './pages/cnstipvent/cnstipvent.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PublicacionComponent } from './pages/publicacion/publicacion.component';
import { VentasComponent } from './pages/ventas/ventas.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'publicacion', component:PublicacionComponent},
  {path:'ventas', component:VentasComponent},
  {path:'cnspublicacion', component:CnspublicacionComponent},
  {path:'cnsfecvent', component:CnsfecventComponent},
  {path:'cnstipvent', component:CnstipventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
