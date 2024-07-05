import { Component } from '@angular/core';
import { NovEvent } from '../../../interfaces/nov-event.interface';
import { CpspService } from '../../../cpsp/services/cpsp.service';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller, NgFor, NgClass } from '@angular/common';
import { filter } from 'rxjs';
import { RedesSocialesComponent } from '../../../shared/components/redes-sociales/redes-sociales.component';

@Component({
    selector: 'app-nov-event',
    templateUrl: './nov-event.component.html',
    styleUrls: ['./nov-event.component.scss'],
    standalone: true,
    imports: [RedesSocialesComponent, NgFor, NgClass]
})
export class NovEventComponent {

  public novEvent: NovEvent[] = [];

  constructor(private cpspservice: CpspService, private router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.cpspservice.getNovEvent().subscribe(novEvent => this.novEvent = novEvent);

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Desplázate al inicio de la página
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }


}
