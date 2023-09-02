import { Component } from '@angular/core';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.scss']
})
export class CreditosComponent {
  isActive: boolean[] = Array(14).fill(false);

  toggleInfo(i: number) {
    this.isActive[i] = !this.isActive[i];
  }

}
