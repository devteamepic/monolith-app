const success = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
}

const failure = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    error
  }
}

export const loginActions = {
  success, failure
}
