import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller, NgStyle } from '@angular/common';
import { filter } from 'rxjs';
import { PortadaComponent } from '../../../shared/components/portada/portada.component';

@Component({
    selector: 'app-buzon',
    templateUrl: './buzon.component.html',
    styleUrls: ['./buzon.component.scss'],
    standalone: true,
    imports: [PortadaComponent, NgStyle]
})
export class BuzonComponent {
  isActive: boolean = false;
  isActive2: boolean = false;

  toggleInfo() {
    this.isActive = true
    this.isActive2 = false
  }
  toggleInfo2() {
    this.isActive = false
    this.isActive2 = true
  }

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}
  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Desplázate al inicio de la página
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

}


// Recovery Code: FMkn$2xd_kGgAt*
