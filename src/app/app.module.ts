import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AhorrosComponent } from './cpsp/pages/ahorros/ahorros.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BuzonComponent } from './cpsp/pages/buzon/buzon.component';
import { CreditosComponent } from './cpsp/pages/creditos/creditos.component';
import { FooterComponent } from './shared/Pages/footer/footer.component';
import { HeaderComponent } from './shared/Pages/header/header.component';
import { InicioComponent } from './cpsp/pages/inicio/inicio.component';
import { RedesSocialesComponent } from './shared/components/redes-sociales/redes-sociales.component';
import { SocioComponent } from './cpsp/pages/socio/socio.component';
import { SucursalesComponent } from './cpsp/pages/sucursales/sucursales.component';

@NgModule({
  declarations: [
    AhorrosComponent,
    AppComponent,
    BuzonComponent,
    CreditosComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    RedesSocialesComponent,
    SocioComponent,
    SucursalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
