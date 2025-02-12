import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesoriaComponent } from './pages/asesoria/asesoria.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { ProfunComponent } from './pages/profun/profun.component';
import { ProteccionComponent } from './pages/proteccion/proteccion.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'asesoria', component: AsesoriaComponent },
      { path: 'medico', component: MedicoComponent },
      { path: 'profun', component: ProfunComponent },
      { path: 'proteccion', component: ProteccionComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: '**', redirectTo: 'asesoria' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiosRoutingModule { }
