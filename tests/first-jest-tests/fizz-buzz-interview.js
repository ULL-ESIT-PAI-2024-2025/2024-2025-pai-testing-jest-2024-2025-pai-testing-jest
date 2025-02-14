/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Adrián García Rodríguez
 * @since Feb 08 2025
 * @desc FizzBuzz:
 *       This module implements the FizzBuzz game, which replaces numbers
 *       divisible by 3 with "fizz", numbers divisible by 5 with "buzz", and
 *       numbers divisible by both with "fizzbuzz".
 *
*/

'use strict';

/**
 * Transforms a sequence of numbers based on the FizzBuzz rules.
 *
 * - Numbers divisible by 3 are replaced with "fizz".
 * - Numbers divisible by 5 are replaced with "buzz".
 * - Numbers divisible by both 3 and 5 are replaced with "fizzbuzz".
 * - Other numbers remain unchanged.
 *
 * @param {number[]} numericSequence - An array of numbers to process.
 * @returns {string} A string representation of the transformed sequence, with
 *                   values separated by commas.
*/
function fizzBuzz(numericSequence) {
  let resultSequence = [];
  for (const number of numericSequence) {
    if (number % 15 === 0) {
      resultSequence.push('fizzbuzz');
    } else if (number % 3 === 0) {
      resultSequence.push('fizz');
    } else if (number % 5 === 0) {
      resultSequence.push('buzz');
    } else {
      resultSequence.push(number);
    }
  }
  return resultSequence.join(', ');
}

module.exports = fizzBuzz;