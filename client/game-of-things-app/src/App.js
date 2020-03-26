import React, { useState, useEffect } from 'react';
import Home from './pages/Home.js'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [ roomCode, setRoomCode ] = useState(0);

  useEffect(() => {
    fetch('/room').then(res => res.json()).then(data => {
      setRoomCode(data.room_code);
    });
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home roomCode={roomCode}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
