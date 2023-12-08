import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {

  animatedElements: Element[] = [];

  constructor(private router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Desplázate al inicio de la página
      this.viewportScroller.scrollToPosition([0, 0]);
    });

    this.animatedElements = Array.from(document.querySelectorAll('.animated-element'));
  }

  onScroll() {
    this.animatedElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add('animated');
      }
    });
  }

  isElementInViewport(element: Element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Calcular la posición vertical en la que se activará la animación (10% del viewport)
    const activationPoint = windowHeight * 0.80;

    // Comprobar si el elemento está dentro del 10% superior del viewport
    return rect.top <= activationPoint;
  }
}
