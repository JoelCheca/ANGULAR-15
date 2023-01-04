import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GamerComponent } from './pages/gamer/gamer.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { DescargasComponent } from './pages/descargas/descargas.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { DolarComponent } from './home/dolar/dolar.component';
import { ObjToArrayPipe } from './objToArray.pipe';
import { OperacionesComponent } from './pages/operaciones/operaciones.component';
import { CuentasComponent } from './pages/cuentas/cuentas.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainNavComponent,
    MainFooterComponent,
    MainBannerComponent,
    InicioComponent,
    GamerComponent,
    DescargasComponent,
    ProductosComponent,
    EmpleadosComponent,
    DolarComponent,
    ObjToArrayPipe,
    OperacionesComponent,
    CuentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
