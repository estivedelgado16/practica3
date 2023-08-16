
    // Entrada de datos
    let recargo2 = 0.05
    let recargo6 = 0.40

    let valorComp = Number(prompt("Ingrese el valor total de la compra: "));
    let nCuotas = Number(prompt("ingrese si quiere pagar su producto a 1, 2 0 6 cuotas"));
    

    // Cálculos
    let cuota2 = valorComp / 2
    let total2 = cuota2 + (cuota2 * recargo2)
    let cuota6 = valorComp / 6
    let total6 = cuota6 + (cuota6 * recargo6)

    // Salida de datos

    if (nCuotas == 1) {
        console.log( "1 cuota de $", valorComp, " (0% de recargo)")
    } else if (nCuotas == 2){
        console.log( "2 cuotas de $", cuota2, "el total es $:", total2, " (5% de recargo)")
    } else if (nCuotas == 6) {
        console.log( "6 cuotas de $", valorComp, "el total es $:",total6, " (40% de recargo)")
    }
