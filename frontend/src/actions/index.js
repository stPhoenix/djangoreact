export const addArticle = article => ({
    type: "ADD_ARTICLE",
    article,
});


export const getArticles = articles => ({
    type: "GET_ARTICLES",
    articles,
});