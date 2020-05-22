export default function(state = [], action) {
  switch(action.type) {
    case 'NEW_FILE':
      return action.payload
    case 'NEW_FILE_ARRAY':
      return action.payload
    case 'REMOVE_FILE':
      const index = state.indexOf(action.payload)
      let newArray = [...state]
      newArray.splice(index, 1)
      return newArray
    default:
      return state
  }
}
