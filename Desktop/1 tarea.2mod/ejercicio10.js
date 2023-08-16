// Función para calcular el área de un cuadrado
function calcularAreaCuadrado(lado) {
    const area = lado * lado;
    return area;
}

// Solicitar al usuario ingresar la longitud de un lado del cuadrado
const ladoCuadrado = parseFloat(prompt("Ingrese la longitud de un lado del cuadrado:"));

if (!isNaN(ladoCuadrado) && ladoCuadrado > 0) {
    const areaCuadrado = calcularAreaCuadrado(ladoCuadrado);
    console.log(`El área del cuadrado es :`,areaCuadrado);
} else {
    console.log("Error: Ingrese una longitud válida para el lado del cuadrado.");
}
