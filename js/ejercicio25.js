let x;
let a ;
let b ;

x = 1 ;
a = 0 ;
b= 0 ;

while (x <=100) {
    if (x%2==0) {
        document.write(x," multiplo de 2",'<BR/>');
        a = a+1;
    }
    if (x%3==0) {
        document.write(x," es multiplo de 3",'<BR/>');
        b = b+1;
    }
    x = x+1;
}
document.write("numeros multiplos de 2:",a,'<BR/>');
document.write("numeros multiplos de 3:",b,'<BR/>');
    

