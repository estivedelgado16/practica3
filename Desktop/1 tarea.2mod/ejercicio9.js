let diasEstad = parseFloat(prompt('ingrese los dias de estadia '));
let habitxdia = parseFloat(80) 
let comidaxdia = parseFloat(300) 
let otrGastos = 300 

let costHabita = diasEstad * habitxdia
let costComida = diasEstad * comidaxdia
let cosTotrogast = diasEstad * otrGastos
let costTotal = (costHabita + costComida + cosTotrogast)

console.log('el costo total es: '+ costTotal.toFixed(3));


