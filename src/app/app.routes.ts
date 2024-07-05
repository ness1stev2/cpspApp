import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: 'inicio',
    loadChildren: () => import('./cpsp/cpsp.routes').then( m => m.routes ),
  },
  {
    path: 'servicio',
    loadChildren: () => import('./nav-options/nav-options.routes').then( m => m.routes )
  },
  {
    path: 'btns',
    loadChildren: () => import('./revista-alianzas/revista-alianzas.routes').then( m => m.routes )
  },
  {
    path: 'beneficios',
    loadChildren: () => import('./beneficios/beneficios.routes').then( m => m.routes )
  },
  {
    path: 'info',
    loadChildren: () => import('./otros/otros.routes').then( m => m.routes )
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/inicio',
  },

];
