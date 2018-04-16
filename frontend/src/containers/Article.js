import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Article} from '../components/article';


class ArticleContainer extends Component{
    render(){
        const id = this.props.match.params.id;
        console.log(id)
        const articles = this.props.articles;
        console.log(articles);
        return (
                <div>
                {articles.map(article => {
                    return(article.id == id ? <Article key={id} {...article}/>
                                      : console.log(`not found id ${article.id}`)
                           );
                })}
            </div>
        );
    }
}
                    


const mapStateToProps = (state) => {
    return {articles: state.articles};
}

export default connect(mapStateToProps)(ArticleContainer);