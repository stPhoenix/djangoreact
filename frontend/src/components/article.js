import React from 'react';


export const Article = ({id, text, title, author}) => {
    return(<div><p>Title {title}</p>
                <p>ID {id}</p>
                <p>Author {author}</p>
                <p>{text}</p></div>);
}