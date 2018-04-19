import React from 'react';
import {Redirect} from 'react-router-dom'

export const Article = ({id, text, title, owner, deleteArticle, username=null, redirect}) => {
    return(<div>
            <p>Title {title}</p>
                <p>ID {id}</p>
                <p>Owner {owner}</p>
                <p>{text}</p>
                {owner === username ? <button onClick={(e) => deleteArticle(id)}  value="Delete">Delete</button>
                                    : null}
        </div>);
}