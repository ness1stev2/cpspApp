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
import { AvisoComponent } from './cpsp/pages/aviso/aviso.component';
import { HistoriaComponent } from './cpsp/pages/historia/historia.component';
import { RevistaComponent } from './cpsp/pages/revista/revista.component';
import { AlianzasComponent } from './cpsp/pages/alianzas/alianzas.component';
import { AsesoriaComponent } from './cpsp/pages/asesoria/asesoria.component';
import { ProteccionComponent } from './cpsp/pages/proteccion/proteccion.component';
import { MedicoComponent } from './cpsp/pages/medico/medico.component';
import { ProfunComponent } from './cpsp/pages/profun/profun.component';
import { ServiciosComponent } from './cpsp/pages/servicios/servicios.component';

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
    AvisoComponent,
    HistoriaComponent,
    RevistaComponent,
    AlianzasComponent,
    AsesoriaComponent,
    ProteccionComponent,
    MedicoComponent,
    ProfunComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
