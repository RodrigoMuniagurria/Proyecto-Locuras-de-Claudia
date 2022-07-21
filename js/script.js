
let nombreProductoA = "Termo"
let precioProductoA = 150
let stockProductoA = 5

let nombreProductoB = "Almhoada"
let precioProductoB = 300
let stockProductoB = 10

let nombreProductoC = "Tapers"
let precioProductoC = 250
let stockProductoC = 15


let compras = parseInt(prompt("Por Favor, Eliga entre estos tres productos que tenemos en este momento: \n- 1\n- 2\n- 3"))
let precioFinal = 0;


for(let i = 0; i < compras; i++){

    let producto1 = prompt("¿Cual es el nombre del producto que quieras comprar? : \n- Termo\n- Almhoada\n- Tapers")
    let cantidad1 = prompt("Por Favor, Indique la cantidad del producto que desea.")
    
    if(producto1 == "Termo"){
        if(stockProductoA >= cantidad1){
            precio(cantidad1, precioProductoA)
            alert("El precio al que te queda es $" + (cantidad1 * precioProductoA))
        }
        else{
            alert("No tememos esa cantidad en este momento. Lo sentimos!")
        }
    }
    else if(producto1 == "Almhoada"){
        if(stockProductoB >= cantidad1){
            precio(cantidad1, precioProductoB)     
            alert("El precio al que te queda es $" + (cantidad1 * precioProductoB))
        }
        else{
            alert("No tenemos esa cantidad en en este momento. Lo sentimos!")
        }
    }
    else if(producto1 == "Tapers"){
        if(stockProductoC >= cantidad1){
            precio(cantidad1, precioProductoC)
            alert("El precio al que te queda es $" + (cantidad1 * precioProductoC))
        }
        else{
            alert("No tenemos esa cantidad en este momento. Lo sentimos!")
        }
    }
    else{
        break;
    }
}

function precio (cantidad, valor){
    precioFinal += cantidad * valor
}