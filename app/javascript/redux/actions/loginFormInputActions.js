export function emailChange(email) {
    return {
        type: 'EMAIL_CHANGE',
        payload: email
    }
}

export function passwordChange(password) {
    return{
        type: 'PASSWORD_CHANGE',
        payload: password
    }
}
