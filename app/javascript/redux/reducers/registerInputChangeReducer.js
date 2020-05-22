const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  matchingPassword: '',
}

const registerInputChange = (state = initialState, action) => {
  switch(action.type) {
    case 'EMAIL_CHANGE':
      return {
        ...state,
        email: action.payload
      }
    case 'FIRST_NAME_CHANGE':
      return {
        ...state,
        firstName: action.payload
      }
    case 'LAST_NAME_CHANGE':
      return {
        ...state,
        lastName: action.payload
      }
    case 'PASSWORD_CHANGE':
      return {
        ...state,
        password: action.payload
      }
    case 'MATCHING_PASSWORD_CHANGE':
      return {
        ...state,
        matchingPassword: action.payload
      }
    default:
      return state
  }
}

export default registerInputChange
