import { createStore, combineReducers } from 'redux'
import { todos } from './reducers'

const rootReducer = combineReducers({
  todos
})

export default createStore(rootReducer)
