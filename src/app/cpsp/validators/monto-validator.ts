import { AbstractControl, ValidationErrors } from "@angular/forms";

export function montoRangoValidator(montoMin: number, montoMax: number) {
  return (control: AbstractControl): ValidationErrors | null => {

    const monto = parseFloat(control.value);

    if(isNaN(monto)){
      return { 'montoInvalido': true};
  }
  if ( monto < montoMin || monto > montoMax){
    return { 'montoFueraDeRango': true };
  }
  // el monto esta dentro del  rango
    return null
  }
}

/* console.log('Monto ingresado: '+monto)
console.log('Monto minimo: '+montoMin)
console.log('Monto maximo: '+montoMax) */

