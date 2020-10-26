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

 var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 console.log('Los meses numero 5 y 11 son respectivamente (sin considerar 0)', meses[4], 'y', meses[10]);

 // b)

meses.sort();
console.log('Los meses ordenados alfabeticamente son', meses);

 // c)

 meses.push('Elemento Posterior');
 meses.unshift('Elemento Anterior');
 console.log('El arreglo con los elemntos agregados es', meses);

 // d)

 meses.pop();
 meses.shift();
 console.log('El arreglo con los elemntos sustraidos es', meses);

 // e)

 meses.reverse();
 console.log('El arreglo con los meses invertidos es', meses);

 // f)

 var cadena = meses.join('-');
 console.log('El string es', cadena);

 // g)

 var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 meses.splice(0, 4);
 meses.splice(7, 7);
 mesescopia = meses;
 console.log('El arreglo resultante es', mesescopia);

