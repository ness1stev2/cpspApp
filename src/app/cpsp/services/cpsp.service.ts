import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Alianza } from 'src/app/revista-alianzas/interfaces/alianzas.interface';
import { AlianzasData } from 'src/app/data/alianzas-data';
import { CuatroBotones } from '../interfaces/cuatro-botones.interface';
import { CuatroBotonesData } from 'src/app/data/cuatro-botones-data';
import { Gallery } from '../interfaces/gallery.interface';
import { GalleryData } from 'src/app/data/gallery-data';

@Injectable({
  providedIn: 'root'
})
export class CpspService {

  private alianzas: Alianza[] = AlianzasData;
  private cuatroBotones: CuatroBotones[] = CuatroBotonesData;
  private gallery: Gallery[] = GalleryData;

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


}
