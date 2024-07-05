import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller, NgFor } from '@angular/common';
import { filter } from 'rxjs';
import { CpspService } from '../../../cpsp/services/cpsp.service';
import { Alianza } from '../../../interfaces/alianzas.interface';
import { PortadaComponent } from '../../../shared/components/portada/portada.component';

@Component({
    selector: 'app-alianzas',
    templateUrl: './alianzas.component.html',
    styleUrls: ['./alianzas.component.scss'],
    standalone: true,
    imports: [PortadaComponent, NgFor]
})
export class AlianzasComponent {

  public alianzas: Alianza[] = []

  constructor(private router: Router, private viewportScroller: ViewportScroller, private cpspService: CpspService) { }
  ngOnInit() {
    this.cpspService.getAlianzas()
      .subscribe( alianzas => this.alianzas = alianzas)

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Desplázate al inicio de la página
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

}
