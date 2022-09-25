import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button starts red', () => {
  render(<App />);
  const colourButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colourButton).toHaveStyle({ background: 'red' });
  fireEvent.click(colourButton);
  expect(colourButton).toHaveStyle({ background: 'blue' });
  expect(colourButton).toHaveTextContent('Change to red');
});
