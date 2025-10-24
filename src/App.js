import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) {
    return 'Yükleniyor...';
  }

  return (
    <div>
      <h3>Hello {user?.name}</h3>
    </div>
  );
}
