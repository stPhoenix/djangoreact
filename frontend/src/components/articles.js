import React from 'react';

export const Articles = ({articles}) => {
    return (
        <div>
        <ul>
            {articles.length > 0 ? 
            articles.map( article => {
                return (<li key={article.id}>
                    Title: {article.title}
                    Author: {article.author}
                    Text: {article.text}
                    Date: {article.pub_date}
                </li>
            ); }):
            <p>No articles to show</p>}
        </ul>
        </div>
    );
}