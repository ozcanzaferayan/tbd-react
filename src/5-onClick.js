import React from 'react';
import './style.css';

export default function App() {
  // Arrow func
  const handleClick = () => {
    console.log('Merhaba');
  };

  return (
    <div>
      <button onClick={handleClick}>Tıkla</button>
    </div>
  );
}
