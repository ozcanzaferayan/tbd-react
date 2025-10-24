import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [user, setUser] = useState();

  const handleClick = () => {
    setUser({
      id: 42,
      name: 'Zafer',
    });
  };

  if (user === undefined) {
    return (
      <div>
        <h1>Kullanıcı bulunamadı</h1>
        <button onClick={handleClick}>Kullanıcıyı tanımla</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
    </div>
  );
}
