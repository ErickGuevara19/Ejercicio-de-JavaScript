let nombre
let horas
let preciohoras

alert("Ejercicio para calcular el salario de un empleado por horas trabajadas");
nombre= prompt("Ingrese el nombre del empleado ");
horas= Number(prompt("Ingrese las horas trabajadas en el mes"));
preciohoras= Number (prompt("Ingrese el valor que se le paga por hora"));

sueldo = horas * preciohoras

document.getElementById("nombre").innerHTML= "Su nombre es : " + nombre;
document.getElementById("horas").innerHTML= "Las horas trabajadas es de : " + horas;
document.getElementById("precio").innerHTML= "El precio pagado por horas es de : " + preciohoras;
document.getElementById("sueldo").innerHTML= "El sueldo a cobrar es de : " + sueldo;

alert("El sueldo de"+ nombre)
alert("Es de :" + sueldo )