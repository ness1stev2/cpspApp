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
import { AlianzasComponent } from './cpsp/pages/alianzas/alianzas.component';
import { AsesoriaComponent } from './cpsp/pages/asesoria/asesoria.component';
import { ProteccionComponent } from './cpsp/pages/proteccion/proteccion.component';
import { MedicoComponent } from './cpsp/pages/medico/medico.component';
import { ProfunComponent } from './cpsp/pages/profun/profun.component';
import { ServiciosComponent } from './cpsp/pages/servicios/servicios.component';

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
    path: 'alianzas',
    component: AlianzasComponent
  },
  {
    path: 'asesoria',
    component: AsesoriaComponent
  },
  {
    path: 'proteccion',
    component: ProteccionComponent
  },
  {
    path: 'medico',
    component: MedicoComponent
  },
  {
    path: 'profun',
    component: ProfunComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
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
