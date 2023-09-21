import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhorrosComponent } from './pages/ahorros/ahorros.component';
import { BuzonComponent } from './pages/buzon/buzon.component';
import { CpspRoutingModule } from './cpsp-routing.module';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { SocioComponent } from './pages/socio/socio.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditoSimuladorComponent } from './components/creditos-simulador/creditos-simulador.component';



@NgModule({
  declarations: [
    CreditoSimuladorComponent,
    AhorrosComponent,
    BuzonComponent,
    CreditosComponent,
    InicioComponent,
    SocioComponent,
    SucursalesComponent,
  ],
  imports: [
    CommonModule,
    CpspRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class CpspModule { }
