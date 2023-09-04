import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './cpsp/pages/inicio/inicio.component';
import { SocioComponent } from './cpsp/pages/socio/socio.component';
import { SucursalesComponent } from './cpsp/pages/sucursales/sucursales.component';
import { CreditosComponent } from './cpsp/pages/creditos/creditos.component';
import { AhorrosComponent } from './cpsp/pages/ahorros/ahorros.component';
import { BuzonComponent } from './cpsp/pages/buzon/buzon.component';
import { AvisoComponent } from './cpsp/pages/aviso/aviso.component';
import { HistoriaComponent } from './cpsp/pages/historia/historia.component';
import { RevistaComponent } from './cpsp/pages/revista/revista.component';

const routes: Routes = [

  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'socio',
    component: SocioComponent
  },
  {
    path: 'sucursales',
    component: SucursalesComponent
  },
  {
    path: 'creditos',
    component: CreditosComponent
  },
  {
    path: 'ahorros',
    component: AhorrosComponent
  },
  {
    path: 'buzon',
    component: BuzonComponent
  },
  {
    path: 'aviso',
    component: AvisoComponent
  },
  {
    path: 'historia',
    component: HistoriaComponent
  },
  {
    path: 'revista',
    component: RevistaComponent
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
