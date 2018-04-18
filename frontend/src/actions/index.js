export const addArticle = article => ({
    type: "ADD_ARTICLE",
    article,
});


export const getArticles = articles => ({
    type: "GET_ARTICLES",
    articles,
});

export const deleteArticle = id => ({
    type: "DELETE_ARTICLE",
    id,
});

export const login = (token) => ({
   type: "LOGIN",
   token,
});

export const logout = () => ({
    type: "LOGOUT",
});

export const storeUser = (user) => ({
    type: "STORE_USER",
    user,
});