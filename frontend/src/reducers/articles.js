export const articles = (state = [], action) => {
    switch (action.type){
        case "ADD_ARTICLE":
            return [...state, action.article];
        case "GET_ARTICLES":
            return [...action.articles]
        default:
            return state;
    }
}