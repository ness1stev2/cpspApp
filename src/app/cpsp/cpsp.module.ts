import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiosComponent } from './pages/inicio/components/beneficios/beneficios.component';

import { BuzonComponentinicio } from './pages/inicio/components/buzon/buzon.component';
import { CpspRoutingModule } from './cpsp-routing.module';

import { CuatroBotonesComponent } from './pages/inicio/components/cuatro-botones/cuatro-botones.component';
import { GalleryComponent } from './pages/inicio/components/gallery/gallery.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import { OtrosComponent } from './pages/inicio/components/otros/otros.component';
import { PreguntasFrecuentesComponent } from './pages/inicio/components/preguntas-frecuentes/preguntas-frecuentes.component';

import { SharedModule } from '../shared/shared.module';
import { SloganComponent } from './pages/inicio/components/slogan/slogan.component';


@NgModule({
  declarations: [
    BeneficiosComponent,
    BuzonComponentinicio,

    CuatroBotonesComponent,
    GalleryComponent,
    InicioComponent,
    OtrosComponent,
    PreguntasFrecuentesComponent,
    SloganComponent,
  ],
  imports: [
    CommonModule,
    CpspRoutingModule,
    SharedModule,

  ],
})
export class CpspModule { }
