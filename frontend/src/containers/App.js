import React, {Component} from 'react';
import {App} from '../components/app';
import ArticlesContainer from './Articles';
import {Home} from '../components/home';
import ArticleContainer from './Article';

class AppContainer extends Component{
    render(){
        return(
        <App articles={ArticlesContainer} home={Home} article={ArticleContainer} />
        );
    }
}

export default AppContainer;