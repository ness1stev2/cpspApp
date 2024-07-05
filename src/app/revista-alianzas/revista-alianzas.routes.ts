import { RouterModule, Routes } from '@angular/router';
import { RevistaComponent } from './pages/revista/revista.component';
import { AlianzasComponent } from './pages/alianzas/alianzas.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'alianzas', component: AlianzasComponent},
      { path: 'revistas', component: RevistaComponent},
      { path: '**', redirectTo: 'alianzas'},
    ]
  }
];
