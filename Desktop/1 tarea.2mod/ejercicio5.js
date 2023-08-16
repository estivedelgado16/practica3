
//pedir la cantidad de m2, la empresa quiere dejar un precio fijo en m2 por temas de materia prima  

let m2 = prompt('ingrese la cantidad de metro cuadrado que desea pintar.... el valor de por m2 es de $1.5 mill')
const valorM2= 1500000
const iva= 0.19
//como calcular el presuspuesto 
let presupuesto = ((valorM2)* Number(m2))

console.log('cantidad de metro caudrado es : '+ m2+' m2')
console.log('el precio por m2 es : $'+valorM2+' mill')
console.log('el iva es : '+(valorM2*m2)/iva)
console.log('el total cotización por m2 : $'+presupuesto)



