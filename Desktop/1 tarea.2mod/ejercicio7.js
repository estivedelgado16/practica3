// Solicitar el precio original al usuario
let nombreProduc = prompt('ingresa el nombre del prodcuto')
let precioOrig = Number(prompt('ingresa el precio del producto'))


    // Calcular el descuento y el precio con descuento
    let descuento = precioOrig * 0.20
    let precioConDescuento = precioOrig - descuento

    // Calcular el IVA y el precio final
    let iva = precioConDescuento * 0.15
    let precioFinal = precioConDescuento + iva

    // Mostrar los resultados
    console.log( "Precio con descuento: $" + precioConDescuento)
    console.log( "Precio final (con IVA): $" + precioFinal)
