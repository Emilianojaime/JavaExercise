/* For
a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
 */

 // a)

 var nombre = ['juan', 'pedro', 'pepe', 'laura', 'cecilia'];
 for (var i = 0;i < 5;i++){
   console.log('El nombre en el indice', i,'es', nombre[i]);
 }

 // b)

 var nombre = ['juan', 'pedro', 'pepe', 'laura', 'cecilia'];
 for (var i = 0;i < 5;i++){
    nombre[i] = ((nombre[i].toUpperCase()).substring(0, 1)) + ((nombre[i].substring(1)));
    console.log('El Nuevo string es', nombre[i]);
 }

 // c)

var sentence = ''
var nombre = ['juan', 'pedro', 'pepe', 'laura', 'cecilia'];

 for (var i = 0;i < 5;i++){
    sentence = sentence + nombre[i];
 }
    console.log('La cadena sumada es', sentence);

 // d)
 
 var numeros = [];
 for (var i = 0;i < 10;i++){
    numeros[i] = i;
 }
   console.log('El arreglo Resultante es', numeros);