import React, {Component} from 'react';
import axios from 'axios'
import {getArticles} from '../actions'
import {Articles} from '../components/articles'
import {connect} from 'react-redux'

class ArticlesContainer extends Component{
    componentDidMount() {
        const {dispatch} = this.props;
        this.fetchArticles(dispatch);    
    }
    
    fetchArticles = (dispatch) => {
    axios.get("http://127.0.0.1:8000/articles")
        .then(response => {
                            console.log(response.data)
                            dispatch(getArticles(response.data));})
        .catch(error => {
            console.log(error);
        });
    }
    
    render(){
        const {articles} = this.props;
        return(
            <Articles articles={articles}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {articles: state.articles};
}

export default connect(mapStateToProps)(ArticlesContainer);