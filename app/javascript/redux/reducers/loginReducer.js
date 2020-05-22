const authenticate = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        loggedIn: true,
        user: action.user
      }
    case 'LOGIN_FAILURE':
      return {
        loggedIn: false,
        error: action.error
      }
    default:
      return {}
  }
}

export default authenticate
