import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlianzasData } from 'src/app/data/alianzas-data';
import { Alianza } from 'src/app/revista-alianzas/interfaces/alianzas.interface';
import { CuatroBotones } from '../interfaces/cuatro-botones.interface';
import { CuatroBotonesData } from 'src/app/data/cuatro-botones-data';

@Injectable({
  providedIn: 'root'
})
export class CpspService {

  private alianzas: Alianza[] = AlianzasData;
  private cuatroBotones: CuatroBotones[] = CuatroBotonesData;

  constructor() { }

  getAlianzas(): Observable<Alianza[]>{
    return of(this.alianzas);
  }

  getCuatroBotones(): Observable<CuatroBotones[]>{
    return of(this.cuatroBotones);
  }


}
