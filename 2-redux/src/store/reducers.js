import { combineReducers } from 'redux'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
    case 'REMOVE_TODO':
      return state.filter(todo => todo.text !== action.text)
    default:
      return state
  }
}

export default combineReducers({
  todos,
})
