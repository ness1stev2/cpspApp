import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Credito } from '../interfaces/credito.interface';
import { environments } from 'src/environments/environments';
import { CreditosData } from 'src/app/data/creditos-data';

@Injectable({
  providedIn: 'root'
})
export class CreditosService {

  private baseUrl: string = environments.baseUrl;
  private creditos: Credito[] = CreditosData;

  constructor(private http: HttpClient) { }

  getCreditos(): Observable<Credito[]> {
    return of(this.creditos); // Devuelve los datos locales como un observable
  }

  getCreditoById(id: string): Observable<Credito | undefined> {
    const credito = this.creditos.find((c) => c.id === id);
    return of(credito || undefined); // Devuelve el credito encontrado o undefined si no se encuentra
  }
}
