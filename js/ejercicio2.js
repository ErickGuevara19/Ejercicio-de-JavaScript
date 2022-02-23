let numero1;
let numero2;
let suma;


alert("Ejercicio 2 - Suma de dos numeros");
numero1 = Number (prompt("Ingrese el primer numero"));
numero2 = Number(prompt("Ingrese el segundo numero"));

suma= numero1 + numero2;

document.getElementById("num1").innerHTML="El primer numero es : " + numero1;
document.getElementById("num2").innerHTML="El segundo numero es : " + numero2;
document.getElementById("suma").innerHTML="La suma de sus numeros es : " + suma;

