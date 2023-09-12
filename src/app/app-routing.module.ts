import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoComponent } from './cpsp/pages/aviso/aviso.component';
import { HistoriaComponent } from './cpsp/pages/historia/historia.component';
import { RevistaComponent } from './revista-alianzas/pages/revista/revista.component';
import { AlianzasComponent } from './revista-alianzas/pages/alianzas/alianzas.component';
import { AsesoriaComponent } from './cpsp/pages/asesoria/asesoria.component';
import { ProteccionComponent } from './cpsp/pages/proteccion/proteccion.component';
import { MedicoComponent } from './cpsp/pages/medico/medico.component';
import { ProfunComponent } from './cpsp/pages/profun/profun.component';
import { ServiciosComponent } from './cpsp/pages/servicios/servicios.component';
import { TrabajoComponent } from './cpsp/pages/trabajo/trabajo.component';
import { AgroAvioComponent } from './cpsp/components/simuladores/agro-avio/agro-avio.component';
import { BuroComponent } from './shared/Pages/buro/buro.component';

const routes: Routes = [

  {
    path: 'inicio',
    loadChildren: () => import('./cpsp/cpsp.module').then( m => m.CpspModule )
  },
  {
    path: 'btns',
    loadChildren: () => import('./revista-alianzas/revista-alianzas.module').then( m => m.RevistaAlianzasModule )
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
    path: 'trabajo',
    component: TrabajoComponent
  },
  {
    path: 'creditoagro',
    component: AgroAvioComponent
  },
  {
    path: 'buro',
    component: BuroComponent
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
    /* initialNavigation: 'enabledBlocking' */
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
