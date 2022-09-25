import { useState } from 'react';

function App() {
  const [buttonColour, setButtonColour] = useState('red');
  const newButtonColour = buttonColour === 'red' ? 'blue' : 'red';

  return (
    <div className='App'>
      <button
        style={{ backgroundColor: buttonColour }}
        onClick={() => setButtonColour(newButtonColour)}
      >
        Change to {newButtonColour}
      </button>
    </div>
  );
}

export default App;
