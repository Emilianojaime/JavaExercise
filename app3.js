/*Arrays
a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
e) Invertir el orden del array (utilizar reverse)
f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

 */

 // a)

 var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 console.log('Los meses numero 5 y 11 son respectivamente (sin considerar 0)', months[4], 'y', months[10]);

 // b)

months.sort();
console.log('Los meses ordenados alfabeticamente son', months);

 // c)

 months.push('Elemento Posterior');
 months.unshift('Elemento Anterior');
 console.log('El arreglo con los elemntos agregados es', months);

 // d)

 months.pop();
 months.shift();
 console.log('El arreglo con los elemntos sustraidos es', months);

 // e)
 
 var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 months.reverse();
 console.log('El arreglo con los meses invertidos es', months);

 // f)

 var chain = months.join('-');
 console.log('El string es', chain);

 // g)

 var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 monthscopy = months.slice(4, 11);
 console.log('El arreglo resultante es', monthscopy);

 console.log('Fin Ejercicio 3 , comienzo Ejercicio 4 --------------------------------------');