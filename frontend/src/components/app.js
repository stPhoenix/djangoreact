import React from 'react';
import logo from '../logo.svg';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import {Nav, NavItem, NavLink} from 'reactstrap';


export const App = (props) => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
            <Nav pills>
                <NavItem><NavLink tag={Link} to="/" active>Home</NavLink></NavItem>
                <NavItem><NavLink tag={Link} to="/articles">Articles</NavLink></NavItem>
                <NavItem><NavLink tag={Link} to="/auth">Auth</NavLink></NavItem>
            </Nav>
        </header>
        <main>
            <Switch>
                <Route exact path="/" component={props.home} />
                <Route exact path="/articles" component={props.articles} />
                <Route exact path="/articles/:id" component={props.article} />
                <Route exact path="/auth" component={props.auth} />
            </Switch>
        </main>
      </div>
    );
  }
