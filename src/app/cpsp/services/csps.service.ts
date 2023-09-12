import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CspsService {

  constructor(private viewportScroller: ViewportScroller) { }
  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
