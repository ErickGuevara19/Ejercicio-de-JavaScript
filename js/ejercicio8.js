let opcion
let duracion

alert("Precio a pagar por la duracion de la llamada por su sector")

alert("(1) - P*m 0.15$ - Estados Unidos ")
alert("(2) - P*m 0.14$ -Canada")
alert("(3) -P*m 0.25$ -España")
alert("(4) -P*m 0.05$ -Colombia")
alert("(5) -P*m 0.10$ -Venezuela")
alert("(6) -P*m 0.11$ -Mexico")
alert("(7) -P*m 0.12$ -Argentina")
alert("(8) -P*m 0.08$ -Panama")

opcion = Number(prompt("Ingrese la opcion del pais al que acabo de llamar"))
duracion = Number(prompt("Ingrese la duracion de la llamada en minutos"))

switch (opcion) {
    case 1:
        precio = duracion * 0.15;
        alert("El precio de su llamada a Estados Unidos es de : "+ precio,"$");
        document.getElementById("precio").innerHTML = "Su precio por llamada fue de :" + precio;
        
        break;
    case 2:
        precio = duracion * 0.14;
        alert("El precio de su llamada a Canada es de : " + precio + "$");
        document.getElementById("precio").innerHTML = "Su precio por llamada fue de : " + precio;
    
        break;
    case 3: 
       precio = duracion * 0.25;
       alert("El precio de su llamada a España es de : " + precio + "$");
       document.getElementById("precio").innerHTML = "Su precio por llamada fue de : " + precio;

       break;
    case 4:
        precio = duracion * 0.05;
        alert("El precio de su llamada a Colombia es de : " + precio + "$");
        document.getElementById("precio").innerHTML = "Su precio por llamada fue de : " + precio;

        break;
    
    case 5:
        precio = duracion * 0.10;
        alert("El precio de su llamada a Venezuela es de : " + precio + "$");
        document.getElementById("precio").innerHTML = "Su precio por llamada fue de : " + precio;

        break;
    
    case 6:
        precio = duracion * 0.11;
        alert("El precio de su llamada a Mexico es de : " + precio + "$");
        document.getElementById("precio").innerHTML = "Su precio por llamada fue de : " + precio;

        break;
    
    case 7:
        precio = duracion * 0.12;
        alert("El precio de su llamada a Argentina es de : " + precio + "$");
        document.getElementById("precio").innerHTML = "Su precio por llamada fue de : " + precio;

        break;
    
    case 8 :
        precio = duracion * 0.40;
        alert("El precio de su llamada a Panama es de : " + precio + "$");
        document.getElementById("precio").innerHTML = "Su precio por llamada fue de : " + precio;

    default:
        break;
}

document.getElementById("duracion").innerHTML = "Su duracion de llamada fue : " + duracion;
document.getElementById("opcion").innerHTML = "Su opcion del pais que llamo fue : " + opcion;
