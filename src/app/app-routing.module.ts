import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditoSimuladorComponent } from './nav-options/components/creditos-simulador/creditos-simulador.component';


const routes: Routes = [

  {
    path: 'inicio',
    loadChildren: () => import('./cpsp/cpsp.module').then( m => m.CpspModule )
  },
  {
    path: 'servicio',
    loadChildren: () => import('./nav-options/nav-options.module').then( m => m.NavOptionsModule )
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
