export function emailChange(email) {
    return {
        type: 'EMAIL_CHANGE',
        payload: email
    }
}

export function firstNameChange(firstName) {
    return {
        type: 'FIRST_NAME_CHANGE',
        payload: firstName
    }
}

export function lastNameChange(lastName) {
    return {
        type: 'LAST_NAME_CHANGE',
        payload: lastName
    }
}

export function passwordChange(password) {
    return {
        type: 'PASSWORD_CHANGE',
        payload: password
    }
}

export function matchingPasswordChange(matchingPasswordChange) {
    return {
        type: 'MATCHING_PASSWORD_CHANGE',
        payload: matchingPasswordChange
    }
}
