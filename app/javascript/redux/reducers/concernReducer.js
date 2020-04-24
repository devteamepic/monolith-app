const initialState = {
    isConcerned: false
}
const concern = (state = initialState, action) => {
    switch(action.type) {
        case 'CONCERN_TRIGGER':
            return {
                isConcerned: !state.isConcerned
            }
        default:
            return state
    }
}

export default concern
