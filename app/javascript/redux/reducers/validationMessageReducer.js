const validationErrorMessage = (state = [], action) => {
  switch(action.type) {
    case 'EMAIL_ERROR':
      return {
        ...state,
        emailError: 'Provide a valid email.'
      }
    case 'PASSWORD_ERROR':
      return {
        ...state,
        passwordError: 'Password must contain at least 6 characters.'
      }
    case 'MATCH_PASSWORD_ERROR':
      return {
        ...state,
        matchPasswordError: 'Passwords do not match.'
      }
    case 'REMOVE_ERROR_MESSAGE':
      let newState = state
      delete newState[action.payload]
      return {
        ...newState
      }
    case 'LOGIN_ERROR':
      return {
        loginError: 'Login or password is incorrect.'
      }
    default:
      return state
  }
}

export default validationErrorMessage
