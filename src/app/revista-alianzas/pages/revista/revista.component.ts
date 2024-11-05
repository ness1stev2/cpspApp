import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgIf, ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { PortadaComponent } from '../../../shared/components/portada/portada.component';

interface Revista {
  pdf: string,
  img: string,
  mesyAnio: string,
}

@Component({
  selector: 'app-revista',
  templateUrl: './revista.component.html',
  styleUrls: ['./revista.component.scss'],
  standalone: true,
  imports: [PortadaComponent, NgIf]
})
export class RevistaComponent {

  revistasPorAnio: { [anio: string]: Revista[] } = {
    '2024': [
      {
        pdf: 'REV Noviembre 2024.pdf',
        img: 'REV Noviembre 2024.webp',
        mesyAnio: 'Noviembre 2024',
      },
      {
        pdf: 'REV Octubre 2024.pdf',
        img: 'REV Octubre 2024.webp',
        mesyAnio: 'Octubre 2024',
      },
      {
        pdf: 'REV Septiembre 2024.pdf',
        img: 'REV Septiembre 2024.webp',
        mesyAnio: 'Septiembre 2024',
      },
      {
        pdf: 'REV Agosto 2024.pdf',
        img: 'REV Agosto 2024.webp',
        mesyAnio: 'Agosto 2024',
      },
      {
        pdf: 'REV Julio 2024.pdf',
        img: 'REV Julio 2024.webp',
        mesyAnio: 'JULIO 2024',
      },
      {
        pdf: 'REV Junio 2024.pdf',
        img: 'REV Junio 2024.webp',
        mesyAnio: 'JUNIO 2024',
      },
      {
        pdf: 'REV Mayo 2024.pdf',
        img: 'REV Mayo 2024.webp',
        mesyAnio: 'MAYO 2024',
      },
      {
        pdf: 'REV Abril 2024.pdf',
        img: 'REV Abril 2024.webp',
        mesyAnio: 'ABRIL 2024',
      },
      {
        pdf: 'REV Marzo 2024.pdf',
        img: 'REV Marzo 2024.webp',
        mesyAnio: 'MARZO 2024',
      },
      {
        pdf: 'REV Febrero 2024.pdf',
        img: 'REV Febrero 2024.webp',
        mesyAnio: 'FEBRERO 2024',
      },
      {
        pdf: 'REV Enero 2024.pdf',
        img: 'REV Enero 2024.webp',
        mesyAnio: 'ENERO 2024',
      },
    ],
    '2023': [
      {
        pdf: 'REV Diciembre 2023.pdf',
        img: 'REV Diciembre 2023.webp',
        mesyAnio: 'DICIEMBRE 2023',
      },
      {
        pdf: 'REV Noviembre 2023.pdf',
        img: 'REV Noviembre 2023.webp',
        mesyAnio: 'NOVIEMBRE 2023',
      },
      {
        pdf: 'REV Octubre 2023.pdf',
        img: 'REV Octubre 2023.webp',
        mesyAnio: 'OCTUBRE 2023',
      },
      {
        pdf: 'REV Septiembre 2023.pdf',
        img: 'REV Septiembre 2023.webp',
        mesyAnio: 'SEPTIEMBRE 2023',
      },
      {
        pdf: 'REV Agosto 2023.pdf',
        img: 'REV Agosto 2023.webp',
        mesyAnio: 'AGOSTO 2023',
      },
      {
        pdf: 'REV Julio 2023.pdf',
        img: 'REV Julio 2023.webp',
        mesyAnio: 'JULIO 2023',
      },
      {
        pdf: 'REV Junio 2023.pdf',
        img: 'REV Junio 2023.webp',
        mesyAnio: 'JUNIO 2023',
      },
      {
        pdf: 'REV Mayo 2023.pdf',
        img: 'REV Mayo 2023.webp',
        mesyAnio: 'MAYO 2023',
      },
      {
        pdf: 'REV Abril 2023.pdf',
        img: 'REV Abril 2023.webp',
        mesyAnio: 'ABRIL 2023',
      },
      {
        pdf: 'REV Marzo 2023.pdf',
        img: 'REV Marzo 2023.webp',
        mesyAnio: 'MARZO 2023',
      },
      {
        pdf: 'REV Febrero 2023.pdf',
        img: 'REV Febrero 2023.webp',
        mesyAnio: 'FEBRERO 2023',
      },
      {
        pdf: 'REV Enero 2023.pdf',
        img: 'REV Enero 2023.webp',
        mesyAnio: 'ENERO 2023',
      },
    ],
    '2022': [
      {
        pdf: 'REV Diciembre 2022.pdf',
        img: 'REV Diciembre 2022.webp',
        mesyAnio: 'DICIEMBRE 2022',
      },
      {
        pdf: 'REV Noviembre 2022.pdf',
        img: 'REV Noviembre 2022.webp',
        mesyAnio: 'NOVIEMBRE 2022',
      },
      {
        pdf: 'REV Octubre 2022.pdf',
        img: 'REV Octubre 2022.webp',
        mesyAnio: 'OCTUBRE 2022',
      },
      {
        pdf: 'REV Septiembre 2022.pdf',
        img: 'REV Septiembre 2022.webp',
        mesyAnio: 'SEPTIEMBRE 2022',
      },
      {
        pdf: 'REV Agosto 2022.pdf',
        img: 'REV Agosto 2022.webp',
        mesyAnio: 'AGOSTO 2022',
      },
      {
        pdf: 'REV Julio 2022.pdf',
        img: 'REV Julio 2022.webp',
        mesyAnio: 'JULIO 2022',
      },
      {
        pdf: 'REV Junio 2022.pdf',
        img: 'REV Junio 2022.webp',
        mesyAnio: 'JUNIO 2022',
      },
      {
        pdf: 'REV Mayo 2022.pdf',
        img: 'REV Mayo 2022.webp',
        mesyAnio: 'MAYO 2022',
      },
      {
        pdf: 'REV Abril 2022.pdf',
        img: 'REV Abril 2022.webp',
        mesyAnio: 'ABRIL 2022',
      },
      {
        pdf: 'REV Marzo 2022.pdf',
        img: 'REV Marzo 2022.webp',
        mesyAnio: 'MARZO 2022',
      },
      {
        pdf: 'REV Febrero 2022.pdf',
        img: 'REV Febrero 2022.webp',
        mesyAnio: 'FEBRERO 2022',
      },
      {
        pdf: 'REV Enero 2022.pdf',
        img: 'REV Enero 2022.webp',
        mesyAnio: 'ENERO 2022',
      },
    ],
    '2021': [
      {
        pdf: 'REV Diciembre 2021.pdf',
        img: 'REV Diciembre 2021.webp',
        mesyAnio: 'DICIEMBRE 2021',
      },
      {
        pdf: 'REV Noviembre 2021.pdf',
        img: 'REV Noviembre 2021.webp',
        mesyAnio: 'NOVIEMBRE 2021',
      },
      {
        pdf: 'REV Octubre 2021.pdf',
        img: 'REV Octubre 2021.webp',
        mesyAnio: 'OCTUBRE 2021',
      },
      {
        pdf: 'REV Septiembre 2021.pdf',
        img: 'REV Septiembre 2021.webp',
        mesyAnio: 'SEPTIEMBRE 2021',
      },
      {
        pdf: 'REV Agosto 2021.pdf',
        img: 'REV Agosto 2021.webp',
        mesyAnio: 'AGOSTO 2021',
      },
      {
        pdf: 'REV Julio 2021.pdf',
        img: 'REV Julio 2021.webp',
        mesyAnio: 'JULIO 2021',
      },
      {
        pdf: 'REV Junio 2021.pdf',
        img: 'REV Junio 2021.webp',
        mesyAnio: 'JUNIO 2021',
      },
      {
        pdf: 'REV Mayo 2021.pdf',
        img: 'REV Mayo 2021.webp',
        mesyAnio: 'MAYO 2021',
      },
      {
        pdf: 'REV Abril 2021.pdf',
        img: 'REV Abril 2021.webp',
        mesyAnio: 'ABRIL 2021',
      },
      {
        pdf: 'REV Marzo 2021.pdf',
        img: 'REV Marzo 2021.webp',
        mesyAnio: 'MARZO 2021',
      },
      {
        pdf: 'REV Febrero 2021.pdf',
        img: 'REV Febrero 2021.webp',
        mesyAnio: 'FEBRERO 2021',
      },
      {
        pdf: 'REV Enero 2021.pdf',
        img: 'REV Enero 2021.webp',
        mesyAnio: 'ENERO 2021',
      },
    ],
  };

  revistaFlag: { [key: string]: boolean } = {
    '2023': false,
    '2022': false,
    '2021': false,
  };

  mostrarRevistas(anio: string): boolean {
    return this.revistaFlag[anio] = !this.revistaFlag[anio];
  }

  constructor(private router: Router, private viewportScroller: ViewportScroller) { }
  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Desplázate al inicio de la página
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

}
