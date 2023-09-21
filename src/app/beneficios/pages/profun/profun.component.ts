import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-profun',
  templateUrl: './profun.component.html',
  styleUrls: ['./profun.component.scss']
})
export class ProfunComponent {

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}
  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Desplázate al inicio de la página
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

}
