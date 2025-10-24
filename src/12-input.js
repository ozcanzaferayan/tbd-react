import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [metin, setMetin] = useState('Hello');

  console.log('Render edildi');

  return (
    <div>
      <input value={metin} onChange={(e) => setMetin(e.target.value)} />
      <h1>{metin}</h1>
    </div>
  );
}
