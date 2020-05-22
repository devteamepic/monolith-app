const passwordValidate = (password) => {
  return password.length < 6
}

const matchPasswords = (password, matchingPassword) => {
  return password !== matchingPassword
}

const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return !re.test(String(email).toLowerCase())
}

/**
 * The only function that returns only boolean.
 * It's because it does not create errors on login and register
 * @param { string } name Name.
 * @param { string } surname Surname.
 */
const validateNames = (name, surname) => {
     return name && surname
}

export const validator = {
    passwordValidate,
    matchPasswords,
    validateEmail,
    validateNames
}
