import { Credito } from "../cpsp/interfaces/credito.interface";


export const CreditosData: Credito[] = [
  {
    id: "ordinario",
    nombre: "Ordinario",
    tipoCredito: "Consumo",

    descripcion: `El crédito Ordinario es una buena alternativa de financiamiento para conseguir el
    efectivo que necesitas sin poner en apuros tu presupuesto e historial crediticio.`,
    caracteristicas: `<ul>
      <li> Crédito Simple sin destino específico, ya que tú decides su finalidad.</li>
      <li> Monto del Crédito desde $500.00 hasta $300,000.00.</li>
      <li> Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.</li>
      <li> Los intereses ordinarios se calculan sobre el saldo insoluto del capital del
      crédito.</li>
      <li> Plazo de 2 y hasta 72 meses</li>
      <li> Periodicidad de pago mensual.</li>
      <li> Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.</li>
      <li> Moneda: Pesos.</li>
      <li> Tipos de garantía: liquida y en su caso quirografaria de aval.</li>
    </ul>`,
    venyben: `<ul>
    <li> Es un crédito de fácil acceso.</li>
    <li> Disposición inmediata del monto total autorizado del crédito.</li>
    <li> Recepción de pagos en cualquier sucursal de la Cooperativa.</li>
    <li> Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.</li>
    <li> Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.</li>
    <li> No se necesita tener antigüedad como Socio de nuestra Cooperativa.</li>
    <li> Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.</li>
    <li> Puedes obtener una tasa preferencial por pago puntual de tus
    mensualidades del crédito, de acuerdo a los siguientes términos y
    condiciones:</li><br>
      1. Pagar puntualmente tu crédito de acuerdo a las fechas establecidas
      en tu plan de pagos y/o tabla de amortizaciones.<br>
      2. La tasa promocional aplica en todas nuestras sucursales del Estado
      de Jalisco.<br>
      3. El beneficio de la tasa promocional por pago oportuno no es
      acumulativo, si no pagas de manera puntual la
      amortización correspondiente, pierdes dicho beneficio hasta la
      regularización de los pagos de tu crédito.<br>
      4. Las tasas preferenciales serán dadas a conocer a través de los
      medios de avisos oficiales de la Cooperativa.
    </ul>
    `,
    requisitos: `<ul>
    <li> Ser socio de la Cooperativa</li>
    <li> Constituir una garantía líquida del 10% del monto de crédito a solicitado.</li>
    <li> Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li> Comprobante de ingresos de acuerdo a política interna.</li>
    <li> Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li> Garantía quirografaria de aval en su caso.</li>
    <li> Solicitud de crédito con documentación.</li>
    <li> Autorización para consulta en SIC’s*.</li>
    <li> RFC con homoclave.</li>
    </ul>
    *Sociedades de Información Crediticia.<br><br>
    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.
    <br>
    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.`,
    consideraciones: `
    <b>Tasa de Interés anual fija</b><br>
    21.60%<br>
    antes de IVA.<br><br>

    <b>Tasa de Interés anual moratoria fija</b><br>
    48.00%<br>
    antes de IVA.<br><br>

    <b>CAT promedio</b><br>
    18.8%<br><br>
    &quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.<br>
    Cálculo de CAT realizado 15 Diciembre 2023.<br>
    <b>Vigencia de cálculo Enero - Junio 2024.</b>
    `,
    recomendaciones: `<ul>
    <li> Al pagar puntualmente tu crédito, generas un buen historial crediticio.</li>
    <li> Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.</li>
    <li> Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.</li>
    <li> En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.</li>
    <li> Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.</li>

    <li> Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.</li>
    </ul>
    `,
    riesgos: `
    <li> Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.</li>
    <li> Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.</li>
    <li> El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera</li>
    `,
    montoMin: 500,
    montoMax: 300000,
    plazoMin: 2,
    plazoMax: 72,
    interesMen: 1.8,
    interesAnualFija: 21.60,
    interesAnualMora: 48.00,
    catPromedio: 18.8
  },
  {
    id: "automatico",
    nombre: "Automatico",
    tipoCredito: "Consumo",
    descripcion: `
    Llévate al instante un crédito respaldado por tus ahorros, pensando para cubrir las
    necesidades básicas de manera fácil con una excelente tasa de interés y plazo
    para pagar.
    `,
    caracteristicas: `
    <ul>
    <li> Crédito Simple sin destino específico, ya que tú decides su finalidad.</li>
    <li> Monto del Crédito desde $500.00 y hasta el 90% del saldo de tu cuenta de
    ahorro.</li>
    <li> Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.</li>
    <li> Los intereses ordinarios se calclian sobre el saldo insoluto del capital del
    crédito.</li>
    <li> Plazo de 2 y hasta 36 o 60 meses según el monto del crédito.</li>
    <li> Periodicidad de pago mensual.</li>
    <li> Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.</li>
    <li> Moneda: Pesos.</li>
    <li> Tipos de garantía: liquida.</li>
    </ul>
    `,
    venyben: `
    <ul>
    <li> Es un crédito de fácil acceso.</li>
    <li> Disposición inmediata del monto total autorizado del crédito.</li>
    <li> Recepción de pagos en cualquier sucursal de la Cooperativa.</li>
    <li> Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.</li>
    <li> Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.</li>
    <li> No se necesita tener antigüedad como Socio de nuestra Cooperativa.</li>
    <li> Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.</li>
    <li> Puedes obtener una tasa preferencial por pago puntual de tus
    mensualidades del crédito, de acuerdo a los siguientes términos y
    condiciones:</li><br>
      1. Pagar puntualmente tu crédito de acuerdo a las fechas establecidas
      en tu plan de pagos y/o tabla de amortizaciones.<br>
      2. La tasa promocional aplica en todas nuestras sucursales del Estado
      de Jalisco.<br>
      3. El beneficio de la tasa promocional por pago oportuno no es
      acumulativo, si no pagas de manera puntual la amortización
      correspondiente, pierdes dicho beneficio hasta la regularización de
      los pagos de tu crédito.<br>
      4. Las tasas preferenciales serán dadas a conocer a través de los
      medios de avisos oficiales de la Cooperativa.
    </ul>
    `,
    requisitos: `<ul>
    <li> Ser socio de la Cooperativa</li>
    <li> Constituir garantía liquida del 100% sobre el monto solicitado.</li>
    <li> Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li> Comprobación de ingresos de acuerdo a política interna.</li>
    <li> Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li> Solicitud de crédito con documentación.</li>
    <li> RFC con homoclave.</li>
    </ul>
    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.
    <br><br>
    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.
    `,
    consideraciones: `
    <b>Tasa de Interés anual fija</b><br>
    12.00%<br>
    antes de IVA.<br><br>
    <b>Tasa de Interés anual moratoria fija</b><br>
    48.00%<br>
    antes de IVA.<br><br>
    <b>CAT promedio</b><br>
    172.0%<br><br>
    &quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.<br>
    Cálculo de CAT realizado 15 Diciembre 2023.<br>
    <b>Vigencia de cálculo Enero - Junio 2024.<b>
    `,
    recomendaciones: `<ul>
    <li> Al pagar puntualmente tu crédito, generas un buen historial crediticio.</li>
    <li> Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.</li>
    <li> Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.</li>
    <li> En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.</li>
    <li> Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.</li>
    <li> Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.</li>
    </ul>
    `,
    riesgos: `<ul>
    <li> Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.</li>
    <li> Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.</li>
    <li> El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera</li>
    </ul>
    `,
    montoMin: 500,
    montoMax: 300000,
    plazoMin: 2,
    plazoMax: 60,
    interesMen: 1,
    interesAnualFija: 12.00,
    interesAnualMora: 48.00,
    catPromedio: 172.0
  },
  {
    id: "credilomio",
    nombre: "Credilomio",
    tipoCredito: "Consumo",
    descripcion: `
    Llévate al instante un crédito respaldado por tus ahorros, pensando para cubrir las
    necesidades básicas de manera fácil con una excelente tasa de interés y plazo
    para pagar.
    `,
    caracteristicas: `<ul></ul>
    <li> Crédito Simple sin destino específico, ya que tú decides su finalidad.</li>
    <li> Monto del Crédito desde $500.00 y hasta el 90% del saldo de tu cuenta de
    ahorro.</li>
    <li> Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.</li>
    <li> Los intereses ordinarios se calculan sobre el saldo insoluto del capital del
    crédito.</li>
    <li> Plazo de 2 y hasta 36 o 60 meses según el monto del crédito.</li>
    <li> Periodicidad de pago mensual.</li>
    <li> Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.</li>
    <li> Moneda: Pesos.</li>
    <li> Tipos de garantía: liquida.</li>
    </ul>`,
    venyben: `<ul>
    <li> Es un crédito de fácil acceso.</li>
    <li> Disposición inmediata del monto total autorizado del crédito.</li>
    <li> Recepción de pagos en cualquier sucursal de la Cooperativa.</li>
    <li> Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.</li>
    <li> Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.</li>
    <li> No se necesita tener antigüedad como Socio de nuestra Cooperativa.</li>
    <li> Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.</li>
    <li> Puedes obtener una tasa preferencial por pago puntual de tus
    mensualidades del crédito, de acuerdo a los siguientes términos y
    condiciones:</li><br>
    1. Pagar puntualmente tu crédito de acuerdo a las fechas establecidas
    en tu plan de pagos y/o tabla de amortizaciones.<br>
    2. La tasa promocional aplica en todas nuestras sucursales del Estado
    de Jalisco.<br>
    3. El beneficio de la tasa promocional por pago oportuno no es
    acumulativo, si no pagas de manera puntual la amortización
    correspondiente, pierdes dicho beneficio hasta la regularización de
    los pagos de tu crédito.<br>
    4. Las tasas preferenciales serán dadas a conocer a través de los
    medios de avisos oficiales de la Cooperativa.
    </ul>`,
    requisitos: `<ul>
    <li> Ser socio de la Cooperativa.</li>
    <li> Constituir garantía liquida del 100% sobre el monto solicitado.</li>
    <li> Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li> Comprobación de ingresos de acuerdo a política interna.</li>
    <li> Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li> Solicitud de crédito con documentación.</li>
    <li> RFC con homoclave.</li><br>
    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.
 
    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.
    </ul>`,
    consideraciones: `<ul>
    <b>Tasa de Interés anual fija</b><br>
    12.00%<br>
    antes de IVA.<br><br>
    <b>Tasa de Interés anual moratoria fija</b><br>
    48.00%<br>
    antes de IVA.<br><br>
    <b>CAT promedio</b><br>
    201.3%<br><br>
    &quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.
    Cálculo de CAT realizado 15 Diciembre 2023.<br>
    <b>Vigencia de cálculo Enero - Junio 2024.<b>
    </ul>`,
    recomendaciones: `<ul>
    <li> Al pagar puntualmente tu crédito, generas un buen historial crediticio.</li>
    <li> Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.</li>
    <li> Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.</li>
    <li> En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.</li>
    <li> Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.</li>

    <li> Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.</li>
    </ul>`,
    riesgos: `<ul>
    <li> Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.</li>
    <li> Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.</li>
    <li> El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera.</li>
    </ul>`,
    montoMin: 500,
    montoMax: 5000000,
    plazoMin: 2,
    plazoMax: 60,
    interesMen: 1,
    interesAnualFija: 12.00,
    interesAnualMora: 48.00,
    catPromedio: 172.0
  },

  {
    id: "credileal",
    nombre: "Credileal",
    tipoCredito: "Consumo",
    descripcion: `
    Tu lealtad y responsabilidad como Socio son reconocidos con un nuevo producto,
    sin aval y en el que tu historial de socio es tu mejor aliado.
    `,
    caracteristicas: `
    <ul>
    <li> Monto del Crédito desde $500.00 hasta $200,000.00.</li>
    <li> Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.</li>
    <li> Los intereses ordinarios se calculan sobre el saldo insoluto del capital del
    crédito.</li>
    <li> Plazo de 2 y hasta 72 meses.</li>
    <li> Periodicidad de pago mensual.</li>
    <li> Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.</li>
    <li> Moneda: Pesos.</li>
    <li> Tipos de garantía: liquida y en su caso quirografaria de aval.</li>
    </ul>
    `,
    venyben: `
    <ul>
    <li> Es un crédito de fácil acceso.</li>
    <li> Disposición inmediata del monto total autorizado del crédito.</li>
    <li> Recepción de pagos en cualquier sucursal de la Cooperativa.</li>
    <li> Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.</li>
    <li> Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.</li>
    <li> Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.</li>
    <li> Puedes obtener una tasa preferencial por pago puntual de tus
    mensualidades del crédito, de acuerdo a los siguientes términos y
    condiciones:</li>
    1. Pagar puntualmente tu crédito de acuerdo a las fechas establecidas
    en tu plan de pagos y/o tabla de amortizaciones.<br>
    2. La tasa promocional aplica en todas nuestras sucursales del Estado
    de Jalisco.<br>
    3. El beneficio de la tasa promocional por pago oportuno no es
    acumulativo, si no pagas de manera puntual la
    amortización correspondiente, pierdes dicho beneficio hasta la
    regularización de los pagos de tu crédito.<br>
    4. Las tasas preferenciales serán dadas a conocer a través de los
    medios de avisos oficiales de la Cooperativa.
    </ul>
    `,
    requisitos: `
    <ul>
    <li> Ser socio de la Cooperativa con 3 años de antigüedad.</li>
    <li> Ahorro sistemático mensual de los últimos 12 meses.</li>

    <li> Haber registrado historial interno mínimo de 12 meses en créditos
    anteriores mayor a sus haberes</li>
    <li> Constituir una garantía líquida del 10% del monto de crédito a solicitado.</li>
    <li> Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li> Comprobante de ingresos de acuerdo a política interna.</li>
    <li> Acta de matrimonio civil (si aplica).</li>
    <li> Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li> RFC con homoclave.</li>
    <li> Solicitud de crédito con documentación.</li>
    <li> Autorización para consulta en SIC’s*</li><br>
    *Sociedades de Información Crediticia.<br><br>
    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.<br><br>
    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.
    </ul>
    `,
    consideraciones: `
    <b>Tasa de Interés anual fija</b><br>
    18.00%<br>
    antes de IVA.<br><br>
    <b>Tasa de Interés anual moratoria fija</b><br>
    48.00%<br>
    antes de IVA.<br><br>
    <b>CAT promedio</b><br>
    14.0%<br>
    &quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.<br>
    Cálculo de CAT realizado 15 Diciembre 2023.<br><br>
    Vigencia de cálculo Enero - Junio 2024.
    `,
    recomendaciones: `
    <ul>
    <li> Al pagar puntualmente tu crédito, generas un buen historial crediticio. </li>
    <li> Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.</li>
    <li> Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.</li>
    <li> En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.</li>
    <li> Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.</li>

    <li> Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.</li>
    </ul>
    `,
    riesgos: `
    <li> Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.</li>
    <li> Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.</li>
    <li> El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera</li>
    `,
    montoMin: 500,
    montoMax: 200000,
    plazoMin: 2,
    plazoMax: 72,
    interesMen: 1.5,
    interesAnualFija: 18.00,
    interesAnualMora: 48.00,
    catPromedio: 14.0
  },
  {
    id: "automovil",
    nombre: "Automóvil",
    tipoCredito: "Consumo",
    descripcion: `
    Es tiempo de comprar ese auto que deseas, con este crédito podrás adquirir un
    auto nuevo o seminuevo con hasta 5 años de antigüedad.
    `,
    caracteristicas: `
    <ul>
    <li>Crédito destinado para la compra de un auto nuevo, seminuevo o de hasta
    5 años de antigüedad.</li>
    <li>El vehículo deberá de ser adquirido exclusivamente en agencia automotriz
    y/o lote de autos que se encuentren registrados en ANCA.</li>
    <li>Monto del Crédito desde $50,000.00 hasta $400,000.00
    <li>Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.</li>
    <li>Los intereses ordinarios se calculan sobre el saldo insoluto del capital del
    crédito.</li>
    <li>Plazo de 2 y hasta 72 meses.</li>
    <li>Periodicidad de pago mensual.</li>
    <li>Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.</li>
    <li>Moneda: Pesos.</li>
    <li>Tipos de garantía: liquida, prendaria (la factura del vehículo) y en su caso,
    quirografaria de aval.</li>
    </ul>
    `,
    venyben: `
    <ul>
    <li>Es un crédito de fácil acceso.</li>
    <li>Disposición inmediata del monto total autorizado del crédito.</li>
    <li>Recepción de pagos en cualquier sucursal de la Cooperativa.</li>
    <li>Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.</li>
    <li>Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.</li>
    <li>No se necesita tener antigüedad como Socio de nuestra Cooperativa.</li>
    <li>Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.</li>
    <li>Puedes obtener una tasa preferencial por pago puntual de tus
    mensualidades del crédito, de acuerdo a los siguientes términos y
    condiciones:</li><br>
    1. Pagar puntualmente tu crédito de acuerdo a las fechas establecidas
    en tu plan de pagos y/o tabla de amortizaciones.<br>
    2. La tasa promocional aplica en todas nuestras sucursales del Estado
    de Jalisco.<br>
    3. El beneficio de la tasa promocional por pago oportuno no es
    acumulativo, si no pagas de manera puntual la amortización
    correspondiente, pierdes dicho beneficio hasta la regularización de
    los pagos de tu crédito.<br>
    4. Las tasas preferenciales serán dadas a conocer a través de los
    medios de avisos oficiales de la Cooperativa.
    </ul>
    `,
    requisitos: `
    <ul>
    <li>Ser socio de la Cooperativa</li>
    <li>Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li>Comprobante de ingresos de acuerdo a política interna.
    <li>Acta de matrimonio civil (si aplica).</li>
    <li>Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li>Dependiendo del monto del crédito a solicitar presentar aval (es).</li>
    <li>Solicitud de crédito con documentación.</li>
    <li>Carta cotización del vehículo a adquirir emitida por el lote y/o agencia.</li>
    <li>Autorización para consulta en SIC’s*.</li>
    <li>Construir una garantía líquida del 10% sobre el monto solicitado.</li>
    <li>RFC con homoclave.</li>
    <li>El solicitante deberá contratar bajo su costo y de manera obligatoria un
    seguro de cobertura amplia que cubra todo el periodo del crédito cuyo
    beneficiario preferente será Caja Popular San Pablo S.C. de A.P. de R.L. de
    C.V.</li><br>
    *Sociedades de Información Crediticia.
    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.
    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.
    </ul>
    `,
    consideraciones: `
    <b>Tasa de Interés anual fija</b><br>
    14.40%<br>
    antes de IVA.<br><br>
    <b>Tasa de Interés anual moratoria fija</b><br>
    48.00%<br>
    antes de IVA.<br><br>
    <b>CAT promedio</b><br>
    16.2%<br><br>
    <b>&quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.
    Cálculo de CAT realizado 15 Diciembre 2023.<br>
    Vigencia de cálculo Enero - Junio 2024.</b>
    `,
    recomendaciones: `
    <ul>
    <li>Al pagar puntualmente tu crédito, generas un buen historial crediticio.<li>
    <li>Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.<li>
    <li>Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.<li>
    <li>En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.<li>
    <li>Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.<li>
    <li>Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.<li>
    </ul>
    `,
    riesgos: `
    <ul>
    <li>Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.<li>
    <li>Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.<li>
    <li>El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera<li>
    </ul>
    `,
    montoMin: 50000,
    montoMax: 400000,
    plazoMin: 2,
    plazoMax: 72,
    interesMen: 1.2,
    interesAnualFija: 14.40,
    interesAnualMora: 48.00,
    catPromedio: 16.2
  },
  {
    id: "credisolidario",
    nombre: "Credisolidario",
    tipoCredito: "Consumo",
    descripcion: `
    El préstamo CREDISOLIDARIO preponderantemente se destinará para hacer
    frente a las necesidades personales. Su uso no será limitativo y no será necesaria
    la comprobación del destino del préstamo.
    `,
    caracteristicas: `
    <ul>
    <li> Crédito Simple sin destino específico, ya que tú decides su finalidad.</li>
    <li> Monto del Crédito desde $5,000.00 hasta $100,000.00.</li>
    <li> Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.</li>
    <li> Los intereses ordinarios se calculan sobre el saldo insoluto del capital del
    crédito.</li>
    <li> Plazo de 2 y hasta 72 meses</li>
    <li> Periodicidad de pago mensual.</li>
    <li> Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.</li>
    <li> Moneda: Pesos.</li>
    <li> Tipos de garantía: liquida y en su caso quirografarias de aval.</li>
    </ul>
    `,
    venyben: `
    <ul>
    <li> Es un crédito de fácil acceso.</li>
    <li> Disposición inmediata del monto total autorizado del crédito.</li>
    <li> Recepción de pagos en cualquier sucursal de la Cooperativa.</li>
    <li> Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.</li>
    <li> Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.</li>
    <li> No se necesita tener antigüedad como Socio de nuestra Cooperativa.</li>
    <li> Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.</li>
    </ul>
    `,
    requisitos: `
    <ul>
    <li> Ser socio de la Cooperativa.</li>
    <li> Constituir una garantía líquida del 10% del monto de crédito a solicitado.</li>
    <li> Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li> Comprobante de ingresos de acuerdo a política interna.</li>
    <li> Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li> Garantía quirografaria de aval en su caso.</li>
    <li> Solicitud de crédito con documentación.</li>
    <li> Autorización para consulta en SIC’s*.</li>
    <li> RFC con homoclave.</li>
    *Sociedades de Información Crediticia.<br>
    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.<br>
    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.
    </ul>
    `,
    consideraciones: `
    <b>Tasa de Interés anual fija</b><br>
    24.00%<br>
    antes de IVA.<br><br>
    <b>Tasa de Interés anual moratoria fija</b><br>
    48.00%<br>
    antes de IVA.<br><br>
    <b>CAT promedio</b><br>
    14.5%<br>
    &quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.
    Cálculo de CAT realizado 15 Diciembre 2023.<br><br>
    Vigencia de cálculo Enero - Junio 2024.
    `,
    recomendaciones: `
    <ul>
    <li> Al pagar puntualmente tu crédito, generas un buen historial crediticio.</li>
    <li> Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.</li>
    <li> Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.</li>
    <li> En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.</li>
    <li> Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.</li>
    <li> Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.</li>
    </ul>
    `,
    riesgos: `
    <ul>
    <li> Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.</li>
    <li> Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.</li>
    <li> El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera</li>
    </ul>
    `,
    montoMin: 5000,
    montoMax: 100000,
    plazoMin: 2,
    plazoMax: 72,
    interesMen: 2,
    interesAnualFija: 24.00,
    interesAnualMora: 48.00,
    catPromedio: 14.5
  },

  {
    id: "alternativo",
    nombre: "Alternativo",
    tipoCredito: "Consumo",
    descripcion: `
    Una opción extra para cuando requieres de más capital; adicional a los préstamos
    que ya tengas, siempre y cuando tu capacidad de pago así lo permita.
    `,
    caracteristicas: `
    <ul>
    <li> Crédito Simple sin destino específico, ya que tú decides su finalidad.</li>
    <li> Monto del Crédito desde $500.00 y hasta 20,000.00.</li>
    <li> Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.</li>
    <li> Los intereses ordinarios se calculan sobre el saldo insoluto del capital del
    crédito.</li>
    <li> Plazo de 2 y hasta 48 meses.</li>
    <li> Se revisará cumplimiento en ahorro y crédito.</li>
    <li> Periodicidad de pago mensual.</li>
    <li> Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.</li>
    <li> Moneda: Pesos.</li>
    <li> Tipos de garantía: liquida.</li>
    </ul>
    `,
    venyben: `
    <ul>
    <li> Es un crédito de fácil acceso.</li>
    <li> Disposición inmediata del monto total autorizado del crédito.</li>
    <li> Recepción de pagos en cualquier sucursal de la Cooperativa.</li>
    <li> Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.</li>
    <li> Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.</li>
    <li> Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.</li>
    </ul>
    `,
    requisitos: `
    <ul>
    <li> Ser socio de la Cooperativa con al menos 2 años de antigüedad.</li>
    <li> Constituir una garantía líquida del 10% del monto de crédito a solicitado.</li>
    <li> Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li> Comprobación de ingresos de acuerdo a política interna.</li>
    <li> Acta de matrimonio civil (si aplica).</li>
    <li> Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li> Solicitud de crédito con documentación.</li>
    <li> Autorización para consulta en SIC’s*.</li>
    <li> RFC con homoclave.</li><br>
    *Sociedades de Información Crediticia.<br><br>

    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.<br><br>

    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.
    </ul>
    `,
    consideraciones: `
    <b>Tasa de Interés anual fija</b><br>
    24.00%<br>
    antes de IVA.<br><br>
    <b>Tasa de Interés anual moratoria fija</b><br>
    48.00%<br>
    antes de IVA.<br><br>
    <b>CAT promedio</b><br>
    224.9%<br>
    &quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.
    Cálculo de CAT realizado 15 Diciembre 2023.<br><br>
    Vigencia de cálculo Enero - Junio 2024.
    `,
    recomendaciones: `
    <ul>
    <li> Al pagar puntualmente tu crédito, generas un buen historial crediticio.</li>
    <li> Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.</li>
    <li> Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.</li>
    <li> En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.</li>
    <li> Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.</li>
    <li> Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.</li>
    </ul>
    `,
    riesgos: `
    <ul>
    <li> Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.</li>
    <li> Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.</li>
    <li> El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera</li>
    </ul>
    `,
    montoMin: 500,
    montoMax: 20000,
    plazoMin: 2,
    plazoMax: 48,
    interesMen: 2,
    interesAnualFija: 24.00,
    interesAnualMora: 48.00,
    catPromedio: 224.9
  },
  {
    id: "hipotecario",
    nombre: "Ordinario Hipotecario",
    tipoCredito: "Consumo",
    descripcion: `
    Si tienes un plan en mente y necesitas dinero para lograrlo, recibe un porcentaje
    del valor de tu casa habitación, y haz realidad tu proyecto.
    `,
    caracteristicas: `
    <ul>
    <li> Crédito con garantía hipotecaria sin destino específico, ya que tú decides su
    finalidad.</li>
    <li> Monto del Crédito desde $200,000.00 hasta $5,000,000.00.</li>
    <li> Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.</li>
    <li> Los intereses ordinarios se calculan sobre el saldo insoluto del capital del
    crédito.</li>
    <li> Plazo de 12 y hasta 240 meses.</li>
    <li> Periodicidad de pago mensual.</li>
    <li> Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.</li>
    <li> Moneda: Pesos.</li>
    <li> Tipos de garantía: liquida e hipotecaria.</li>
    </ul>
    `,
    venyben: `
    <ul>
    <li> Es un crédito de fácil acceso.</li>
    <li> Disposición inmediata del monto total autorizado del crédito.</li>
    <li> Recepción de pagos en cualquier sucursal de la Cooperativa.</li>
    <li> Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.</li>
    <li> Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.</li>
    <li> No se necesita tener antigüedad como Socio de nuestra Cooperativa.</li>
    <li> Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.</li>
    </ul>
    `,
    requisitos: `
    <ul>
    <li> Ser socio de la Cooperativa</li>
    <li> Constituir una garantía líquida de 20,000.00.</li>
    <li> Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li> Acta de matrimonio civil o Certificado de existencia o inexistencia de
    matrimonio.</li>
    <li> RFC con homoclave.</li>
    <li> Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li> Edad de 18 y hasta a 64 años.</li>
    <li> Comprobante de ingresos de acuerdo a política interna.</li>
    <li> Solicitud de crédito con documentación.</li>
    <li> Autorización para consulta en SIC’s*
    <li> Gastos previos: El socio incurrirá en gastos de avalúo independientemente
    de que se formalice o no el crédito. Para la formalización del avalúo, el
    Socio deberá cubrir los horarios del valuador autorizado por la Cooperativa
    para tales efectos.</li>
    <li> Gastos notariales y regístrales: Los gastos, impuestos, derechos y
    honorarios de escrituración serán a cargo del solicitante y se deberán cubrir
    directamente con el Notario Público en el momento de la firma del contrato.
    Estos gastos incluyen contribuciones federales y locales, así como
    honorarios.</li>
    <li> Seguros</li>
    1. El solicitante deberá contratar bajo su costo y de manera obligatoria
    un seguro de vida que cubra todo el periodo del crédito cuyo
    beneficiario preferente será Caja Popular San Pablo S.C. de A.P. de
    R.L. de C.V.<br>
    2. El solicitante deberá contratar bajo su costo y de manera obligatoria
    un seguro de daños al inmueble que cubra todo el periodo del crédito
    cuyo beneficiario preferente será Caja Popular San Pablo S.C. de
    A.P. de R.L. de C.V.
    </ul>
    *Sociedades de Información Crediticia.<br><br>
    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.<br><br>
    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.
    `,
    consideraciones: `
    <b>Tasa de Interés anual fija</b><br>
    12.00%<br>
    antes de IVA.<br><br>
    <b>Tasa de Interés anual moratoria fija</b><br>
    48.00%<br>
    antes de IVA.<br><br>
    <b>CAT promedio</b><br>
    13.6%<br>
    &quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.
    Cálculo de CAT realizado 15 Diciembre 2023.<br><br>
    Vigencia de cálculo Enero - Junio 2024.
    `,
    recomendaciones: `
    <ul>
    <li> Al pagar puntualmente tu crédito, generas un buen historial crediticio.</li>
    <li> Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.</li>
    <li> Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.</li>
    <li> En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.</li>
    <li> Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.</li>
    <li> Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.</li>
    </ul>
    `,
    riesgos: `
    <ul>
    <li> Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.</li>
    <li> Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.</li>
    <li> El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera</li>
    </ul>
    `,
    montoMin: 200000,
    montoMax: 5000000,
    plazoMin: 12,
    plazoMax: 240,
    interesMen: 1,
    interesAnualFija: 12.00,
    interesAnualMora: 48.00,
    catPromedio: 13.6
  },
  {
    id: "micronegocio",
    nombre: "Micronegocio",
    tipoCredito: "Consumo",
    descripcion: `
    Financiamiento para creación o ampliación de negocio comercial dentro del
    Municipio de Zapopan.
    `,
    caracteristicas: `
    <ul>
    <li> Monto del Crédito desde $1,000.00 hasta $20,000.00.</li>
    <li> Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.</li>
    <li> Los intereses ordinarios se calculan sobre el saldo insoluto del capital del
    crédito.</li>
    <li> Plazo de 6 y hasta 12 meses.</li>
    <li> Periodicidad de pago mensual.</li>
    <li> Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.</li>
    <li> Moneda: Pesos.</li>
    </ul>
    `,
    venyben: `
    <ul>
    <li> Es un crédito de fácil acceso.</li>
    <li> Disposición inmediata del monto total autorizado del crédito.</li>
    <li> Recepción de pagos en cualquier sucursal de la Cooperativa.</li>
    <li> Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.</li>
    <li> Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.</li>
    <li> No se necesita tener antigüedad como Socio de nuestra Cooperativa.</li>
    <li> Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.</li>
    <li> Puedes obtener una tasa preferencial por pago puntual de tus
    mensualidades del crédito, de acuerdo a los siguientes términos y
    condiciones:</li>
    1. Pagar puntualmente tu crédito de acuerdo a las fechas establecidas
    en tu plan de pagos y/o tabla de amortizaciones.<br>
    2. La tasa promocional aplica en todas nuestras sucursales del Estado
    de Jalisco.<br>
    3. El beneficio de la tasa promocional por pago oportuno no es
    acumulativo, si no pagas de manera puntual la
    amortización correspondiente, pierdes dicho beneficio hasta la
    regularización de los pagos de tu crédito.<br>
    4. Las tasas preferenciales serán dadas a conocer a través de los
    medios de avisos oficiales de la Cooperativa.
    </ul>
    `,
    requisitos: `
    <ul>
    <li> Ser socio de la Cooperativa</li>
    <li> Cedula de calificación del crédito con validación por el Sistema Municipal de
    Financiamiento del Gobierno Municipal de Zapopan.</li>
    <li> Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li> Comprobación de ingresos de acuerdo a política interna.</li>
    <li> Acta de matrimonio civil (si aplica).</li>
    <li> Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li> Solicitud de crédito con documentación.</li>
    <li> Autorización para consulta en SIC’s*.</li>
    <li> RFC con homoclave.</li><br>
    *Sociedades de Información Crediticia.<br><br>
    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.
    <br><br>
    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.
    </ul>
    `,
    consideraciones: `
    <b>Tasa de Interés anual fija</b><br>
    18.00%<br>
    antes de IVA.<br><br>
    <b>Tasa de Interés anual moratoria fija</b><br>
    36.00%<br>
    antes de IVA.<br><br>
    <b>CAT promedio</b><br>
    12.7%<br><br>
    &quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.
    Cálculo de CAT realizado 15 Diciembre 2023.
    Vigencia de cálculo Enero - Junio 2024.
    `,
    recomendaciones: `
    <ul>
    <li> Al pagar puntualmente tu crédito, generas un buen historial crediticio.</li>
    <li> Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.</li>
    <li> Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.</li>
    <li> En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.</li>
    <li> Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.</li>
    <li> Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.</li>
    </ul>
    `,
    riesgos: `
    <ul>
    <li> Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.</li>
    <li> Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.</li>
    <li> El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera</li>
    </ul>
    `,
    montoMin: 1000,
    montoMax: 20000,
    plazoMin: 6,
    plazoMax: 12,
    interesMen: 1.5,
    interesAnualFija: 18.00,
    interesAnualMora: 36.00,
    catPromedio: 12.7
  },
  {
    id: "emprende",
    nombre: "Emprende",
    tipoCredito: "Consumo",
    descripcion: `
    Financiamiento para creación o ampliación de negocio comercial dentro del
    Municipio de Zapopan.
    `,
    caracteristicas: `
    <ul>
    <li> Crédito Simple para la creación y/o ampliación de negocio en el Municipio
    de Zapopan.</li>
    <li> Monto del Crédito desde $10,000.00 hasta $100,000.00.</li>
    <li> Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.</li>
    <li> Los intereses ordinarios se calculan sobre el saldo insoluto del capital del
    crédito.</li>
    <li> Plazo de 2 y hasta 48 meses.</li>
    <li> Periodicidad de pago mensual.</li>
    <li> Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.</li>
    <li> Moneda: Pesos.</li>
    <li> Garantía quirografaria de un aval en su caso.</li>
    </ul>
    `,
    venyben: `
    <ul>
    <li> Es un crédito de fácil acceso.</li>
    <li> Disposición inmediata del monto total autorizado del crédito.</li>
    <li> Recepción de pagos en cualquier sucursal de la Cooperativa.</li>
    <li> Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.</li>
    <li> Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.</li>
    <li> No se necesita tener antigüedad como Socio de nuestra Cooperativa.</li>
    <li> Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.</li>
    </ul>
    `,
    requisitos: `
    <ul>
    <li> Ser socio de la Cooperativa</li>
    <li> Cedula de calificación del crédito con validación por el Sistema Municipal de
    Financiamiento del Gobierno Municipal de Zapopan.</li>
    <li> Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li> Comprobación de ingresos de acuerdo a política interna.</li>
    <li> Acta de matrimonio civil (si aplica).</li>
    <li> Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li> Solicitud de crédito con documentación.</li>
    <li> Autorización para consulta en SIC’s*.</li>
    <li> RFC con homoclave.</li>
    *Sociedades de Información Crediticia.
    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.

    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.
    </ul>
    `,
    consideraciones: `
    <b>Tasa de Interés anual fija</b><br>
    9.00%<br>
    antes de IVA.<br><br>
    <b>Tasa de Interés anual moratoria fija</b><br>
    24.00%<br>
    antes de IVA.<br><br>
    <b>CAT promedio</b><br>
    9.4%<br>
    &quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.
    Cálculo de CAT realizado 15 Diciembre 2023.<br><br>
    Vigencia de cálculo Enero - Junio 2024.
    `,
    recomendaciones: `
    <ul>
    <li> Al pagar puntualmente tu crédito, generas un buen historial crediticio.</li>
    <li> Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.</li>
    <li> Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.</li>
    <li> En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.</li>
    <li> Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.</li>
    <li> Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.</li>
    </ul>
    `,
    riesgos: `
    <ul>
    <li> Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.</li>
    <li> Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.</li>
    <li> El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera</li>
    </ul>
    `,
    montoMin: 10000,
    montoMax: 100000,
    plazoMin: 2,
    plazoMax: 48,
    interesMen: 0.75,
    interesAnualFija: 9.00,
    interesAnualMora: 24.00,
    catPromedio: 9.4
  },
  {
    id: "prestamovil",
    nombre: "Prestamóvil",
    tipoCredito: "Comercial",
    descripcion: `
    Si necesitas hacer crecer tu negocio, solicita este préstamo para la adquisición de
    vehículos uso de Transporte Público de Pasajeros, carga, tractor agrícola o
    Vehículos Utilitarios.
    `,
    caracteristicas: `
    <ul>
    <li> Crédito destinado para la compra de un auto nuevo o seminuevo de hasta 2
    años de antigüedad.</li>
    <li> El vehículo deberá de ser adquirido exclusivamente en agencia automotriz
    y/o lote de autos (Aplica restricciones).</li>
    <li> Monto del Crédito desde $50,000.00 hasta $1,400,000.00 o 5,000,000.00
    de acuerdo al destino del crédito.</li>
    <li> Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.</li>
    <li> Los intereses ordinarios se calculan sobre el saldo insoluto del capital del
    crédito.</li>
    <li> Plazo de 2 y hasta 72 meses.</li>
    <li> Periodicidad de pago mensual.</li>
    <li> Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.</li>
    <li> Moneda: Pesos.</li>
    <li> Tipos de garantía: liquida, prendaria (la factura del vehículo) y/o
    quirografaria de aval.</li>
    </ul>
    `,
    venyben: `
    <ul>
    <li> Es un crédito de fácil acceso.</li>
    <li> Disposición inmediata del monto total autorizado del crédito.</li>
    <li> Recepción de pagos en cualquier sucursal de la Cooperativa.</li>
    <li> Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.</li>
    <li> Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.</li>
    <li> No se necesita tener antigüedad como Socio de nuestra Cooperativa.</li>
    <li> Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.</li>
    <li> Puedes obtener una tasa preferencial por pago puntual de tus
    mensualidades del crédito, de acuerdo a los siguientes términos y
    condiciones:</li>
    1. Pagar puntualmente tu crédito de acuerdo a las fechas establecidas
    en tu plan de pagos y/o tabla de amortizaciones.<br>
    2. La tasa promocional aplica en todas nuestras sucursales del Estado
    de Jalisco.<br>
    3. El beneficio de la tasa promocional por pago oportuno no es
    acumulativo, si no pagas de manera puntual la

    amortización correspondiente, pierdes dicho beneficio hasta la
    regularización de los pagos de tu crédito.<br>
    4. Las tasas preferenciales serán dadas a conocer a través de los
    medios de avisos oficiales de la Cooperativa.
    </ul>
    `,
    requisitos: `
    <ul>
    <li> Ser socio de la Cooperativa</li>
    <li> Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li> Comprobante de ingresos de acuerdo a política interna.</li>
    <li> Acta de matrimonio civil (si aplica).</li>
    <li> Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li> Garantía quirografaria de aval en su caso.</li>
    <li> Solicitud de crédito con documentación.</li>
    <li> Carta cotización del vehículo a adquirir emitida por el lote y/o agencia.</li>
    <li> Autorización para consulta en SIC’s*</li>
    <li> Construir una garantía líquida de $5,000.00.</li>
    <li> RFC con homoclave.</li>
    <li> Constancia de situación fiscal y opinión de cumplimiento positiva con
    antigüedad no mayor a 30 días antes de la solicitud del crédito.</li>
    <li> El solicitante deberá contratar bajo su costo y de manera obligatoria un
    seguro de cobertura amplia que cubra todo el periodo del crédito cuyo
    beneficiario preferente será Caja Popular San Pablo S.C. de A.P. de R.L. de
    C.V.</li>
    *Sociedades de Información Crediticia.<br>
    El cobro o exención de IVA a intereses (según sea el caso) se apegará a las
    disposiciones establecidas en la Ley del Impuesto al Valor Agregado y
    legislaciones fiscales vigentes.<br><br>
    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.<br><br>
    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.
    </ul>
    `,
    consideraciones: `
    <b>Tasa de Interés anual fija</b><br>
    14.40%<br>
    antes de IVA.<br><br>
    <b>Tasa de Interés anual moratoria fija</b><br>
    48.00%<br>
    antes de IVA.<br><br>
    <b>CAT promedio</b><br>
    13.0%<br>
    &quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.
    Cálculo de CAT realizado 15 Diciembre 2023.<br><br>
    Vigencia de cálculo Enero - Junio 2024.
    `,
    recomendaciones: `
    <ul>
    <li> Al pagar puntualmente tu crédito, generas un buen historial crediticio.</li>
    <li> Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.</li>
    <li> Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.</li>
    <li> En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.</li>
    <li> Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.</li>
    <li> Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.</li>
    </ul>
    `,
    riesgos: `
    <ul>
    <li> Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.</li>
    <li> Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.</li>
    <li> El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera</li>
    </ul>
    `,
    montoMin: 50000,
    montoMax: 5000000,
    plazoMin: 2,
    plazoMax: 72,
    interesMen: 1.2,
    interesAnualFija: 14.40,
    interesAnualMora: 48.00,
    catPromedio: 13.0
  },
  {
    id: "comercial-avio",
    nombre: "Comercial Avío",
    tipoCredito: "Comercial",
    descripcion: `
    Financiamiento de corto o mediano plazo para apoyo al capital de trabajo, cuyo
    importe esta condicionado a ser invertido únicamente en la compra de materias
    primas y materiales, pagos de jornales, salarios y gastos directos de explotación
    indispensables para la operación de empresas con actividades de transformación
    y manufactura en sectores como: industria, agropecuario, forestal y pesquero
    nacional, principalmente.
    `,
    caracteristicas: `
    <ul>
    <li> Crédito de habilitación o avío.</li>
    <li> Monto del Crédito de $5,000.00 hasta $5,000,000.00.</li>
    <li> Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.</li>
    <li> Los intereses ordinarios se calculan sobre el saldo insoluto del capital del
    crédito.</li>
    <li> Plazo de 6 y hasta 60 meses o de 2 y hasta 12 meses según el destino del
    crédito.</li>
    <li> Periodicidad de pago mensual o al ciclo.</li>
    <li> Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.</li>
    <li> Moneda: Pesos.</li>
    <li> Tipos de garantía: liquida, quirografaria y/o prendaria.</li>
    </ul>
    `,
    venyben: `
    <ul>
    <li> Es un crédito de fácil acceso.</li>
    <li> Disposición inmediata del monto total autorizado del crédito.</li>
    <li> Recepción de pagos en cualquier sucursal de la Cooperativa.</li>
    <li> Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.</li>
    <li> Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.</li>
    <li> No se necesita tener antigüedad como Socio de nuestra Cooperativa.</li>
    <li> Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.</li>
    <li> Puedes obtener una tasa preferencial por pago puntual de tus
    mensualidades del crédito, de acuerdo a los siguientes términos y
    condiciones:</li>
    1. Pagar puntualmente tu crédito de acuerdo a las fechas establecidas
    en tu plan de pagos y/o tabla de amortizaciones.<br>
    2. La tasa promocional aplica en todas nuestras sucursales del Estado
    de Jalisco.<br>
    3. El beneficio de la tasa promocional por pago oportuno no es
    acumulativo, si no pagas de manera puntual la
    amortización correspondiente, pierdes dicho beneficio hasta la
    regularización de los pagos de tu crédito.<br>

    4. Las tasas preferenciales serán dadas a conocer a través de los
    medios de avisos oficiales de la Cooperativa.
    </ul>
    `,
    requisitos: `
    <ul>
    <li> Ser socio de la Cooperativa </li>
    <li> Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li> Constituir una garantía líquida del 10% del monto de crédito a solicitado.</li>
    <li> RFC con homoclave.</li>
    <li> Comprobante de ingresos de acuerdo a política interna.</li>
    <li> Acta de matrimonio civil (si aplica).</li>
    <li> Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li> Garantía quirografaria de aval en su caso.</li>
    <li> Solicitud de crédito con documentación.</li>
    <li> Autorización para consulta en SIC’s*
    <li> Cédula de identificación fiscal (actualizada y cuyo desglose de actividades
    coincida con la finalidad del crédito).</li>
    <li> Opinión de cumplimiento positiva con antigüedad no mayor a 30 días antes
    de la solicitud de crédito.</li>
    <li> 1 año con la actividad.</li><br>
    *Sociedades de Información Crediticia.<br><br>
    El cobro o exención de IVA a intereses (según sea el caso) se apegará a las
    disposiciones establecidas en la Ley del Impuesto al Valor Agregado y
    legislaciones fiscales vigentes.<br><br>
    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.<br><br>
    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.
    </ul>
    `,
    consideraciones: `
    <b>Tasa de Interés anual fija</b><br>
    21.60%<br>
    antes de IVA.<br><br>
    <b>Tasa de Interés anual moratoria fija</b><br>
    48.00%<br>
    antes de IVA.<br><br>
    <b>CAT promedio</b><br>
    20.1%<br>
    &quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.<br><br>

    Cálculo de CAT realizado 15 Diciembre 2023.<br>
    Vigencia de cálculo Enero - Junio 2024.
    `,
    recomendaciones: `
    <ul>
    <li> Al pagar puntualmente tu crédito, generas un buen historial crediticio.</li>
    <li> Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.</li>
    <li> Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.</li>
    <li> En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.</li>
    <li> Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.</li>
    <li> Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.</li>
    </ul>
    `,
    riesgos: `
    <ul>
    <li> Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.</li>
    <li> Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.</li>
    <li> El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera</li>
    </ul>
    `,
    montoMin: 5000,
    montoMax: 5000000,
    plazoMin: 6,
    plazoMax: 60,
    interesMen: 1.8,
    interesAnualFija: 21.60,
    interesAnualMora: 48.00,
    catPromedio: 20.1
  },
  {
    id: "comercial-refaccionario",
    nombre: "Comercial Refaccionario",
    tipoCredito: "Comercial",
    descripcion: `
    Financiamiento de mediano a largo plazo para cubrir necesidades de inversión en
    activos fijos y fortalecer la infraestructura de su empresa, se puede usar para
    empresas pertenecientes al sector agropecuario forestal y pesquero.
    `,
    caracteristicas: `
    <ul>
    <li> Crédito refaccionario. </li>
    <li> Monto del Crédito de $5,000.00 hasta 300,000.00.<li>
    <li> Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.<li>
    <li> Los intereses ordinarios se calculan sobre el saldo insoluto del capital del
    crédito.<li>
    <li> Plazo de 6 y hasta 60 meses o de 2 y hasta 48 meses dependiendo del
    destino del crédito.<li>
    <li> Periodicidad de pago mensual o cada ciclo.<li>
    <li> Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.<li>
    <li> Moneda: Pesos.<li>
    <li> Tipos de garantía: liquida, prendaria y/o quirografaria.<li>
    </ul>
    `,
    venyben: `
    <ul>
    <li> Es un crédito de fácil acceso.<li>
    <li> Disposición inmediata del monto total autorizado del crédito.<li>
    <li> Recepción de pagos en cualquier sucursal de la Cooperativa.<li>
    <li> Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.<li>
    <li> Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.<li>
    <li> No se necesita tener antigüedad como Socio de nuestra Cooperativa.<li>
    <li> Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.<li>
    <li> Puedes obtener una tasa preferencial por pago puntual de tus
    mensualidades del crédito, de acuerdo a los siguientes términos y
    condiciones:<li>
    1. Pagar puntualmente tu crédito de acuerdo a las fechas establecidas
    en tu plan de pagos y/o tabla de amortizaciones.<br>
    2. La tasa promocional aplica en todas nuestras sucursales del Estado
    de Jalisco.<br>
    3. El beneficio de la tasa promocional por pago oportuno no es
    acumulativo, si no pagas de manera puntual la
    amortización correspondiente, pierdes dicho beneficio hasta la
    regularización de los pagos de tu crédito.<br>
    4. Las tasas preferenciales serán dadas a conocer a través de los
    medios de avisos oficiales de la Cooperativa.
    </ul>
    `,
    requisitos: `
    <ul>
    <li> Ser socio de la Cooperativa.</li>
    <li> Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li> Constituir una garantía líquida del 10% del monto de crédito a solicitado.</li>
    <li> Acta de matrimonio civil (si aplica).</li>
    <li> Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li> RFC con homoclave.</li>
    <li> Comprobante de ingresos de acuerdo a política interna.</li>
    <li> Garantía quirografaria de aval en su caso.</li>
    <li> Solicitud de crédito con documentación.</li>
    <li> Autorización para consulta en SIC’s*</li>
    <li> Cédula de identificación fiscal (actualizada y cuyo desglose de actividades
    coincida con la finalidad del crédito).</li>
    <li> Opinión de cumplimiento positiva con antigüedad no mayor a 30 días antes
    de la solicitud de crédito.</li>
    <li> 1 año con la actividad.</li>
    <li> Cotización del proyecto.</li><br>
    *Sociedades de Información Crediticia.<br><br>
    El cobro o exención de IVA a intereses (según sea el caso) se apegará a las
    disposiciones establecidas en la Ley del Impuesto al Valor Agregado y
    legislaciones fiscales vigentes.<br><br>
    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.<br><br>
    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.
    </ul>
    `,
    consideraciones: `
    <b>Tasa de Interés anual fija</b><br>
    21.60%<br>
    antes de IVA.<br><br>
    <b>Tasa de Interés anual moratoria fija</b><br>
    48.00%<br>
    antes de IVA.<br><br>
    <b>CAT promedio</b><br>
    13.9%<br>
    &quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.<br><br>
    Cálculo de CAT realizado 15 Diciembre 2023.<br>
    Vigencia de cálculo Enero - Junio 2024.
    `,
    recomendaciones: `
    <ul>
    <li> Al pagar puntualmente tu crédito, generas un buen historial crediticio.</li>
    <li> Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.</li>
    <li> Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.</li>
    <li> En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.</li>
    <li> Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.</li>
    <li> Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.</li>
    </ul>
    `,
    riesgos: `
    <ul>
    <li> Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.</li>
    <li> Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.</li>
    <li> El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera</li>
    </ul>
    `,
    montoMin: 5000,
    montoMax: 300000,
    plazoMin: 6,
    plazoMax: 60,
    interesMen: 1.8,
    interesAnualFija: 21.60,
    interesAnualMora: 48.00,
    catPromedio: 13.9
  },
  {
    id: "comercial-refaccionario-hipotecario",
    nombre: "Comercial Refaccionario Hipotecario",
    tipoCredito: "Comercial",
    descripcion: `
    Financiamiento de mediano a largo plazo para cubrir necesidades de inversión en
    activos fijos y fortalecer la infraestructura de su empresa, se puede usar para
    empresas pertenecientes al sector agropecuario forestal y pesquero.
    `,
    caracteristicas: `
    <ul>
    <li> Crédito refaccionario con garantía hipotecaria.</li>
    <li> Monto del Crédito desde $300,000.00 hasta $5,000,000.00.</li>
    <li> El financiamiento será hasta el 80% del proyecto.</li>
    <li> Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.</li>
    <li> Los intereses ordinarios se calculan sobre el saldo insoluto del capital del
    crédito.</li>
    <li> Plazo de 6 y hasta 120 meses o de 2 a 48 meses de acuerdo al destino del
    crédito.</li>
    <li> Periodicidad de pago mensual o por ciclos.</li>
    <li> Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.</li>
    <li> Moneda: Pesos.</li>
    <li> Tipos de garantía: liquida e hipotecaria.</li>
    </ul>
    `,
    venyben: `
    <ul>
    <li> Es un crédito de fácil acceso.</li>
    <li> Disposición inmediata del monto total autorizado del crédito.</li>
    <li> Recepción de pagos en cualquier sucursal de la Cooperativa.</li>
    <li> Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.</li>
    <li> Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.</li>
    <li> No se necesita tener antigüedad como Socio de nuestra Cooperativa.</li>
    <li> Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.</li>
    <li> Puedes obtener una tasa preferencial por pago puntual de tus
    mensualidades del crédito, de acuerdo a los siguientes términos y
    condiciones:</li>
    1. Pagar puntualmente tu crédito de acuerdo a las fechas establecidas
    en tu plan de pagos y/o tabla de amortizaciones.<br>
    2. La tasa promocional aplica en todas nuestras sucursales del Estado
    de Jalisco.<br>
    3. El beneficio de la tasa promocional por pago oportuno no es
    acumulativo, si no pagas de manera puntual la amortización
    correspondiente, pierdes dicho beneficio hasta la regularización de
    los pagos de tu crédito.<br>

    4. Las tasas preferenciales serán dadas a conocer a través de los
    medios de avisos oficiales de la Cooperativa.
    </ul>
    `,
    requisitos: `
    <ul>
    <li> Ser socio de la Cooperativa</li>
    <li> Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li> Constituir una garantía líquida de 20,000.00.</li>
    <li> Acta de matrimonio civil o Constancia de existencia o inexistencia de
    matrimonio.</li>
    <li> RFC con homoclave.</li>
    <li> Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li> Comprobante de ingresos de acuerdo a política interna.</li>
    <li> Solicitud de crédito con documentación.</li>
    <li> Autorización para consulta en SIC’s*
    <li> Cédula de identificación fiscal (actualizada y cuyo desglose de actividades
    coincida con la finalidad del crédito).</li>
    <li> Cotización del proyecto.</li>
    <li> Opinión de cumplimiento positiva con antigüedad no mayor a 30 días antes
    de la solicitud de crédito.</li>
    <li> Gastos previos: El socio incurrirá en gastos de avalúo independientemente
    de que se formalice o no el crédito. Para la formalización del avalúo, el
    Socio deberá cubrir los horarios del valuador autorizado por la Cooperativa
    para tales efectos.</li>
    <li> Gastos notariales y regístrales: Los gastos, impuestos, derechos y
    honorarios de escrituración serán a cargo del solicitante y se deberán cubrir
    directamente con el Notario Público en el momento de la firma del contrato.
    Estos gastos incluyen contribuciones federales y locales, así como
    honorarios.</li>
    <li> Seguros:</li>
    1. El solicitante deberá contratar bajo su costo y de manera obligatoria
    un seguro de vida que cubra todo el periodo del crédito cuyo
    beneficiario preferente será Caja Popular San Pablo S.C. de A.P. de
    R.L. de C.V.<br>
    2. El solicitante deberá contratar bajo su costo y de manera obligatoria
    un seguro de daños al inmueble que cubra todo el periodo del crédito
    cuyo beneficiario preferente será Caja Popular San Pablo S.C. de
    A.P. de R.L. de C.V.<br><br>
    *Sociedades de Información Crediticia.<br><br>

    El cobro o exención de IVA a intereses (según sea el caso) se apegará a las
    disposiciones establecidas en la Ley del Impuesto al Valor Agregado y
    legislaciones fiscales vigentes.<br><br>
    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.<br><br>
    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.
    </ul>
    `,
    consideraciones: `
    <b>Tasa de Interés anual fija</b><br>
    21.60%<br>
    antes de IVA.<br><br>
    <b>Tasa de Interés anual moratoria fija</b><br>
    48.00%<br>
    antes de IVA.<br><br>
    <b>CAT promedio</b><br>
    13.4%<br>
    &quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.<br><br>
    Cálculo de CAT realizado 15 Diciembre 2023.<br>

    Vigencia de cálculo Enero - Junio 2024.
    `,
    recomendaciones: `
    <ul>
    <li> Al pagar puntualmente tu crédito, generas un buen historial crediticio.</li>
    <li> Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.</li>
    <li> Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.</li>
    <li> En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.</li>
    <li> Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.</li>
    <li> Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.</li>
    </ul>
    `,
    riesgos: `
    <ul>
    <li> Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.</li>
    <li> Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.</li>
    <li> El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera.</li>
    </ul>
    `,
    montoMin: 300000,
    montoMax: 5000000,
    plazoMin: 6,
    plazoMax: 120,
    interesMen: 1.8,
    interesAnualFija: 21.60,
    interesAnualMora: 48.00,
    catPromedio: 13.4
  },
  {
    id: "vivienda",
    nombre: "Vivienda",
    tipoCredito: "Vivienda",
    descripcion: `
    Construye tu patrimonio con una muy atractiva opción para ti y tu familia,
    invirtiendo en comprar tu casa, terreno o sustituyendo tu hipoteca con ese crédito.
    `,
    caracteristicas: `
    <ul>
    <li> Crédito destinado para la adquisición de vivienda nueva o usada,
    construcción o remodelación, compra de terreno para fines habitacionales y
    sustitución de hipoteca.</li>
    <li> Monto del Crédito de $200,000.00 hasta 5,000,000.00.</li>
    <li> Tiene una tasa de interés ordinaria anual fija durante la vigencia del crédito.</li>
    <li> Los intereses ordinarios se calculan sobre el saldo insoluto del capital del
    crédito.</li>
    <li> Plazo de 12 y hasta 240 meses.</li>
    <li> Periodicidad de pago mensual.</li>
    <li> Contratación en cualquiera de nuestras sucursales en el Estado de Jalisco.</li>
    <li> Moneda: Pesos.</li>
    <li> Tipos de garantía: liquida e hipotecaria.</li>
    </ul>
    `,
    venyben: `
    <ul>
    <li> Es un crédito de fácil acceso.</li>
    <li> Disposición inmediata del monto total autorizado del crédito.</li>
    <li> Recepción de pagos en cualquier sucursal de la Cooperativa.</li>
    <li> Sin penalización por pagos anticipados y/o adelantados o liquidación
    anticipada.</li>
    <li> Estado de cuenta mensual a solicitud del interesado en cualquier de
    nuestras sucursales.</li>
    <li> No se necesita tener antigüedad como Socio de nuestra Cooperativa.</li>
    <li> Los intereses derivados de la parte del crédito se cobrarán sobre saldos
    insolutos en cada uno de los vencimientos de capital, por los meses
    transcurridos entre cada evento.</li>
    </ul>
    `,
    requisitos: `
    <ul>
    <li> Ser socio de la Cooperativa.</li>
    <li> Identificación oficial vigente (Credencial para votar, pasaporte, cédula
    profesional).</li>
    <li> Comprobante de ingresos de acuerdo a política interna.</li>
    <li> Acta de matrimonio civil (si aplica) o Certificado de existencia o inexistencia
    de matrimonio.</li>
    <li> RFC con homoclave.</li>
    <li> Comprobante de domicilio (recibo de luz, agua, teléfono fijo de 2 meses de
    antigüedad máximo).</li>
    <li> Garantía quirografaria de aval en su caso.</li>
    <li> Edad mínima 25 años a 64 años máxima.</li>

    <li> Solicitud de crédito con documentación.</li>
    <li> Constancia de situación fiscal no mayor a 30 días.</li>
    <li> Autorización para consulta en SIC’s*</li>
    <li> Gastos previos: El socio incurrirá en gastos de avalúo independientemente
    de que se formalice o no el crédito. Para la formalización del avalúo, el
    Socio deberá cubrir los horarios del valuador autorizado por la Cooperativa
    para tales efectos.</li>
    <li> Gastos notariales y regístrales: Los gastos, impuestos, derechos y
    honorarios de escrituración serán a cargo del solicitante y se deberán cubrir
    directamente con el Notario Público en el momento de la firma del contrato.
    Estos gastos incluyen contribuciones federales y locales, así como
    honorarios.</li>
    <li> Seguros:</li>
    1. El solicitante deberá contratar bajo su costo y de manera obligatoria
    un seguro de vida que cubra todo el periodo del crédito cuyo
    beneficiario preferente será Caja Popular San Pablo S.C. de A.P. de
    R.L. de C.V.<br>
    2. El solicitante deberá contratar bajo su costo y de manera obligatoria
    un seguro de daños al inmueble que cubra todo el periodo del crédito
    cuyo beneficiario preferente será Caja Popular San Pablo S.C. de
    A.P. de R.L. de C.V.<br><br>
    </ul>
    *Sociedades de Información Crediticia.
    El cobro o exención de IVA a intereses (según sea el caso) se apegará a las
    disposiciones establecidas en la Ley del Impuesto al Valor Agregado y
    legislaciones fiscales vigentes.<br><br>
    Los requisitos pueden variar de acuerdo al resultado del análisis del crédito o la
    integración del expediente en relación al monto de crédito solicitado.<br><br>
    Para más información, consulta con un ejecutivo en cualquiera de nuestras
    sucursales, quien con gusto te atenderá.
    `,
    consideraciones: `
    <b>Tasa de Interés anual fija</b><br>
    9.60%<br>
    antes de IVA.<br><br>
    <b>Tasa de Interés anual moratoria fija</b><br>
    48.00%<br>
    antes de IVA.<br><br>
    <b>CAT promedio</b><br>
    10.8%<br>
    &quot;SIN IVA&quot;. Para fines informativos y de comparación exclusivamente.<br><br>

    Cálculo de CAT realizado 15 Diciembre 2023.<br>
    Vigencia de cálculo Enero - Junio 2024.
    `,
    recomendaciones: `
    <ul>
    <li> Al pagar puntualmente tu crédito, generas un buen historial crediticio.</li>
    <li> Realiza abonos anticipados sin penalización para que los intereses de tu
    crédito disminuyan.</li>
    <li> Verifica tu fecha límite de pago para evitar que se generen intereses
    moratorios a tu crédito.</li>
    <li> En caso de ser aval de algún otro socio de nuestra Cooperativa, asegúrate
    que se encuentre al corriente en su préstamo para iniciar tu trámite.</li>
    <li> Puede solicitar una oferta vinculante en cualquiera de nuestras sucursales.</li>
    <li> Puede obtener previa solicitud el modelo del clausulado que contenga los
    derechos y obligaciones de las partes con anterioridad a su firma, una vez
    autorizado el crédito.</li>
    </ul>
    `,
    riesgos: `
    <ul>
    <li> Incumplir tus obligaciones te puede generar cargos por intereses
    moratorios.</li>
    <li> Contratar créditos que excedan tu capacidad de pago afecta tu historial
    crediticio.</li>
    <li> El avalista, obligado solidario o coacreditado responderá como obligado
    principal por el total del pago frente a la Institución Financiera</li>
    </ul>
    `,
    montoMin: 200000,
    montoMax: 5000000,
    plazoMin: 12,
    plazoMax: 240,
    interesMen: 0.8,
    interesAnualFija: 9.60,
    interesAnualMora: 48.00,
    catPromedio: 10.8
  }
];
