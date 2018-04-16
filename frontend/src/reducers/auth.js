export const auth = (state={isAuthenticated:false}, action) => {
    switch(action.type) {
        case "LOGIN":
            return {isAuthenticated:true, token:action.token};
        case "LOGOUT":
        default:
            return {isAuthenticated:false};
    }
}