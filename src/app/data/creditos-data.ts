import { Credito } from "../cpsp/interfaces/credito.interface";


export const CreditosData: Credito[] = [
  {
    "id": "ordinario",
    "nombre": "Ordinario",
    "tipoCredito": "Consumo",
    "montoMin": 500,
    "montoMax": 300000,
    "plazoMin": 2,
    "plazoMax": 60,
    "interesMen": 1.8
  },
  {
    "id": "credilomio",
    "nombre": "Credilomio",
    "tipoCredito": "Consumo",
    "montoMin": 500,
    "montoMax": "90%",
    "plazoMin": 2,
    "plazoMax": 36,
    "interesMen": 1
  },
  {
    "id": "credileal",
    "nombre": "Credileal",
    "tipoCredito": "Consumo",
    "montoMin": 500,
    "montoMax": 100000,
    "plazoMin": 2,
    "plazoMax": 60,
    "interesMen": 1.5
  },
  {
    "id": "automovil",
    "nombre": "Automovil",
    "tipoCredito": "Consumo",
    "montoMin": 50000,
    "montoMax": 400000,
    "plazoMin": 2,
    "plazoMax": 72,
    "interesMen": 1.2
  },
  {
    "id": "credisolidario",
    "nombre": "Credisolidario",
    "tipoCredito": "Consumo",
    "montoMin": 5000,
    "montoMax": 100000,
    "plazoMin": 2,
    "plazoMax": 60,
    "interesMen": 2
  },
  {
    "id": "alternativo",
    "nombre": "Alternativo",
    "tipoCredito": "Consumo",
    "montoMin": 500,
    "montoMax": 20000,
    "plazoMin": 2,
    "plazoMax": 48,
    "interesMen": 2
  },
  {
    "id": "ordinario-hipotecario",
    "nombre": "Ordinario Hipotecario",
    "tipoCredito": "Consumo",
    "montoMin": 200000,
    "montoMax": 5000000,
    "plazoMin": 12,
    "plazoMax": 240,
    "interesMen": 1
  },
  {
    "id": "micronegocio",
    "nombre": "Micronegocio",
    "tipoCredito": "Consumo",
    "montoMin": 1000,
    "montoMax": 20000,
    "plazoMin": 6,
    "plazoMax": 12,
    "interesMen": 1.5
  },
  {
    "id": "emprende",
    "nombre": "Emprende",
    "tipoCredito": "Consumo",
    "montoMin": 10000,
    "montoMax": 100000,
    "plazoMin": 2,
    "plazoMax": 48,
    "interesMen": 0.75
  },
  {
    "id": "prestamovil",
    "nombre": "Prestamóvil",
    "tipoCredito": "Comercial",
    "montoMin": 50000,
    "montoMax": 1400000,
    "plazoMin": 2,
    "plazoMax": 72,
    "interesMen": 1.2
  },
  {
    "id": "comercial-avio",
    "nombre": "Comercial Avío",
    "tipoCredito": "Comercial",
    "montoMin": 5000,
    "montoMax": 5000000,
    "plazoMin": 6,
    "plazoMax": 60,
    "interesMen": 1.8
  },
  {
    "id": "comercial-refaccionario",
    "nombre": "Comercial Refaccionario",
    "tipoCredito": "Comercial",
    "montoMin": 5000,
    "montoMax": 300000,
    "plazoMin": 6,
    "plazoMax": 48,
    "interesMen": 1.8
  },
  {
    "id": "comercial-refaccionario-hipotecario",
    "nombre": "Comercial Refaccionario Hipotecario",
    "tipoCredito": "Comercial",
    "montoMin": 300000,
    "montoMax": 5000000,
    "plazoMin": 6,
    "plazoMax": 48,
    "interesMen": 1.8
  },
  {
    "id": "vivienda",
    "nombre": "Vivienda",
    "tipoCredito": "Vivienda",
    "montoMin": 200000,
    "montoMax": 5000000,
    "plazoMin": 12,
    "plazoMax": 240,
    "interesMen": 0.8
  }
];
