import { useState } from 'react';

function App() {
  const [buttonColour, setButtonColour] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColour = buttonColour === 'red' ? 'blue' : 'red';

  return (
    <div className='App'>
      <button
        style={{ backgroundColor: buttonColour, color: 'white' }}
        onClick={() => setButtonColour(newButtonColour)}
        disabled={disabled}
      >
        Change to {newButtonColour}
      </button>
      <br />
      <input
        type='checkbox'
        id='enable-button-checkbox'
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
