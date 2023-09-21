import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credito } from '../interfaces/credito.interface';

@Injectable({
  providedIn: 'root'
})
export class CpspService {

  constructor(private viewportScroller: ViewportScroller, private http: HttpClient) { }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  getCreditos(): Observable<Credito[]>{
    return this.http.get<Credito[]>('../../../../data/db.json')
  }
}
