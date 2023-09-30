import { Component } from '@angular/core';

@Component({
  selector: 'preguntas-frecuentes-component',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.scss']
})
export class PreguntasFrecuentesComponent {

  public isActive: boolean = false

  toggleInfo() {
    this.isActive = !this.isActive;
  }

}
