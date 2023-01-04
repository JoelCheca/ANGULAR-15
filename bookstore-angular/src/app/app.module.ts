import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PublicacionComponent } from './pages/publicacion/publicacion.component';

import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VentasComponent } from './pages/ventas/ventas.component';
import { CnspublicacionComponent } from './pages/cnspublicacion/cnspublicacion.component';
import { CnstipventComponent } from './pages/cnstipvent/cnstipvent.component';
import { CnsfecventComponent } from './pages/cnsfecvent/cnsfecvent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainNavComponent,
    MainBannerComponent,
    InicioComponent,
    PublicacionComponent,
    VentasComponent,
    CnspublicacionComponent,
    CnstipventComponent,
    CnsfecventComponent
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
