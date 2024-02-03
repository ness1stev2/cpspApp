import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CreditoSimuladorComponent } from '../nav-options/components/creditos-simulador/creditos-simulador.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'bienvenido', component: InicioComponent},
      { path: 'simulador/:id', component: CreditoSimuladorComponent},
      { path: '**', redirectTo: 'bienvenido'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpspRoutingModule { }
