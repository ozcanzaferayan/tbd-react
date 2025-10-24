import React from 'react';
import './style.css';

export default function App() {
  // Lambda function
  // Arrow function
  const topla = (a, b) => {
    console.log(a, b);
    return a + b;
  };

  return (
    <div>
      <h1>{topla(2, 4)}</h1>
    </div>
  );
}
