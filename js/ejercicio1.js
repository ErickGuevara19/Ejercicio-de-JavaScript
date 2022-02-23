let alto;
let ancho;
alert("Ejercicio de encontrar el area de un rectangulo")
alto=Number(prompt("Ingrese el alto en CM" , "cm"));
ancho=Number(prompt("Ingrese el ancho en CM" , "cm"));

area=alto*ancho;

alert("El area del rectangulo es "+area)
document.getElementById("alto").innerHTML="El alto del rectangulo es : "+ alto;
document.getElementById("ancho").innerHTML="El alto del rectangulo es : "+ ancho;
document.getElementById("area").innerHTML="El alto del rectangulo es : "+ area;
