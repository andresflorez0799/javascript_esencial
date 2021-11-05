'use strict';

/**
 * lo siguiente marcara error debido a que el modo estricto de javascript 
 * nos obliga a respetar en este caso colocar la declaracion de la variable con 
 * la palabra var, let o const
 */
//variable_sin_declarar = 'Hola desde javascript';
//console.log(variable_sin_declarar);

/**
 * Esto si estaria permitido con el modo estricto
 */
let variable_con_let = "mi variable let";
var variable_con_var = "mi variable var";
const constante_con_const = "mi constante";

/**
 * Imprimir por consola los contenidos
 */
console.log(variable_con_let);
console.log(variable_con_var);
console.log(constante_con_const);

console.log("Esto es un cambios desde el editor de github.com");
