import React from 'react';
import PropTypes from 'prop-types'
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



// class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//
//     // this.state = {
//     //   value: '',
//     //   items: [],
//     // };
//
//     // When state will be updated(in our case, when items will be fetched),
//     // we will update local component state and force component to rerender
//     // with new data.
//     this.store.subscribe(() => {
//       this.setState({
//         items: this.store.getState().items,
//       });
//     });
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.removeItem = this.removeItem.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     if (!this.state.value) return;
//
//     this.state.items.push(this.state.value);
//     this.setState({items: this.state.items, value: ''});
//     event.preventDefault();
//   }
//
//   removeItem(value) {
//     this.setState({
//         items: this.state.items.filter(el => el !== value)
//     })
//   }
//
//   render() {
//     return (
//     );
//   }
// }
