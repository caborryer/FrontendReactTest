import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes/Routes';
import Navigation from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
