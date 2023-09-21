import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesoriaComponent } from './pages/asesoria/asesoria.component';
import { BeneficiosRoutingModule } from './beneficios-routing.module';
import { MedicoComponent } from './pages/medico/medico.component';
import { ProfunComponent } from './pages/profun/profun.component';
import { ProteccionComponent } from './pages/proteccion/proteccion.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AsesoriaComponent,
    MedicoComponent,
    ProfunComponent,
    ProteccionComponent,
    ServiciosComponent,
  ],
  imports: [
    CommonModule,
    BeneficiosRoutingModule,
    SharedModule
  ]
})
export class BeneficiosModule { }
