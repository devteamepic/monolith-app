const emailChange = (email) => {
  return {
    type: 'EMAIL_CHANGE',
    payload: email
  }
}

const passwordChange = (password) => {
  return{
    type: 'PASSWORD_CHANGE',
    payload: password
  }
}

export const loginFormInputActions = {
  emailChange, passwordChange
}
