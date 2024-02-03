import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Alianza } from 'src/app/interfaces/alianzas.interface';
import { AlianzasData } from 'src/app/data/alianzas-data';
import { Credito } from '../../interfaces/credito.interface';
import { CreditosData } from 'src/app/data/creditos-data';
import { CuatroBotones } from '../../interfaces/cuatro-botones.interface';
import { CuatroBotonesData } from 'src/app/data/cuatro-botones-data';
import { Gallery } from '../../interfaces/gallery.interface';
import { GalleryData } from 'src/app/data/gallery-data';
import { NovEvent } from '../../interfaces/nov-event.interface';
import { NovEventData } from 'src/app/data/nov-event-data';
import { Sucursal } from '../../interfaces/sucursal.interface';
import { sucursalesData } from 'src/app/data/sucursales-data';

@Injectable({
  providedIn: 'root'
})
export class CpspService {

  private alianzas: Alianza[] = AlianzasData;
  private creditos: Credito[] = CreditosData;
  private cuatroBotones: CuatroBotones[] = CuatroBotonesData;
  private gallery: Gallery[] = GalleryData;
  private novEvent: NovEvent[] = NovEventData;
  private sucursal: Sucursal[] = sucursalesData;

  constructor() { }

  getAlianzas(): Observable<Alianza[]>{
    return of(this.alianzas);
  }

  getCuatroBotones(): Observable<CuatroBotones[]>{
    return of(this.cuatroBotones);
  }

  getGallery(): Observable<Gallery[]>{
    return of(this.gallery);
  }

  getNovEvent(): Observable<NovEvent[]>{
    return of(this.novEvent);
  }

  getSucursales(): Observable<Sucursal[]>{
    return of(this.sucursal);
  }

  getCreditos(): Observable<Credito[]> {
    return of(this.creditos); // Devuelve los datos locales como un observable
  }

  getCreditoById(id: string): Observable<Credito | undefined> {
    const credito = this.creditos.find((c) => c.id === id);
    return of(credito || undefined); // Devuelve el credito encontrado o undefined si no se encuentra
  }


}
