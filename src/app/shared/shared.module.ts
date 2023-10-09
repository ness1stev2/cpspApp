import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { RouterModule } from '@angular/router';
import { ImgComponent } from './components/img/img.component';



@NgModule({
  declarations: [
    RedesSocialesComponent,
    HeaderComponent,
    FooterComponent,
    ImgComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RedesSocialesComponent,
    HeaderComponent,
    FooterComponent,
    ImgComponent
  ]
})
export class SharedModule { }
