/* Strings
a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

// a)

var word = 'intoxicacion';
console.log('El texto es', word,'y su transformacion es', word.toUpperCase() );

// b)

var word2 = 'desintoxicacion';
var sub_word2 = word2.substring(0,5);
console.log('El texto es', word2,'y su subcadena (primeros 5 caracteres) es', sub_word2 );

// c)

var word3 = 'metropolis';
var sub_word3 = word3.substring (7);
console.log('El texto es', word3,'y su subcadena (ultimos 3 caracteres) es', sub_word3 );

// d)

var word4 = 'sala de estar';
var sub_word4 = ((word4.toUpperCase()).substring(0, 1) + (word4.toLowerCase()).substring(1));
console.log('El texto resultante del ejercicio es', sub_word4 );

// e)

var word5 = 'sala de espera';
var index_word5 = word5.indexOf(' ', 0);
console.log('La posicion del primer espacio en blanco de', word5, 'es', index_word5 );

// f) NOTA: personalmente habria puesto variables intermedias para que la sentencia no quede tan larga pero supuse que la "idea" del ejercicio era hacerlo asi.

var word6 = 'reacondicionador de bibliotecas'
var sub_word6 = ((word6.toUpperCase()).substring(0, 1) + (word6.toLowerCase()).substring(1, word6.indexOf('bibliotecas', 0))) + ( (word6.toUpperCase()).substring((word6.indexOf('bibliotecas', 0)), ((word6.indexOf('bibliotecas', 0) + 1)))) + (word6.toLowerCase()).substring((word6.indexOf('bibliotecas', 0) + 1))
console.log('La nueva cadena es', sub_word6 )

console.log('Fin Ejercicio 2 , comienzo Ejercicio 3 --------------------------------------');