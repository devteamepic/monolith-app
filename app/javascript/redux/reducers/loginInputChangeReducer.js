const initialState = {
    email: '',
    password: ''
}

const inputChange = (state = initialState, action) => {
    switch(action.type) {
        case 'EMAIL_CHANGE':
            return {
                ...state,
                email: action.payload
            }
        case 'PASSWORD_CHANGE':
            return {
                ...state,
                password: action.payload
            }
        default:
            return initialState
    }
}

export default inputChange
