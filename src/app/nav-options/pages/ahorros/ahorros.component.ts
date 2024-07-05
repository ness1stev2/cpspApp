import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller, NgStyle } from '@angular/common';
import { filter } from 'rxjs';
import { PortadaComponent } from '../../../shared/components/portada/portada.component';

@Component({
    selector: 'app-ahorros',
    templateUrl: './ahorros.component.html',
    styleUrls: ['./ahorros.component.scss'],
    standalone: true,
    imports: [PortadaComponent, NgStyle]
})
export class AhorrosComponent {
  isActive: boolean[] = Array(4).fill(false);

  toggleInfo(i: number) {
    // Si el elemento en la posición i ya es true, establecerlo en false junto con los demás.
    if (this.isActive[i]) {
      this.isActive = this.isActive.map(() => false);
    } else {
      // Si no, establecer solo el elemento en la posición i en true y los demás en false.
      this.isActive = this.isActive.map((_, index) => index === i);
    }
  }

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}
  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Desplázate al inicio de la página
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

}
