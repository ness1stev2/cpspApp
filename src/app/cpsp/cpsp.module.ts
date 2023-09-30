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
import { CuatroBotonesComponent } from './pages/inicio/components/cuatro-botones/cuatro-botones.component';
import { BeneficiosComponent } from './pages/inicio/components/beneficios/beneficios.component';
import { OtrosComponent } from './pages/inicio/components/otros/otros.component';
import { SloganComponent } from './pages/inicio/components/slogan/slogan.component';
import { PreguntasFrecuentesComponent } from './pages/inicio/components/preguntas-frecuentes/preguntas-frecuentes.component';
import { BuzonComponentinicio } from './pages/inicio/components/buzon/buzon.component';



@NgModule({
  declarations: [
    CreditoSimuladorComponent,
    AhorrosComponent,
    BuzonComponent,
    CreditosComponent,
    InicioComponent,
    SocioComponent,
    SucursalesComponent,
    CuatroBotonesComponent,
    BeneficiosComponent,
    OtrosComponent,
    SloganComponent,
    PreguntasFrecuentesComponent,
    BuzonComponentinicio
  ],
  imports: [
    CommonModule,
    CpspRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class CpspModule { }
