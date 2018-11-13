import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Router  from './routes'
import Menu from './menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />    
        </header>
        <Router />
      </div>
    );
  }
}

export default App;
