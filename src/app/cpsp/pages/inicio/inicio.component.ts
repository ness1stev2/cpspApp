import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  isActive: boolean = false

  toggleInfo() {
    this.isActive = !this.isActive;
  }


}
