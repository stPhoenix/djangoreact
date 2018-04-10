import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  doSmth () {
     axios.get("http://127.0.0.1:8000/articles/")
        .then (res => {
         document.getElementById('result').innerHTML = res.data[0].title;
     })
        .catch(e => {
         console.log(e)
     });
 }
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
        <div id="result">
            <button value="Click me" onClick={this.doSmth}> click me </button>
            <p> <a href="http://127.0.0.1:8000/articles/"> LINK </a> </p>
        </div>
      </div>
    );
  }
}

export default App;
