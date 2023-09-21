import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoComponent } from './pages/aviso/aviso.component';
import { BuroComponent } from './pages/buro/buro.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { TrabajoComponent } from './pages/trabajo/trabajo.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'aviso', component: AvisoComponent},
      { path: 'buro', component: BuroComponent},
      { path: 'historia', component: HistoriaComponent},
      { path: 'trabajo', component: TrabajoComponent},
      { path: '**', redirectTo: 'aviso'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtrosRoutingModule { }
