import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { PortadaComponent } from '../../../shared/components/portada/portada.component';

interface SocioMayor {

}

@Component({
    selector: 'app-socio',
    templateUrl: './socio.component.html',
    styleUrls: ['./socio.component.scss'],
    standalone: true,
    imports: [PortadaComponent]
})
export class SocioComponent {

  socioMayor: string[]  = [
    'Identificación oficial vigente con fotografía (INE, Pasaporte Mexicano,Cédula Profesional, licencia para conducir del Estado de Jalisco).',
    'Constancia de RFC con homoclave.',
    'Constancia de CURP.',
    'Comprobante de domicilio no mayor a 60 días de su emisión.',
    'Parte Social $1,000.00.',
  ]

  socioMenor: string[] = [
    'Acta de nacimiento del menor.',
    'Presentarse acompañado de papá o mamá con identificación oficial con fotografía (INE, Pasaporte Mexicano, Cédula Profesional, Licencia para conducir del Estado de Jalisco).',
    'Constancia de CURP del menor.',
    'Constancia de RFC con homoclave de padre/tutor.',
    'Comprobante de domicilio no mayor a 60 días de su emisión.',
    '$100.00 mínimo para abrir la cuenta.',
  ]

  socioExtranjero: string[] = [
    'Carta de Naturalización. (Instrumento jurídico por el cual se acredita el otorgamiento de la nacionalidad mexicana a los extranjeros).',
    'Dato de su domicilio en el país de origen.',
  ]

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}
  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Desplázate al inicio de la página
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

}
