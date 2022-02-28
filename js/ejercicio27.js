let c, f, n, serie;

n = Number(prompt("Ingrese un numero del 7 al 20"));

document.getElementById("frase").innerHTML = "El numero ingresado es : ";
	
if (n<=20 && n>=7) {
    if (n<=20 && n>=7) {
		for (f=1;f<=4;f++) {
			serie = "*";
			for (c=1;c<=n-f;c++) {
				serie = serie+"*";
			}
			document.write(serie,'<BR/>');
		}
		for (n=n-3;n<=n-1;n++) {
			serie = "*";
			for (c=1;c<=n-f;c++) {
				serie = serie+"*";
			}
			document.write(serie,'<BR/>');
		}
	} else {
		alert("Ingrese un numero de 7 a 20");
	}
    

}