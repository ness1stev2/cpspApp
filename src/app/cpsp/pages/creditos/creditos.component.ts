import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { Credito } from '../../interfaces/credito.interface';
import { CreditosService } from '../../services/creditos.service';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.scss']
})
export class CreditosComponent implements OnInit {

  public creditos: Credito[] = [];
  public fechadecalculo: string = "Agosto 2023"

  isActive: boolean[] = Array(14).fill(false);

  toggleInfo(i: number) {
    // Si el elemento en la posición i ya es true, establecerlo en false junto con los demás.
    if (this.isActive[i]) {
      this.isActive = this.isActive.map(() => false);
    } else {
      // Si no, establecer solo el elemento en la posición i en true y los demás en false.
      this.isActive = this.isActive.map((_, index) => index === i);
    }
  }

  constructor(private router: Router, private viewportScroller: ViewportScroller, private creditoService : CreditosService) {}
  ngOnInit(): void {
    this.creditoService.getCreditos()
      .subscribe( creditos => this.creditos = creditos)



    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Desplázate al inicio de la página
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

}
