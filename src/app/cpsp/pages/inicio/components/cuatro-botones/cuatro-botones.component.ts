import { Component } from '@angular/core';
import { CuatroBotones } from 'src/app/cpsp/interfaces/cuatro-botones.interface';
import { CpspService } from 'src/app/cpsp/services/cpsp.service';

@Component({
  selector: 'cuatro-botones-component',
  templateUrl: './cuatro-botones.component.html',
  styleUrls: ['./cuatro-botones.component.scss']
})
export class CuatroBotonesComponent {

  public cuatroBotones: CuatroBotones[] = []

  constructor(private cpspService: CpspService){}
  ngOnInit(){
    this.cpspService.getCuatroBotones().subscribe( boton => this.cuatroBotones = boton);
  }
}
