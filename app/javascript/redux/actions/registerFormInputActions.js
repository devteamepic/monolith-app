const emailChange = (email) => {
  return {
    type: 'EMAIL_CHANGE',
    payload: email
  }
}

const firstNameChange = (firstName) => {
  return {
    type: 'FIRST_NAME_CHANGE',
    payload: firstName
  }
}

const lastNameChange = (lastName) => {
  return {
    type: 'LAST_NAME_CHANGE',
    payload: lastName
  }
}

const passwordChange = (password) => {
  return {
    type: 'PASSWORD_CHANGE',
    payload: password
  }
}

const matchingPasswordChange = (matchingPasswordChange) => {
  return {
    type: 'MATCHING_PASSWORD_CHANGE',
    payload: matchingPasswordChange
  }
}

export const registerFormInputActions = {
  emailChange,
  firstNameChange,
  lastNameChange,
  passwordChange,
  matchingPasswordChange
}
