import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtrosRoutingModule } from './otros-routing.module';
import { AvisoComponent } from './pages/aviso/aviso.component';
import { BuroComponent } from './pages/buro/buro.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { TrabajoComponent } from './pages/trabajo/trabajo.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AvisoComponent,
    BuroComponent,
    HistoriaComponent,
    TrabajoComponent,
  ],
  imports: [
    CommonModule,
    OtrosRoutingModule,
    SharedModule
  ]
})
export class OtrosModule { }
