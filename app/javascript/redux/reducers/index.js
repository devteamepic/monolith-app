import { combineReducers } from 'redux'
import FileReducer from './fileReducer'
import authenticate from './loginReducer'

const rootReducer = combineReducers({
    files: FileReducer,
    authenticate: authenticate
})

export default rootReducer
