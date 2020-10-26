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

var name = 'Emiliano';
var lastname = 'Jaime';
var full_name = name + lastname;

console.log('El resultante de sumar', name ,'+', lastname ,'es', full_name );

// c)

var ocupation = 'carpintero'
var civil_state = 'soltero'
var totallength = (ocupation.length + civil_state.length)

console.log('La longitud de caracteres de', ocupation ,'+', civil_state ,'es', totallength );


console.log('Fin Ejercicio 1 , comienzo Ejercicio 2 --------------------------------------');