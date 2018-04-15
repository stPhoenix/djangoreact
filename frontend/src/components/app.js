import React from 'react';
import logo from '../logo.svg';
import './App.css';

export const App = (props) => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
            {props.children}
        </main>
      </div>
    );
  }
