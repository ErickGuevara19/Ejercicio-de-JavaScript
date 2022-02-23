let alto;
let ancho;

alert("Ejercicio de encontrar el area y perimetro de un rectangulo");
alto=Number(prompt("Ingrese el alto en CM" , "cm"));
ancho=Number(prompt("Ingrese el ancho en CM" , "cm"));

area = alto * ancho;
perimetro = (2 * alto) + (2 * ancho);

alert("El area del rectangulo es "+ area);
alert("El perimetro del rectangulo es " + perimetro);

document.getElementById("alto").innerHTML="El alto del rectangulo es : " + alto;
document.getElementById("ancho").innerHTML="El alto del rectangulo es : " + ancho;
document.getElementById("area").innerHTML="El area del rectangulo es : " + area;
document.getElementById("perimetro").innerHTML = "El perimetro del rectangulo es : " + perimetro;