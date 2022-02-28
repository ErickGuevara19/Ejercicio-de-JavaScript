let a ;
let i ;
let j ;
let k ;
let  p ;
let caja ; 
let n ;


n = Number(prompt("Ingrese un numero"));

for (p=1;p<=n;p++) {
    document.write("Ingrese el numero ",p,'<BR/>');
    a[p-1] = Number(prompt());
}
for (k=1;k<=n;k++) {
    for (j=1;j<=(n-1);j++) {
        if (a[j-1]<a[j]) {
            caja = a[j-1];
            a[j-1] = a[j];
            a[j] = caja;
        }
    }
}
document.write("El arreglo de numeros de mayor a menor",'<BR/>');
document.write("-------------------------------",'<BR/>');
for (i=1;i<=n;i++) {
    document.write(a[i-1],'<BR/>');
}
for (k=1;k<=n;k++) {
    for (j=1;j<=(n-1);j++) {
        if (a[j-1]>a[j]) {
            caja = a[j-1];
            a[j-1] = a[j];
            a[j] = caja;
        }
    }
}
document.write("El arreglo de numeros de menor a mayor",'<BR/>');
document.write("-------------------------------",'<BR/>');
for (i=1;i<=n;i++) {
    document.write(a[i-1],'<BR/>');
}

