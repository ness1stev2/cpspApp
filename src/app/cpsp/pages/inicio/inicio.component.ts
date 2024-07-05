import { Component } from '@angular/core';
import { BuzonComponentinicio } from './components/buzon/buzon.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { SloganComponent } from './components/slogan/slogan.component';
import { OtrosComponent } from './components/otros/otros.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { CuatroBotonesComponent } from './components/cuatro-botones/cuatro-botones.component';
import { RouterLink } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss'],
    standalone: true,
    imports: [
        GalleryComponent,
        RouterLink,
        CuatroBotonesComponent,
        BeneficiosComponent,
        OtrosComponent,
        SloganComponent,
        PreguntasFrecuentesComponent,
        BuzonComponentinicio,
    ],
})
export class InicioComponent {

  constructor() { }

}
