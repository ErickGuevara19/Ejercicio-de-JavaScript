let num ;
let notas ;
let suma ;
let acum ;
 acum = 1;
 suma = 0 ;

 notas= Number(prompt("Ingrese la cantidad de notas que desea promediar"));

 while (acum <= notas) {

    n= Number(prompt("Ingrese la nota " + acum ));
     suma = suma + n ;
     acum = acum + 1 ;    
 }

 prom = suma / notas;

 alert("El promedio de " + notas + " es de : " + prom);

 if (prom >=7) {

    alert("Usted ha aprovado el año");
    document.getElementById("frase").innerHTML = "Usted ha aprovado el año";
     
 } else {

    alert ("Usted ha reprovado el año");
    document.getElementById("frase").innerHTML = "Usted ha reprovado el año";
     
 }
 
document.getElementById("notas").innerHTML = "El numero de notas ingresadas es de " + notas;
document.getElementById("suma").innerHTML = "La suma de las " + notas + " notas es de : " + suma ;
document.getElementById("prom").innerHTML = "El promedio de las " + notas + " notas es de : " + prom;



