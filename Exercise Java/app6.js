/* Funciones
a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
c) Crear una función validate integer que reciba un número como parámetro y verdadero si es un número entero.
d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
 */

// a)

var a = 1;
var b = 2;

function suma(a, b){ 
 return c = a + b; 
}

var c = suma(a, b);

console.log('El resultado de sumar', a, '+', b, 'es', c);

// b)

var a = 4;
var b = 3;

function suma2(a, b){ 
 if ( (typeof a) === 'number' && (typeof b) === 'number'){
  return c = a + b;
} else {
  console.log('Uno o mas de los parametros no es un numero');
  return NaN;   
}
}
var f = suma2(a, b);

console.log('El resultado de sumar', a, '+', b, 'es', f);

// c)

a = 77.31;
validate_integer(a);

function validate_integer(a){
    if (Math.trunc(a) === a ){
    console.log('El numero es un Entero')  
    return true
} else {
    console.log('El numero no es un entero');
    return false
}
}

// d)

var a = 4;
var b = 2;

function suma3(a, b){ 
 if ( (typeof a) === 'number' && (typeof b) === 'number'){
    estado1 = validate_integer(a);
    estado2 =  validate_integer(b);
   if (estado1 && estado2){
     return c = a + b;
    }else if (!estado1){
     console.log('El valor', a, 'no es un entero')
     return Math.round(a);
    }else if (!estado2){
     console.log('El valor', b, 'no es un entero')
     return Math.round(b);   
    }

} else {
  console.log('Uno o mas de los parametros no es un numero');
  return NaN;   
}
}
var f = suma3(a, b);

console.log('El resultado de sumar', a, '+', b, 'es', f);

// e)

// Funcion suma "original + la validacion"

a = 1;
b = 14;

function suma6(a, b){ 
    validacion_numeros(a, b)
    return c = a + b; 
   }

function validacion_numeros(a,b) { 
if ( (typeof a) === 'number' && (typeof b) === 'number'){
    return c = a + b;
  } else {
    console.log('Uno o mas de los parametros no es un numero');
    return NaN;   
} 
}

suma6(a,b);

// NOTA: Dado que los ejercicios requerian que trabajemos sobre las funciones del ejercicio anterior
// opte por ir cambiando el nombre de las mismas agregando numeros