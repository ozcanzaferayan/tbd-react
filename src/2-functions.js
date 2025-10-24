import React from 'react';
import './style.css';

export default function App() {
  function sayHello(name) {
    return 'Hello ' + name;
  }

  return (
    <div>
      <h1>{sayHello('Zafer')}</h1>
    </div>
  );
}
