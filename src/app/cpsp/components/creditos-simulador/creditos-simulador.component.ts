import { Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format, addMonths } from 'date-fns';
import { Simulador } from '../../interfaces/simulador.interface'
import { CreditosService } from '../../services/creditos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Credito } from '../../interfaces/credito.interface';
import { montoRangoValidator } from '../../validators/monto-validator';


@Component({
  selector: 'app-creditos-simulador',
  templateUrl: './creditos-simulador.component.html',
  styleUrls: ['./creditos-simulador.component.scss']
})
export class CreditoSimuladorComponent implements OnInit {

  public credito: Credito = {
    id: '',
    nombre: '',
    tipoCredito: '',
    montoMin: 0,
    montoMax: 0,
    plazoMin: 0,
    plazoMax: 0,
    interesMen: 0,
    interesAnualFija: 0,
    interesAnualMora: 0,
    catPromedio: 0,
  };

  /* formSimulador: FormGroup; */
  resultCredito: Simulador[] = [];
  fechas: string[] = [];

  public formSimulador: FormGroup = this.fb.group({
    'monto': ['', [Validators.required, montoRangoValidator(this.credito.montoMin, this.credito.montoMax)]],
    'tiempo': [this.credito.plazoMin, [Validators.required, Validators.min(this.credito.plazoMin), Validators.max(this.credito.plazoMax)]],
  })

  constructor(private fb: FormBuilder, private creditoServise: CreditosService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.creditoServise.getCreditoById(id)),
      ).subscribe(credito => {

        if (!credito) return this.router.navigate(['inicio/creditos'])

        this.credito = credito;

        this.formSimulador = this.fb.group({
          'monto': ['', [Validators.required, montoRangoValidator(this.credito.montoMin, this.credito.montoMax)]],
          'tiempo': [this.credito.plazoMin, [Validators.required]],
        });

        return
      })

  }




  onSubmit() {
    if (this.formSimulador.valid && this.credito) {

      const credito = signal(this.credito);
      let monto = signal(this.formSimulador.get('monto')?.value);
      const tiempo = this.formSimulador.get('tiempo')?.value


      // Limpiamos el arreglo antes de calcular nuevamente
      this.resultCredito = [];
      this.fechas = [];
      // Valores iniciales del crédito
      const abonoCapital: number = (monto() / tiempo);
      let saldo: number = monto() - abonoCapital;
      let interes: number = (monto() * (credito().interesMen / 100));
      let iva: number = 0; // Valor predeterminado en 0

      if (credito().tipoCredito !== 'Comercial' && credito().tipoCredito !== 'Vivienda') {
        // Solo si el tipo de crédito no es "Comercial" ni "Vivienda", se calcula el valor de iva
        iva = (interes * 0.16);
      }

      let aPagar: number = abonoCapital + interes + iva;

      let fecha = new Date();

      // Calcular y actualizar el crédito para cada mes
      for (let i = 0; i < tiempo; i++) {

        // Agrega la fecha al arreglo y le da un formato determinado
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

        interes = (saldo * (credito().interesMen / 100));
        iva = interes * 0.16; // Actualiza iva para el siguiente mes
        aPagar = abonoCapital + interes + iva; // Actualiza aPagar para el siguiente mes
        saldo = saldo - abonoCapital; // Actualiza saldo para el siguiente mes

        // Agregar el crédito al arreglo resultCredito
        this.resultCredito.push(nuevoCredito);
      }
    }
  }
}
