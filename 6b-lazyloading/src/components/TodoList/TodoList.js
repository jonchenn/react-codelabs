import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import Clock from '../Clock/Clock';

const TodoList = ({ todos, addTodo, removeTodo }) => {
  let input;

  return (
    <div id="list-container">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodo(input.value)
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
                removeTodo(item.text)}
              }>X</span>
            </li>
          )
        })}
      </ul>
    </div>
    
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoList;
