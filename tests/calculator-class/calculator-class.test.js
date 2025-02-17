const Calculator = require('./calculator-class');

describe('Calculator Class', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });
  
  describe('Adding numbers', () => {
    test('adding two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adding two negative numbers', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('adding one positive and one negative numbers', () => {
      expect(calculator.add(5, -2)).toBe(3);
    });
  });

  describe('Subtracting numbers', () => {
    test('subtracting two positive numbers', () => {
      expect(calculator.subtract(5, 8)).toBe(-3);
    });

    test('subtracting two negative numbers', () => {
      expect(calculator.subtract(-5, -10)).toBe(5);
    });

    test('subtracting one positive and one negative numbers', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });
  });

  describe('Tracking add method', () => {
    test('should call add() multiple times within callAddMultipleTimes()', () => {
      const addSpy = jest.spyOn(calculator, 'add');
  
      calculator.callAddMultipleTimes(3);
  
      expect(addSpy).toHaveBeenCalledTimes(3);
      expect(addSpy).toHaveBeenCalledWith(0, 1);
      expect(addSpy).toHaveBeenCalledWith(1, 2);
      expect(addSpy).toHaveBeenCalledWith(2, 3);
  
      addSpy.mockRestore();
    });
  });

  describe('Testing calculator history', () => {
    test('should store operations in history', () => {
      calculator.storeInHistory('add', 10);
      calculator.storeInHistory('subtract', 5);
  
      expect(calculator.getHistory()).toEqual([
        { operation: 'add', result: 10 },
        { operation: 'subtract', result: 5 }
      ]);
    });
  });

  describe('Mocking add method', () => {
    test('should mock add method to return a fixed value', () => {
      calculator.add = jest.fn().mockReturnValue(100);
  
      expect(calculator.isAdd100(10, 20)).toBe(true);
      expect(calculator.isAdd100(50, 70)).toBe(true);
  
      calculator.add.mockRestore();
    });
  });
});
