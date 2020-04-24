const passwordValidate = (password) => {
    const message = 'Password length should at least be 6 characters long'
    if (password.length < 6) {
        return { status: true, message: message }
    }

    return { status: false, message: '' }
}

const matchPasswords = (password, matchingPassword) => {
    const message = 'Passwords should match'
    if (password !== matchingPassword) return { status: true, message: message }

    return { status: false, message: message }
}

const validateEmail = (email) => {
    const message = 'Please provide a valid email'
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return { status: !re.test(String(email).toLowerCase()), message: message }
}

export const validator = {
    passwordValidate,
    matchPasswords,
    validateEmail
}
