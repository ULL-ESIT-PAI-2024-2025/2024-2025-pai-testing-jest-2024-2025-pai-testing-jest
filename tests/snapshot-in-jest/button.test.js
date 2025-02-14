const createButton = require('./button');

test('createButton should return a button with correct label', () => {
  const button = createButton('Click Me');
  expect(button.outerHTML).toMatchSnapshot();
});