import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelCaseWithSpaces } from './App';

test('button starts MediumVioletRed', () => {
  render(<App />);
  const colourButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  expect(colourButton).toHaveStyle({ background: 'MediumVioletRed' });
  fireEvent.click(colourButton);
  expect(colourButton).toHaveStyle({ background: 'MidnightBlue' });
  expect(colourButton).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);
  //  check the button starts enabled and
  const colourButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
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
  const colourButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // disable button
  fireEvent.click(checkbox);
  expect(colourButton).toBeDisabled();

  // enable button
  fireEvent.click(checkbox);
  expect(colourButton).toBeEnabled();
});

test('disable button should turn grey and reverts back to MediumVioletRed when enabled', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {
    id: 'disable-button-checkbox',
  });
  const colourButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // disable button
  fireEvent.click(checkbox);
  expect(colourButton).toHaveStyle('background-color: grey');

  // enable button
  fireEvent.click(checkbox);
  expect(colourButton).toHaveStyle('background-color: MediumVioletRed');
});

test('disable button should turn grey and reverts back to MidnightBlue when enabled', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {
    id: 'disable-button-checkbox',
  });
  const colourButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // make button MidnightBlue
  fireEvent.click(colourButton);

  // disable button
  fireEvent.click(checkbox);
  expect(colourButton).toHaveStyle('background-color: grey');

  // enable button
  fireEvent.click(checkbox);
  expect(colourButton).toHaveStyle('background-color: MidnightBlue');
});

// unit test
describe('spaces before camelCase capital letters', () => {
  test('works for no inner capital letter ~ MediumVioletRed', () => {
    expect(replaceCamelCaseWithSpaces('Red')).toBe('Red');
  });
  test('works for one inner captial capital letter ~ darkRed', () => {
    expect(replaceCamelCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('works for multi capitals ~ deepDarkMediumVioletRed', () => {
    expect(replaceCamelCaseWithSpaces('MediumVioletRed')).toBe(
      'Medium Violet Red'
    );
  });
});
