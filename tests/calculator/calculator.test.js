const calculator = require('./calculator');

describe('Calculator function tests', () => {
  test('Adds 2 + 3 correctly', () => {
    expect(calculator('sum', 2, 3)).toBe(5);
  });

  test('Subtracts 10 - 4 correctly', () => {
    expect(calculator('subtract', 10, 4)).toBe(6);
  });

  test('Multiplies 3 * 3 correctly', () => {
    expect(calculator('multiply', 3, 3)).toBe(9);
  });

  test('Divides 10 / 2 correctly', () => {
    expect(calculator('divide', 10, 2)).toBe(5);
  });

  test('Result of multiplication is greater than 8', () => {
    expect(calculator('multiply', 3, 3)).toBeGreaterThan(8);
  });

  test('Result of multiplication is greater than or equal to 9', () => {
    expect(calculator('multiply', 3, 3)).toBeGreaterThanOrEqual(9);
  });

  test('Result of multiplication is less than 10', () => {
    expect(calculator('multiply', 3, 3)).toBeLessThan(10);
  });

  test('Result of multiplication is less than or equal to 9', () => {
    expect(calculator('multiply', 3, 3)).toBeLessThanOrEqual(9);
  });

  test('Division by zero throws an error', () => {
    expect(() => calculator('divide', 10, 0)).toThrow('Cannot divide by zero');
  });

  test('Invalid operation throws an error', () => {
    expect(() => calculator('modulus', 5, 2)).toThrow('Invalid operation');
  });

  test('Non-numeric operand throws an error', () => {
    expect(() => calculator('sum', '5', 2)).toThrow('Operands must be numbers');
  });
});