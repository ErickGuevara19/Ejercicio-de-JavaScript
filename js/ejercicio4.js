let nombre;
let cantidad;
let precio;

alert("Programa para calcular el precio de un producto y aplicar descunto")
nombre= prompt("Ingrese el nombre del producto");
cantidad = Number(prompt("Ingrese la cantidad que se va a llevar de ese producto"));
precio = Number(prompt("Ingrese la cantidad por unidad del producto"));

preciosin= cantidad * precio;

descuento= preciosin * 0.1;

preciofinal = preciosin - descuento;

document.getElementById("producto").innerHTML = "El producto que se va a llevar es :" + nombre;
document.getElementById("cantidad").innerHTML = "-La cantidad de compra de dicho producto es de: " + cantidad;
document.getElementById("precio").innerHTML = "El precio unitario del producto es de: " + precio;
document.getElementById("subtotal").innerHTML = "El subtotal es de : " + preciosin;
document.getElementById("descuento").innerHTML = "El descuento de su compra es de: " + descuento;
document.getElementById("preciofinal").innerHTML = "El precio total a pagar es de: " + preciofinal;


alert("Su valor a pagar es de : " + preciofinal)

