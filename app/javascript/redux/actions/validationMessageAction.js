export function emailErrorMessage(message) {
    return {
        type: 'EMAIL_ERROR',
        payload: message
    }
}

export function passwordErrorMessage(message) {
    return {
        type: 'PASSWORD_ERROR',
        payload: message
    }
}

export function matchPasswordErrorMessage(message) {
    return {
        type: 'MATCH_PASSWORD_ERROR',
        payload: message
    }
}

export function removeErrorMessage(key) {
    return {
        type: 'REMOVE_ERROR_MESSAGE',
        payload: key
    }
}

export function loginErrorMessage(message) {
    return {
        type: 'LOGIN_ERROR',
        payload: message
    }
}
