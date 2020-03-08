import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [ roomCode, setRoomCode ] = useState(0);

  useEffect(() => {
    fetch('/room').then(res => res.json()).then(data => {
      setRoomCode(data.room_code);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Here is your room code {roomCode}</p>
      </header>
    </div>
  );
}

export default App;
