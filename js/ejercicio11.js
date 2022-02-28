let año
let mes
let dia

dia = Number(prompt("Ingrese el dia de la fecha"));
mes = Number(prompt("Ingrese el mes de la fecha"));
año = Number(prompt("Ingrese el año de la fecha"));

document.getElementById("fecha").innerHTML = "La fecha ingresada es " + dia +"/"+ mes + "/"+ año;

if ((año%4==0) && ((año%100!=0) || (año%400==0))) {
    alert("EL año " + año + " ingresado es biciesto");
    document.getElementById("fra").innerHTML = "El año " + año + " ingresado es año biciesto";
    
} else {
    alert("El año " + año + " ingresado no es biciesto");
    document.getElementById("fra").innerHTML = "El año " + año + " ingresado es año biciesto";
    
}

if ((dia>=1 && dia<=31) && (mes>=1 && mes<=12) && (año>=1582 && año<=9999)) {
    alert("La fecha ingresada  cumple con los requerimientos para ser una fecha");
    document.getElementById("frase").innerHTML = "La fecha ingresada  cumple con los requerimientos para ser una fecha";
    document.getElementById("frase").innerHTML = "La fecha ingresada no cumple con los requerimientos para ser una fecha";
    

} else {

    alert("La fecha ingresada no cumple con los requerimientos para ser una fecha");
    
}
if ((año%4==0) && ((año%100!=0) || (año%400==0))) {
    if (mes==2) {
        limdia = 29;
    } else {
        if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12) {
            limdia = 31;
        } else {
            limdia = 30;
        }
    }
} else {
    if (mes==2) {
        limdia = 28;
    } else {
        if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12) {
            limdia = 31;
        } else {
            limdia = 30;
        }
    }
}
if (dia<=0 || dia<=limdia) {
    alert("La fecha ingresada  es valida");
    document.getElementById("Frase2").innerHTML = "La fecha ingresada es valida";
} else {
    alert("La fecha ingresada no es valida");
    document.getElementById("Frase2").innerHTML = "La fecha ingresada no es valida";
}
