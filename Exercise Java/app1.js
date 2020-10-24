/* Variables y Operadores
a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).
 */


// Vables y operadores

// a)

var x = 1;
var y = 2;
var z = x + y; 
console.log('El numero resultante de sumar', x ,'+', y ,'es', z );

// b)

var nombre = 'Emiliano';
var apellido = 'Jaime';
var nombre_completo = nombre + apellido;

console.log('El resultante de sumar', nombre ,'+', apellido ,'es', nombre_completo );

// c)

var ocupacion = 'carpintero'
var estado_civil = 'soltero'
var longitud = (ocupacion.length + estado_civil.length)

console.log('La longitud de caracteres de', ocupacion ,'+', estado_civil ,'es', longitud );