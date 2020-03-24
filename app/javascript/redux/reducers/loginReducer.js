const authenticate = (state = {}, action) => {
    switch(action.type) {
        case 'LOGIN_REQUEST':
            return {
                loggingIn: true,
                user: action.user
            }
        case 'LOGIN_SUCCESS':
            return {
                loggedIn: true,
                user: action.user
            }
        case 'LOGIN_FAILURE':
            return {}
        default:
            return {}
    }
}

export default authenticate
