/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Adrián García Rodríguez
 * @since Feb 08 2025
 * @desc Button:
 *       This module provides a function to create a button element with a
 *       given label.
 *
*/

'use strict';

/**
 * Creates a button element with the specified label.
 *
 * @param {string} label - The text to be displayed on the button.
 * @returns {HTMLButtonElement} The created button element.
*/
function createButton(label) {
  const button = document.createElement('button');
  button.textContent = label;
  // button.classList.add("btn-primary");
  return button;
}

module.exports = createButton;