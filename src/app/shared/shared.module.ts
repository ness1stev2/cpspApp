import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';

import { PortadaComponent } from './components/portada/portada.component';



@NgModule({
  declarations: [
    RedesSocialesComponent,
    HeaderComponent,
    FooterComponent,
    PortadaComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RedesSocialesComponent,
    HeaderComponent,
    FooterComponent,
    PortadaComponent,
  ]
})
export class SharedModule { }
