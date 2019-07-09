import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: ['apple', 'book'],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (!this.state.value) return;

    this.state.items.push(this.state.value);
    this.setState({items: this.state.items, value: ''});
    event.preventDefault();
  }

  removeItem(value) {
    this.setState({
        items: this.state.items.filter(el => el !== value)
    })
  }

  createList = () => {
    let renderedList = [];
    this.state.items.forEach((item, index) => {
      renderedList.push(<li key={"item-" + index} className="item">
        {item}
        <span className="close-btn" onClick={() => {this.removeItem(item)}}>X</span>
      </li>)
    })
    return renderedList;
  }

  render() {
    return (
      <div id="list-container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Add" />
        </form>

        <ul className="item-list">
          {this.createList()}
        </ul>
      </div>
    );
  }
}

export default TodoList;
