import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './shared/Pages/footer/footer.component';
import { HeaderComponent } from './shared/Pages/header/header.component';
import { AvisoComponent } from './cpsp/pages/aviso/aviso.component';
import { HistoriaComponent } from './cpsp/pages/historia/historia.component';
import { AsesoriaComponent } from './cpsp/pages/asesoria/asesoria.component';
import { ProteccionComponent } from './cpsp/pages/proteccion/proteccion.component';
import { MedicoComponent } from './cpsp/pages/medico/medico.component';
import { ProfunComponent } from './cpsp/pages/profun/profun.component';
import { ServiciosComponent } from './cpsp/pages/servicios/servicios.component';
import { TrabajoComponent } from './cpsp/pages/trabajo/trabajo.component';
import { AgroAvioComponent } from './cpsp/components/simuladores/agro-avio/agro-avio.component';
import { BuroComponent } from './shared/Pages/buro/buro.component';
import { CpspModule } from './cpsp/cpsp.module';
import { RevistaAlianzasModule } from './revista-alianzas/revista-alianzas.module';
import { RedesSocialesComponent } from './shared/components/redes-sociales/redes-sociales.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AvisoComponent,
    HistoriaComponent,
    AsesoriaComponent,
    ProteccionComponent,
    MedicoComponent,
    ProfunComponent,
    ServiciosComponent,
    TrabajoComponent,
    AgroAvioComponent,
    BuroComponent,
    RedesSocialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RevistaAlianzasModule,
  ],
  exports:[
    RedesSocialesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
