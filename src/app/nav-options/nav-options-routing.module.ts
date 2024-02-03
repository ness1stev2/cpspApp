import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorrosComponent } from './pages/ahorros/ahorros.component';
import { BuzonComponent } from './pages/buzon/buzon.component';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { SocioComponent } from './pages/socio/socio.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { NovEventComponent } from '../nav-options/pages/nov-event/nov-event.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sucursales', component: SucursalesComponent },
      { path: 'creditos', component: CreditosComponent },
      { path: 'cuentas-deposito', component: AhorrosComponent },
      { path: 'buzon', component: BuzonComponent },
      { path: 'socio', component: SocioComponent },
      { path: 'nov-event', component: NovEventComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavOptionsRoutingModule { }
