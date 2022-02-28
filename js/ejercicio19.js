let net ;
let mayor ;
let  x ;

x=0;

do {
    x =x+1;
    n = Number(prompt("Ingrese el numero " + x ));
    if (x==1) {
         mayor = n;
        
    } else {

        if (n > mayor) {

            mayor = n;
            
        }
        
    }
    
} while (x != 10);

alert("El numero mayor es " + mayor)

document.getElementById("mayor").innerHTML = "El numero mayor de los 10 numeros ingresados es de : " + mayor;