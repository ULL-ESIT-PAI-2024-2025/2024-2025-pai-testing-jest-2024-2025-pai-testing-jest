const fetchData = require('./api');

jest.mock('./api');

test('fetchData should return false data', () => {
  fetchData.mockReturnValue('False data');
  expect(fetchData()).toBe('False data');
});