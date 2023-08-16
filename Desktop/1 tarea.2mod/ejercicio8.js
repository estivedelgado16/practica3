let nomina = prompt('ingresa tu sueldo o un promedio semana ')

let ahorroSemanal = parseInt(nomina)*0.15;
let ahorroquinc = ahorroSemanal * 4
let ahorroAnual =ahorroquinc * 12

console.log('Tu ahorro total(anual) es de $' + ahorroAnual.toFixed(3))

