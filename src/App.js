import React from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import  Routes  from './app/routes'
import Header from './app/components/Header/Header';
import TechnologiesWeUse from './app/components/TechnologiesWeUse/TechnologiesWeUse';
import OurServices from './app/components/OurServices/OurServices'

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Routes />
          <TechnologiesWeUse />
          <OurServices />
      </div>
    </Router>
  );
}

export default App;
