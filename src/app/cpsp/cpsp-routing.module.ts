import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { AhorrosComponent } from './pages/ahorros/ahorros.component';
import { BuzonComponent } from './pages/buzon/buzon.component';
import { SocioComponent } from './pages/socio/socio.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'bienvenido', component: InicioComponent},
      { path: 'sucursales', component: SucursalesComponent},
      { path: 'creditos', component: CreditosComponent},
      { path: 'cuentas-deposito', component: AhorrosComponent},
      { path: 'buzon', component: BuzonComponent},
      { path: 'socio', component: SocioComponent},
      { path: '**', redirectTo: 'bienvenido'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpspRoutingModule { }
