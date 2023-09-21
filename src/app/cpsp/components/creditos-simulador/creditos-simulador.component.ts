import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format, addMonths } from 'date-fns';
import { Simulador } from '../../interfaces/simulador.interface'
import { CreditosService } from '../../services/creditos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Credito } from '../../interfaces/credito.interface';

@Component({
  selector: 'app-creditos-simulador',
  templateUrl: './creditos-simulador.component.html',
  styleUrls: ['./creditos-simulador.component.scss']
})
export class CreditoSimuladorComponent implements OnInit {

  public credito?: Credito

  formSimulador: FormGroup;
  resultCredito: Simulador[] = [];
  fechas: string[] = [];

  constructor(private fb: FormBuilder, private creditoServise: CreditosService, private activateRoute: ActivatedRoute, private router:Router) {
    this.formSimulador = this.fb.group({
      'monto': ['', [Validators.required],],
      'tiempo': ['2', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({id}) => this.creditoServise.getCreditoById(id)),
      ).subscribe( credito => {
        if( !credito ) return this.router.navigate(['inicio/creditos'])

        this.credito = credito;
        console.log(credito)
        return
      })

  }




  onSubmit() {
    if (this.formSimulador.valid && this.credito) {

      const credito = this.credito;

      let monto = this.formSimulador.get('monto')?.value;
      const tiempo = this.formSimulador.get('tiempo')?.value

      let text;
      if (this.credito && (tiempo < this.credito.plazoMin || tiempo > credito.plazoMax)) {
        text = "Meses no validos";
        document.getElementById("meses")!.innerText = text;
        document.getElementById("mesesv")!.innerText = "";
        /* this.clear(); */
      } else {
        text = "Meses validos";
        document.getElementById("meses")!.innerText = text;
        document.getElementById("mesesv")!.innerText = "";
        /* this.Validacion(); */
      }


      // Limpiamos el arreglo antes de calcular nuevamente
      this.resultCredito = [];
      this.fechas = [];
      // Valores iniciales del crédito
      let abonoCapital: number = Math.round(monto / tiempo);
      let saldo: number = monto - abonoCapital;
      let interes: number = Math.round(monto * (credito.interesMen / 100));
      let iva: number = interes * 0.16;
      let aPagar: number = abonoCapital + interes + iva;

      let fecha = new Date();

      // Calcular y actualizar el crédito para cada mes
      for (let i = 0; i < tiempo; i++) {

        //Agrega la fecha al arreglo y le da un formato determiando
        this.fechas.push(format(fecha, 'dd/MM/yyyy'));

        // Avanzar la fecha en un mes para el siguiente ciclo
        fecha = addMonths(fecha, 1);

        const nuevoCredito: Simulador = {
          no: i + 1,
          fecha: this.fechas,
          abonoCapital,
          interes,
          iva,
          aPagar,
          saldo,

        };

        abonoCapital = Math.round(monto / tiempo)
        // Agregar el crédito al arreglo resultCredito
        this.resultCredito.push(nuevoCredito);

        // Actualizar los valores para el siguiente mes

        interes = Math.round(saldo * (credito.interesMen / 100));
        iva = interes * 0.16;
        aPagar = abonoCapital + interes + iva
        saldo = saldo - abonoCapital;


      }
    }
  }
}
