import { useState } from 'react';

export function replaceCamelCaseWithSpaces(colourName) {
  // regular expression
  return colourName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColour, setButtonColour] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);

  const newButtonColour =
    buttonColour === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div className='App'>
      <button
        style={{
          backgroundColor: disabled ? 'grey' : buttonColour,
          color: 'white',
        }}
        onClick={() => setButtonColour(newButtonColour)}
        disabled={disabled}
      >
        Change to {replaceCamelCaseWithSpaces(newButtonColour)}
      </button>
      <br />
      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
