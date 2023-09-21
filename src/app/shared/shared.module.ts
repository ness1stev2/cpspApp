import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RedesSocialesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RedesSocialesComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
