import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { NavOptionsRoutingModule } from './nav-options-routing.module';

import { AhorrosComponent } from '../nav-options/pages/ahorros/ahorros.component';
import { CreditosComponent } from '../nav-options/pages/creditos/creditos.component';
import { SocioComponent } from '../nav-options/pages/socio/socio.component';
import { SucursalesComponent } from '../nav-options/pages/sucursales/sucursales.component';
import { BuzonComponent } from '../nav-options/pages/buzon/buzon.component';
import { NovEventComponent } from '../nav-options/pages/nov-event/nov-event.component';
import { CreditoSimuladorComponent } from './components/creditos-simulador/creditos-simulador.component';


@NgModule({
  declarations: [
    AhorrosComponent,
    CreditosComponent,
    SocioComponent,
    SucursalesComponent,
    BuzonComponent,
    NovEventComponent,
    CreditoSimuladorComponent,
  ],
  imports: [
    CommonModule,
    NavOptionsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class NavOptionsModule { }
