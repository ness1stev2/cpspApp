import { Component } from '@angular/core';

@Component({
  selector: 'app-ahorros',
  templateUrl: './ahorros.component.html',
  styleUrls: ['./ahorros.component.scss']
})
export class AhorrosComponent {
  isActive: boolean[] = Array(4).fill(false);

  toggleInfo(i: number) {
    // Si el elemento en la posición i ya es true, establecerlo en false junto con los demás.
    if (this.isActive[i]) {
      this.isActive = this.isActive.map(() => false);
    } else {
      // Si no, establecer solo el elemento en la posición i en true y los demás en false.
      this.isActive = this.isActive.map((_, index) => index === i);
    }
  }

}
