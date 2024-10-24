import { Routes } from '@angular/router';
import { AhorrosComponent } from './pages/ahorros/ahorros.component';
import { BuzonComponent } from './pages/buzon/buzon.component';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { SocioComponent } from './pages/socio/socio.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { NovEventComponent } from './pages/nov-event/nov-event.component';
import { EducoofComponent } from './pages/educoof/educoof.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { SeccionNegociosComponent } from './pages/seccionnegocios/seccion-negocios.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sucursales', component: SucursalesComponent },
      { path: 'creditos', component: CreditosComponent },
      { path: 'cuentas-deposito', component: AhorrosComponent },
      { path: 'buzon', component: BuzonComponent },
      { path: 'socio', component: SocioComponent },
      { path: 'mantenimiento', component: MantenimientoComponent },
      { path: 'nov-event', component: NovEventComponent},
      { path: 'educoof', component: EducoofComponent},
      { path: 'blog', component: BlogComponent},
      { path: 'negocios', component: SeccionNegociosComponent},
    ]
  }
];
