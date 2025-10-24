import React, { useState } from 'react';
import './style.css';

export default function App() {
  const user = {
    id: 42,
    name: 'Zafer',
  };

  return (
    <div>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
    </div>
  );
}
