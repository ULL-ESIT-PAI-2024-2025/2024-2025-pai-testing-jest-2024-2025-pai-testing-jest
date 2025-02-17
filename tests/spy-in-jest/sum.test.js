const  sumModule = require('./sum');

test('sum should be called correctly', () => {
  const spy = jest.spyOn(sumModule, 'sum');

  sumModule.sum(2, 3);
  sumModule.sum(5, 7);

  expect(spy).toHaveBeenCalledTimes(2);
  expect(spy).toHaveBeenCalledWith(2, 3);
  expect(spy).toHaveBeenCalledWith(5, 7);
  expect(sumModule.sum(3, 6)).toBe(9);

  spy.mockRestore();
});
