import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent {

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}
  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Desplázate al inicio de la página
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

}
