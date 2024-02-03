import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { Sucursal } from '../../../interfaces/sucursal.interface';
import { CpspModule } from '../../../cpsp/cpsp.module';
import { CpspService } from '../../../cpsp/services/cpsp.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss']
})
export class SucursalesComponent {

  public sucursales: Sucursal[] = []


  constructor(private router: Router, private viewportScroller: ViewportScroller, private cpspService: CpspService) {}
  ngOnInit() {
    // Obtener sucursales
    this.cpspService.getSucursales().subscribe(sucursales => this.sucursales = sucursales);

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Desplázate al inicio de la página
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

}
