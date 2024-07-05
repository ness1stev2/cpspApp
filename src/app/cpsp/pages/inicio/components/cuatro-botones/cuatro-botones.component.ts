import { Component } from '@angular/core';
import { CuatroBotones } from '../../../../../interfaces/cuatro-botones.interface';
import { CpspService } from '../../../../services/cpsp.service';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'cuatro-botones-component',
    templateUrl: './cuatro-botones.component.html',
    styleUrls: ['./cuatro-botones.component.scss'],
    standalone: true,
    imports: [NgFor, NgIf, RouterLink]
})
export class CuatroBotonesComponent {

  public cuatroBotones: CuatroBotones[] = []

  constructor(private cpspService: CpspService){}
  ngOnInit(){
    this.cpspService.getCuatroBotones().subscribe( boton => this.cuatroBotones = boton);
  }
}
