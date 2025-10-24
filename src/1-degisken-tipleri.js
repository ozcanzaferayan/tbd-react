import React from 'react';
import './style.css';

export default function App() {
  const isim = 'Zafer'; // String
  const sayi = 42; // number
  const pi = 3.14; // number
  const isVisible = true; // boolean
  let user; // undefined
  user = { name: 'Zafer' }; // Object
  const student = null; // null

  return (
    <div>
      <h1>{isim}</h1>
      <h1>{sayi}</h1>
      <h1>{pi}</h1>
      <h1>{isVisible}</h1>
      <h1>{user.name}</h1>
    </div>
  );
}
