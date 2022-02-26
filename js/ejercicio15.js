let sueldo
let opcion

alert("Se pide ingresar el sueldo de un trabajador y su categoría, dependiendo de la categoría se le dará una bonificación en el neto a pagar. Bonificación por categoría: A = 10%; B = 20%; C = 30%; D = 50%")

sueldo = Number(prompt("Ingrese su sueldo"))
opcion = Number(prompt("Ingrese la categorita que pertecene A=1, B=2, C=3, D=4"))

switch (opcion) {
    case 1:
        descuento = sueldo * 0.1 ;
        sueldofinal = sueldo + descuento ;
        alert ("El descuento que a cabo de recir por su categoria es de : " + descuento);
        alert("Su sueldo final es de : " + sueldofinal);
        document.getElementById("descuento").innerHTML = "Su descuento por la categoria A fue de : " + descuento + " $";
        document.getElementById("sueldofinal").innerHTML = "Su salario final es de : " + sueldofinal + " $";
        
        break;
    case 2:
        descuento = sueldo * 0.2 ;
        sueldofinal = sueldo + descuento ;
        alert ("El descuento que a cabo de recir por su categoria es de : " + descuento);
        alert("Su sueldo final es de : " + sueldofinal);
        document.getElementById("descuento").innerHTML = "Su descuento por la categoria B fue de : " + descuento + " $";
        document.getElementById("sueldofinal").innerHTML = "Su salario final es de : " + sueldofinal + " $";

        break;
    
    case 3:
        descuento = sueldo * 0.3 ;
        sueldofinal = sueldo + descuento ;
        alert ("El descuento que a cabo de recir por su categoria es de : " + descuento);
        alert("Su sueldo final es de : " + sueldofinal);
        document.getElementById("descuento").innerHTML = "Su descuento por la categoria C fue de : " + descuento + " $";
        document.getElementById("sueldofinal").innerHTML = "Su salario final es de : " + sueldofinal + " $";

        break;

    case 4:
        descuento = sueldo * 0.5 ;
        sueldofinal = sueldo + descuento ;
        alert ("El descuento que a cabo de recir por su categoria es de : " + descuento);
        alert("Su sueldo final es de : " + sueldofinal);
        document.getElementById("descuento").innerHTML = "Su descuento por la categoria D fue de : " + descuento + " $";
        document.getElementById("sueldofinal").innerHTML = "Su salario final es de : " + sueldofinal + " $";
        
        break;

    default:
        break;
}