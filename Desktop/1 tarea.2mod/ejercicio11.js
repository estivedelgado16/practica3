// Función para calcular el promedio ponderado
function calcularPromedioPonderado(examen1, examen2, examen3) {
    const pesoExamen1 = 0.25;
    const pesoExamen2 = 0.25;
    const pesoExamen3 = 0.50;

    const promedioPonderado = (examen1 * pesoExamen1) + (examen2 * pesoExamen2) + (examen3 * pesoExamen3);
    return promedioPonderado;
}

// Solicitar al usuario ingresar las calificaciones de los tres exámenes
const examen1 = parseFloat(prompt("Ingrese la calificación del primer examen:"));
const examen2 = parseFloat(prompt("Ingrese la calificación del segundo examen:"));
const examen3 = parseFloat(prompt("Ingrese la calificación del tercer examen:"));

if (!isNaN(examen1) && !isNaN(examen2) && !isNaN(examen3)) {
    const promedio = calcularPromedioPonderado(examen1, examen2, examen3);
    console.log("El promedio ponderado del alumno es: ",promedio);
} else {
    console.log("Error: Ingrese calificaciones numéricas válidas para los exámenes.");
}
