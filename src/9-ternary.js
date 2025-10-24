import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Göster/Gizle</button>
      <br />
      {isVisible ? (
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3RncWF3d3U1ejllYmdzaHoxam42ZGg5N2UzMjNpbDF1dmhkMWtubiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vFKqnCdLPNOKc/giphy.gif"
          width="300"
        />
      ) : null}
    </div>
  );
}
