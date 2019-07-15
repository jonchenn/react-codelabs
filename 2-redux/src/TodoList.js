import React from 'react';
import { connect } from 'react-redux'
import './TodoList.css';
import { addTodo, removeTodo } from './store/actions'

const mapStateToProps = (state) => ({
  todos: state.todos
})

const TodoList = ({ dispatch, todos }) => {
  let input

  return (
    <div id="list-container">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => (input = node)} />
        <input type="submit" value="Add" />
      </form>

      <ul className="item-list">
        {todos.map((item, index) => {
          return (
            <li key={"item-" + index} className="item">
              {item.text}
              <span className="close-btn" onClick={() => {
                dispatch(removeTodo(item.text))}
              }>X</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default connect(mapStateToProps)(TodoList)
