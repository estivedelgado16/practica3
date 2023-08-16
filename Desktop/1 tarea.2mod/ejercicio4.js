
let hora = prompt('Ingrese las horas que prestó servicio');
let costoHora = 4000;
if (hora >= 1) {
    let pago = hora * costoHora;
    console.log(`Tu pago es: $${pago.toFixed(2)}`);
} else {
    console.log('El tiempo de servicio debe ser al menos 1 hora para calcular el pago.');
}


