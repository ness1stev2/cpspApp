import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpspRoutingModule } from './cpsp-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { AhorrosComponent } from './pages/ahorros/ahorros.component';
import { BuzonComponent } from './pages/buzon/buzon.component';
import { SocioComponent } from './pages/socio/socio.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';


@NgModule({
  declarations: [
    InicioComponent,
    SucursalesComponent,
    CreditosComponent,
    AhorrosComponent,
    BuzonComponent,
    SocioComponent,
    RedesSocialesComponent
  ],
  imports: [
    CommonModule,
    CpspRoutingModule,
  ]
})
export class CpspModule { }
