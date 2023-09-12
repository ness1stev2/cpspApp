import { Component, ElementRef, ViewChild} from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-agro-avio',
  templateUrl: './agro-avio.component.html',
  styleUrls: ['./agro-avio.component.scss']
})
export class AgroAvioComponent {

  monto: string = '';
  tiempo: number = 2;
  interes: string = '1.3';
  alertaHidden: boolean = true;
  llenarTabla: HTMLElement | null = document.querySelector('#lista-tabla tbody');

  clear() {
    while (this.llenarTabla?.firstChild) {
      this.llenarTabla?.removeChild(this.llenarTabla.firstChild);
    }
  }

  validarAgroAvio() {
    //Get the value of the input field with id="tiempo"
    let x = this.tiempo;
    console.log(x)
    // If x is Not a Number or less than one or greater than 12
    let text;
    if (isNaN(x) || x < 2 || x > 12) {
      text = "Meses no validos";
      document.getElementById("meses")!.innerText = text;
      document.getElementById("mesesv")!.innerText = "";
      this.clear();
    } else {
      text = "Meses validos";
      document.getElementById("meses")!.innerText = text;
      document.getElementById("mesesv")!.innerText = "";
      this.Validacion();
    }
  }

  Validacion() {
    if (this.monto === '' || this.tiempo.toString() === '' || this.interes === '') {
      this.alertaHidden = false;
      setTimeout(() => {
        this.alertaHidden = true;
      }, 2000);
    } else {
      this.calcularCronograma(Number(this.monto), Number(this.interes), this.tiempo);
    }
  }

  calcularCronograma(monto: number, interes: number, tiempo: number) {
    console.log(monto)
    console.log(interes)
    console.log(tiempo)
    while (this.llenarTabla?.firstChild) {
      this.llenarTabla?.removeChild(this.llenarTabla.firstChild);
    }

    let mesActual = dayjs().add(1, 'month');
    let amortizacionConstante, pagoInteres, cuota;
    let IVA;
    let signo = "$";
    amortizacionConstante = monto / tiempo;
    for (let i = 1; i <= tiempo; i++) {
      pagoInteres = monto * (interes / 100);
      IVA = pagoInteres * 0.16;
      cuota = amortizacionConstante + (pagoInteres + IVA);
      monto = monto - amortizacionConstante;

      let fecha = mesActual.format('DD-MM-YYYY');
      mesActual = mesActual.add(1, 'month');

      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${i}</td>
          <td>${fecha}</td>
          <td>${signo + amortizacionConstante.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
          <td>${signo + pagoInteres.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
          <td>${signo + IVA.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
          <td>${signo + cuota.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
          <td>${signo + monto.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
      `;
      this.llenarTabla?.appendChild(row);
    }
  }
}
