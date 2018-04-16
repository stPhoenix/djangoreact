import React from 'react';
import logo from '../logo.svg';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';


export const App = (props) => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="articles/">Articles</Link>
                <Link to="auth/">Auth</Link>
            </nav>
        </header>
        <main>
            <Switch>
                <Route exact path="/" component={props.home} />
                <Route exact path="/articles/" component={props.articles} />
                <Route exact path="/articles/:id" component={props.article} />
                <Route exact path="/auth/" component={props.auth} />
            </Switch>
        </main>
      </div>
    );
  }
