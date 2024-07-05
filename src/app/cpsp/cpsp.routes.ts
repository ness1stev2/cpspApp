import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CreditoSimuladorComponent } from '../nav-options/components/creditos-simulador/creditos-simulador.component';


export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'simulador/:id', component: CreditoSimuladorComponent },
  { path: '**', redirectTo: ''}
];
