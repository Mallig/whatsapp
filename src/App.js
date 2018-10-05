import React, { Component } from 'react';
import logo from './logo.svg';
import SignUpForm from './components/SignUpForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SignUpForm/>
        </header>
      </div>
    );
  }
}

export default App;