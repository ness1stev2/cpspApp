import { Routes } from '@angular/router';
import { AvisoComponent } from './pages/aviso/aviso.component';
import { BuroComponent } from './pages/buro/buro.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { TrabajoComponent } from './pages/trabajo/trabajo.component';
import { DespachoCobranzaComponent } from './pages/despacho-cobranza/despacho-cobranza.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'aviso', component: AvisoComponent},
      { path: 'buro', component: BuroComponent},
      { path: 'historia', component: HistoriaComponent},
      { path: 'trabajo', component: TrabajoComponent},
      { path: 'despachos-cobranza', component: DespachoCobranzaComponent},
      { path: '**', redirectTo: 'aviso'},
    ]
  }
];
