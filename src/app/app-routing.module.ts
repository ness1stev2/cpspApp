import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditoSimuladorComponent } from './cpsp/components/creditos-simulador/creditos-simulador.component';


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
    path: 'beneficios',
    loadChildren: () => import('./beneficios/beneficios.module').then( m => m.BeneficiosModule )
  },
  {
    path: 'info',
    loadChildren: () => import('./otros/otros.module').then( m => m.OtrosModule )
  },
  {
    path: 'simulador-creditos',
    component: CreditoSimuladorComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  // TODO: Falta agregar y crear la pagina 404
  {
    path: '**',
    redirectTo: 'inicio',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
    /* initialNavigation: 'enabledBlocking' */
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
