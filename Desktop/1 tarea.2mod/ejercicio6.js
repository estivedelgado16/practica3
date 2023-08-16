// Función para calcular la hipotenusa
function calcularHipotenusa(catetoA, catetoB) {
    const hipotenusa =(catetoA ** 2 + catetoB ** 2);
    return hipotenusa
}

// Solicitar al usuario ingresar los catetos
const catetoA = Number(prompt("Ingrese la longitud del cateto A:"));
const catetoB = Number(prompt("Ingrese la longitud del cateto B:"));

//operacion para 
if (!isNaN(catetoA) && !isNaN(catetoB) && catetoA > 0 && catetoB > 0) {
    const hipotenusa = calcularHipotenusa(catetoA, catetoB);
    console.log(`La hipotenusa del triángulo rectángulo es: ${hipotenusa}`);
} else {
    console.log("Error: Ingrese valores numéricos positivos válidos.");
}
