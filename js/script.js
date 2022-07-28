
function Productos(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

const productoA = new Productos("Termo", 150, 5)
const productoB = new Productos("Almohada", 300, 10)
const productoC = new Productos("Tapers", 250, 15)
const productoD = new Productos("Mochila", 500, 20)
const productoE = new Productos("Paragua", 300, 7)
const productoF = new Productos("Pantalones", 1000, 30)
const productoG = new Productos("Caja", 900, 7)


let compras = parseInt(prompt("Por Favor, Eliga entre estos tres productos que tenemos en este momento: \n- 1\n- 2\n- 3"))
let precioFinal = 0;


while(compras == 1){

    let producto1 = prompt("¿Cual es el nombre del producto que quieras comprar? : \n- Termo\n- Almohada\n- Tapers")
    let cantidad1 = prompt("Por Favor, Indique la cantidad del producto que desea.")
    
    if(producto1 == "Termo"){
        if(productoA.stock >= cantidad1){
            precioFinal += precio(cantidad1, productoA.precio)
            alert("El precio al que te queda es $" + (cantidad1 * productoA.precio));
        }
        else{
            alert("No tememos esa cantidad en este momento. Lo sentimos!");
        }
    }
    else if(producto1 == "Almohada"){
        if(productoB.stock >= cantidad1){
            precioFinal += precio(cantidad1, productoB.precio)     
            alert("El precio al que te queda es $" + (cantidad1 * productoB.precio));
        }
        else{
            alert("No tenemos esa cantidad en en este momento. Lo sentimos!");
        }
    }
    else if(producto1 == "Tapers"){
        if(productoC.stock >= cantidad1){
            precioFinal += precio(cantidad1, productoC.precio)
            alert("El precio al que te queda es $" + (cantidad1 * productoC.precio));
        }
        else{
            alert("No tenemos esa cantidad en este momento. Lo sentimos!");
        }
    }
    else{
        alert("No tenemos ese producto en nuestra tienda. Lo sentimos!");
    }
    compras = parseInt(prompt("Desea seguir comprando? \n1 .- Si \n2 .- No"));
}

function precio (cantidad, valor){
    return cantidad * valor
}

let productos = [productoA.nombre, productoB.nombre, productoC.nombre];

productos.push(productoD.nombre, productoE.nombre);

let agregarProductos = [productoF.nombre, productoG.nombre];

const listadoProductos = productos.concat(agregarProductos);

console.log(listadoProductos);

const precios = [150, 300, 250, 500, 300, 1000, 900];
function buscar (elemento){
    return elemento >= 600
}
console.log(precios.find(buscar))










    