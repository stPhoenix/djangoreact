export const articles = (state = [], action) => {
    switch (action.type){
        case "ADD_ARTICLE":
            return [...state, action.article];
        case "GET_ARTICLES":
            return [...action.articles];
        case "DELETE_ARTICLE":
            return state.map(article => {
                return article.id == action.id ? null
                                              : article
            });
        default:
            return state;
    }
}