export default function(state = [], action) {
    console.log(state)
    switch(action.type) {
        case 'NEW_FILE':
            return action.payload
        case 'NEW_FILE_ARRAY':
            return action.payload
        case 'REMOVE_FILE':
            const index = state.indexOf(action.payload)
            console.log(index)
            let newArray = [...state]
            newArray.splice(index, 1)
            return newArray
        default:
            return state
    }
}
