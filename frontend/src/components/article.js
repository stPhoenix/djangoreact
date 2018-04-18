import React from 'react';


export const Article = ({id, text, title, owner, deleteArticle, username=null}) => {
    return(<div><p>Title {title}</p>
                <p>ID {id}</p>
                <p>Owner {owner}</p>
                <p>{text}</p>
                {owner === username ? <button onClick={(e) => deleteArticle(id)} value="Delete">Delete</button>
                                    : null}
        </div>);
}