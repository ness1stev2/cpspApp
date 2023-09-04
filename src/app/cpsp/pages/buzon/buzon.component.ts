import { Component } from '@angular/core';

@Component({
  selector: 'app-buzon',
  templateUrl: './buzon.component.html',
  styleUrls: ['./buzon.component.scss']
})
export class BuzonComponent {
  isActive: boolean = false;
  isActive2: boolean = false;

  toggleInfo() {
    this.isActive = true
    this.isActive2 = false
  }
  toggleInfo2() {
    this.isActive2 = true
    this.isActive = false
  }

}
