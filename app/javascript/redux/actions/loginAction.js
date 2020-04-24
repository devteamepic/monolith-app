export function request(user) {
    return {
        type: 'LOGIN_REQUEST',
        user
    }
}

export function success(user) {
    return {
        type: 'LOGIN_SUCCESS',
        user
    }
}

export function failure(error) {
    return {
        type: 'LOGIN_FAILURE',
        error
    }
}
