
let cont;
let suma;
let n;

x = 0;
cont = 0;
suma = 0;

n = Number(prompt("Ingrese el numero donde va a empezar y la cantidad de numero pares que se sumara"));

for (x=n;x<=n;x++) {
    while (cont<n) {
        if (x%2==0) {
            document.write(x,'<BR/>');
            suma = suma + x;
            cont = cont + 1;
        }
        x = x+1;
    }
}
alert("La suma de los "+ n + " numeros pares despues de "+ n + " es de: " + suma);
document.getElementById("frase").innerHTML = "La suma de los "+ n + " numeros pares despues de "+ n + " es de: " + suma;
document.getElementById("frase2").innerHTML = "Los numeros pares despues del numero " + n + " son:"