const emailErrorMessage = () => {
  return {
    type: 'EMAIL_ERROR'
  }
}

const passwordErrorMessage = () => {
  return {
    type: 'PASSWORD_ERROR'
  }
}

const matchPasswordErrorMessage = () => {
  return {
    type: 'MATCH_PASSWORD_ERROR'
  }
}

const removeErrorMessage = (key) => {
  return {
    type: 'REMOVE_ERROR_MESSAGE',
    payload: key
  }
}

const loginErrorMessage = () => {
  return {
    type: 'LOGIN_ERROR'
  }
}

export const validationErrorActions = {
  emailErrorMessage,
  passwordErrorMessage,
  matchPasswordErrorMessage,
  removeErrorMessage,
  loginErrorMessage
}
