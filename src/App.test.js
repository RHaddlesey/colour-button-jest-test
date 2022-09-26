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

test('initial conditions', () => {
  render(<App />);
  //  check the button starts enabled and
  const colourButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colourButton).toBeEnabled();

  // check that the checkbow starts unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {
    id: 'disable-button-checkbox',
  });
  const colourButton = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(checkbox);
  expect(colourButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colourButton).toBeEnabled();
});
