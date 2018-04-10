import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: 'Initial data',
        };
        this.doSmth = this.doSmth.bind(this);
    }
  doSmth (e, link) {
     axios.get(`http://127.0.0.1:8000/${link}/`)
        .then (res => {
         this.setState({data:JSON.stringify(res.data)});
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
            <p><button value="Articles" onClick={e => this.doSmth(e, 'articles')}> Articles </button>
            <button value="Articles" onClick={e => this.doSmth(e, 'articles/2')}> Article 2 </button>
            <button value="Articles" onClick={e => this.doSmth(e, 'users')}> Users </button>
            <button value="Articles" onClick={e => this.doSmth(e, 'users/1')}> User 1 </button></p>
            <p> <a href="http://127.0.0.1:8000/articles/"> LINK </a> </p>
        </div>
        <div>{this.state.data}
        </div>
      </div>
    );
  }
}

export default App;
