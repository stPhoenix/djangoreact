import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Article} from '../components/article';
import {deleteArticle} from '../actions';
import axios from 'axios';


class ArticleContainer extends Component{
    constructor(props){
        super(props);
        this.state = {redirect: false};
        this.deleteArticle = this.deleteArticle.bind(this);
    }
    deleteArticle(id){
        axios.delete(`http://127.0.0.1:8000/articles/${id}`, {headers:{AUTHORIZATION:`TOKEN ${this.props.auth.token}`}})
        .then(res => {
                        console.log(res)
                        this.props.deleteArticle(id);
                    })
        .catch(error => (console.error(error)))
    }
    render(){
        const id = this.props.match.params.id;
        const articles = this.props.articles;
        const username = this.props.auth.user.username;
        return (
                <div>
                {articles.map(article => {
                    return(article.id == id ? <Article key={id} {...article} username={username} deleteArticle={this.deleteArticle} redirect={this.state.redirect}/>
                                      : console.log(`not found id ${article.id}`)
                           );
                })}
            </div>
        );
    }
}
                    

const mapDispatchToProps = dispatch => {
    return {deleteArticle: (id) => dispatch(deleteArticle(id))};
};



const mapStateToProps = (state) => {
    return {articles: state.articles,
           auth:state.auth};
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);