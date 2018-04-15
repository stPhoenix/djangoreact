import React, {Component} from 'react';
import {App} from '../components/app';
import ArticlesContainer from './Articles'


class AppContainer extends Component{
    render(){
        return(
        <App><ArticlesContainer/></App>
        );
    }
}

export default AppContainer;