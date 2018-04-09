import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
            <form method="POST" action="http://127.0.0.1:8000/rest-auth/login/">
                <p><input type="text" name="username"></input></p>
                <p><input type="text" name="password"></input></p>
                <p><input type="submit" value="Send"></input></p>
            </form>
        </div>
      </div>
    );
  }
}

export default App;
