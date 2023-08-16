let altura = prompt("ingrese la altura")
let base = prompt("ingrese la base")
let area= (parseInt(altura) * parseInt(base) )/2

if (isNaN(altura)&& !isNaN(base) && altura>0 && base >0) {
console.log("El area es " , area);
} else {
console.warn('no caracteres');
console.log('ingrese numeros');
}

