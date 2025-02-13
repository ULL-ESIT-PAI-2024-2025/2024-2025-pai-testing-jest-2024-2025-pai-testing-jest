/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Rubén Díaz Marrero
 * @since 03 Feb 2025
 * @desc Let n be any strictly positive natural number. Consider the following process. 
 * If n is an even number, we divide it by two. Otherwise, we multiply it by 3 and add 1 to it. 
 * When we reach 1, we stop. For instance, starting with 3, we obtain the sequence 3, ‍ 10, ‍ 5, ‍ 16, ‍ 8, ‍ 4, ‍ 2, ‍ 1 . 
 * Since 1937 it is conjectured that this process ends for any initial n, although nobody has been able to prove it. 
 * @see {@link https://jutge.org/problems/P80660}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

let readlineSync = require('../node_modules/readline-sync/');



/**
 * @description Compute the number of iterations of the Collatz sequence
 * @param {number} number - The number to compute the Collatz sequence
 * @returns {number} - The number of iterations of the Collatz sequence
 */
function SequenceOfCollatz(number) {
  let counter = 0;
  while (number > 1) {
    if (number % 2 == 0) {
      number /= 2;
    } else {
      number = number * 3 + 1;
    }
    counter++;
  }
  return counter;
}


function main() {
  while (true) {
      let number = +readlineSync.question("Introduce un número: ");
      if (Number.isNaN(number)) {
          break;
      }
      console.log(SequenceOfCollatz(number));
  }
}

if (require.main === module) {
  main();
}