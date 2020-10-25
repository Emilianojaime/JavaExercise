/* Strings
a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

// a)

var palabra = 'intoxicacion';
console.log('El texto es', palabra,'y su transformacion es', palabra.toUpperCase() );

// b)

var palabra2 = 'desintoxicacion';
var sub_palabra2 = palabra2.substring(0,5);
console.log('El texto es', palabra2,'y su subcadena (primeros 5 caracteres) es', sub_palabra2 );

// c)

var palabra3 = 'metropolis';
var sub_palabra3 = palabra3.substring (7);
console.log('El texto es', palabra3,'y su subcadena (ultimos 3 caracteres) es', sub_palabra3 );

// d)

var palabra4 = 'sala de estar';
var sub_palabra4 = ((palabra4.toUpperCase()).substring(0, 1) + (palabra4.toLowerCase()).substring(1));
console.log('El texto resultante del ejercicio es', sub_palabra4 );

// e)

var palabra5 = 'sala de espera';
var indice_palabra5 = palabra5.indexOf(' ', 0);
console.log('La posicion del primer espacio en blanco de', palabra5, 'es', indice_palabra5 );

// f) NOTA: personalmente habria puesto variables intermedias para que la sentencia no quede tan larga pero supuse que la "idea" del ejercicio era hacerlo asi.

var palabra6 = 'reacondicionador de bibliotecas'
var sub_palabra6 = ((palabra6.toUpperCase()).substring(0, 1) + (palabra6.toLowerCase()).substring(1, palabra6.indexOf('de', 0))) + ( (palabra6.toUpperCase()).substring((palabra6.indexOf('bibliotecas', 0)), ((palabra6.indexOf('bibliotecas', 0) + 1)))) + (palabra6.toLowerCase()).substring((palabra6.indexOf('bibliotecas', 0) + 1))
console.log('La nueva cadena es', sub_palabra6 )