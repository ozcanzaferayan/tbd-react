import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [sayi, setSayi] = useState(4);

  const handleClick = () => {
    setSayi(42);
    setSayi(43);
    setSayi(44);
    console.log('Çalıştı', sayi);
  };

  return (
    <div>
      <h1>{sayi}</h1>
      <button onClick={handleClick}>Tıkla</button>
    </div>
  );
}
