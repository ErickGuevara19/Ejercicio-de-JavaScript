let n;
let sumapares;
let sumaimpares;

n= Number (prompt("Ingrese el numero hasta que desea analizar"));

sumaimpares = 0 ;
sumapares = 0 ;

for ( x = 1; x <= n; x++) {

    if (x % 2 == 0) {

        sumapares = sumapares + x
        
    } else {
         sumaimpares = sumaimpares + x
    }
    
    
}

alert ("La suma de numeros pares de los numeros ingresados es de : " + sumapares);
alert ("La suma de numeros impares de los numeros ingresados es de : " + sumaimpares);

document.getElementById("sumapares").innerHTML = "La suma de los numeros pares hasta " + x + " es de : " + sumapares;
document.getElementById("sumaimpares").innerHTML = "La suma de los numeros impares hasta " + x + " es de : " + sumaimpares;