/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Adrián García Rodríguez
 * @since Feb 08 2025
 * @desc Calculator class:
 *       A simple calculator that provides basic arithmetic operations like
 *       addition and subtraction, and supports operation history tracking. It
 *       allows users to perform multiple additions at once, check if the sum
 *       of two numbers is 100, and store operation results in history.
*/

'use strict';

/**
 * Calculator class for basic arithmetic operations and history tracking.
*/
class Calculator {
  constructor() {
    this.history = [];
  }

  /**
   * Adds two numbers.
   * @param {number} firstNumber - The first number to add.
   * @param {number} secondNumber - The second number to add.
   * @returns {number} The result of adding the two numbers.
  */
  add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }

  /**
   * Subtracts the second number from the first number.
   * @param {number} firstNumber - The number to subtract from.
   * @param {number} secondNumber - The number to subtract.
   * @returns {number} The result of subtracting the second number from the first.
  */
  subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  }

  /**
   * Calls the add method multiple times and stores the results.
   * @param {number} times - The number of times to call the add method.
   * @returns {number[]} An array of results from each add operation.
  */
  callAddMultipleTimes(times) {
    let results = [];
    for (let number = 0; number < times; number++) {
      results.push(this.add(number, number + 1));
    }
    return results;
  }

  /**
   * Checks if the result of adding two numbers equals 100.
   * @param {number} firstNumber - The first number to add.
   * @param {number} secondNumber - The second number to add.
   * @returns {boolean} True if the result of adding the numbers is 100, false
   *                    otherwise.
  */
  isAdd100(firstNumber, secondNumber) {
    if (this.add(firstNumber, secondNumber) === 100) {
      return true;
    }
    return false;
  }

  /**
   * Stores an operation and its result in history.
   * @param {string} operation - The type of operation (e.g., "add", "subtract").
   * @param {number} result - The result of the operation.
  */
  storeInHistory(operation, result) {
    this.history.push({ operation, result });
  }

  /**
   * Retrieves the operation history.
   * @returns {Array} The history of operations, each with the operation type and result.
  */
  getHistory() {
    return this.history;
  }
}

module.exports = Calculator;