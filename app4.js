/*If Else
a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”
b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años
*/

// a)

if (Math.random() >= 0.5){
   console.log('Greater than 0.5');
}else{
   console.log('Lower than 0.5') ;
}

// b)

var age = 85; 

if (age < 2){
   console.log('La persona es un Bebe');
} else if ((age >= 2) && (age <= 12)) {
   console.log('La persona es un Nino');
} else if ((age > 12) && (age <= 19)) {
   console.log('La persona es un Adolecente') 
} else if ((age > 19) && (age <= 30)) {
   console.log('La persona es un Joven')
} else if ((age > 30) && (age <= 60)) {
   console.log('La persona es un Adulto')
} else if ((age > 60) && (age <= 75)) {
   console.log('La persona es un Adulto mayor')
} else { 
   console.log('La persona es un Anciano')
}

console.log('Fin Ejercicio 4 , comienzo Ejercicio 5 --------------------------------------');