import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive, NgStyle]
})
export class HeaderComponent {
  isActive: boolean = false

  toggleInfo() {
    this.isActive = !this.isActive;
  }
}
