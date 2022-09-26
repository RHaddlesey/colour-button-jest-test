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

  // disable button
  fireEvent.click(checkbox);
  expect(colourButton).toBeDisabled();

  // enable button
  fireEvent.click(checkbox);
  expect(colourButton).toBeEnabled();
});

test('disable button should turn grey and reverts back to red when enabled', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {
    id: 'disable-button-checkbox',
  });
  const colourButton = screen.getByRole('button', { name: 'Change to blue' });

  // disable button
  fireEvent.click(checkbox);
  expect(colourButton).toHaveStyle('background-color: grey');

  // enable button
  fireEvent.click(checkbox);
  expect(colourButton).toHaveStyle('background-color: red');
});

test('disable button should turn grey and reverts back to blue when enabled', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {
    id: 'disable-button-checkbox',
  });
  const colourButton = screen.getByRole('button', { name: 'Change to blue' });

  // make button blue
  fireEvent.click(colourButton);

  // disable button
  fireEvent.click(checkbox);
  expect(colourButton).toHaveStyle('background-color: grey');

  // enable button
  fireEvent.click(checkbox);
  expect(colourButton).toHaveStyle('background-color: blue');
});
