import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'preguntas-frecuentes-component',
    templateUrl: './preguntas-frecuentes.component.html',
    styleUrls: ['./preguntas-frecuentes.component.scss'],
    standalone: true,
    imports: [NgStyle, RouterLink]
})
export class PreguntasFrecuentesComponent {

  public isActive: boolean = false

  toggleInfo() {
    this.isActive = !this.isActive;
  }

}
