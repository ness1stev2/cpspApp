import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  ngOnInit() {
    if (window.innerWidth < 576) {
      const images = document.querySelectorAll('.rounded-circle');
      images.forEach(img => {
        img.setAttribute('loading', 'lazy');
      });
    }
  }

  constructor() { }

}
