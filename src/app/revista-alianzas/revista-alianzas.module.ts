import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevistaAlianzasRoutingModule } from './revista-alianzas-routing.module';
import { RevistaComponent } from './pages/revista/revista.component';
import { AlianzasComponent } from './pages/alianzas/alianzas.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';



@NgModule({
  declarations: [
    RevistaComponent,
    AlianzasComponent,
    RedesSocialesComponent
  ],
  imports: [
    CommonModule,
    RevistaAlianzasRoutingModule
  ]
})
export class RevistaAlianzasModule { }
