/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Adrián García Rodríguez
 * @since Feb 08 2025
 * @desc Calculator:
 *       This module provides a simple calculator function that performs basic
 *       arithmetic operations: addition, subtraction, multiplication, and
 *       division.
 *
*/

'use strict';

/**
 * Performs a basic arithmetic operation between two numbers.
 *
 * @param {string} operation - The arithmetic operation to perform.
 * @param {number} firstOperand - The first number in the operation.
 * @param {number} secondOperand - The second number in the operation.
 * @throws {Error} Throws an error if operands are not numbers or if an invalid
 *                 operation is provided.
 * @throws {Error} Throws an error if attempting to divide by zero.
 * @returns {number} The result of the arithmetic operation.
*/
function calculator(operation, firstOperand, secondOperand) {
  if (typeof firstOperand !== 'number' || typeof secondOperand !== 'number') {
    throw new Error('Operands must be numbers');
  }

  switch (operation) {
    case 'sum':
      return firstOperand + secondOperand;
    case 'subtract':
      return firstOperand - secondOperand;
    case 'multiply':
      return firstOperand * secondOperand;
    case 'divide':
      if (secondOperand === 0) throw new Error('Cannot divide by zero');
      return firstOperand / secondOperand;
    default:
      throw new Error('Invalid operation');
  }
}

module.exports = calculator;
