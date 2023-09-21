import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevistaAlianzasRoutingModule } from './revista-alianzas-routing.module';
import { RevistaComponent } from './pages/revista/revista.component';
import { AlianzasComponent } from './pages/alianzas/alianzas.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    RevistaComponent,
    AlianzasComponent,
  ],
  imports: [
    CommonModule,
    RevistaAlianzasRoutingModule,
    SharedModule
  ]
})
export class RevistaAlianzasModule { }
