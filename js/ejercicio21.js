let num;
let D1;
let R1;
let D2;
let D3;
let num2;
num = Number(prompt("Ingrese un numero de 3 cifras"));

document.getElementById("num").innerHTML = "El numero ingresado es : " + num;

D1 = (num - (num % 100)) / 100;

R1 = num % 100;

D2 = (R1 - (R1%10)) / 10;

D3 = R1 % 10;


num2= ((D3*100) + (D2*10) + D1);

document.getElementById("num2").innerHTML = "El numero dado la vuelta es : " + num2;



if (num == num2 ) {

    alert ("El numero " + num + " es palindromo");

    document.getElementById("frase").innerHTML = "El numero " + num + " es palindromo";
    
} else {

    alert ("El numero " + num + " no es palindromo");

    document.getElementById("frase").innerHTML = "El numero " + num + " no es palindromo";
    
}

