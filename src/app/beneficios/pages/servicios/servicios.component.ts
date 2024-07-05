import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { PortadaComponent } from '../../../shared/components/portada/portada.component';

@Component({
    selector: 'app-servicios',
    templateUrl: './servicios.component.html',
    styleUrls: ['./servicios.component.scss'],
    standalone: true,
    imports: [PortadaComponent]
})
export class ServiciosComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}
  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Desplázate al inicio de la página
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
