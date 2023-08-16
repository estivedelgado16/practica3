let peso = prompt("ingresa el valor en pesos que deseas cambiar a dolares")
let dolar = 0.00025

dolar = (Number(peso)*Number(dolar));

if (!isNaN(peso) && peso > 0 ) {
    console.log(`la conversion  es $: ${dolar}, dolares`);
} else {
    console.error('Ingrese valores numéricos positivos válidos.');
}


