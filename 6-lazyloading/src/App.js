import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
//  import TodoList from './TodoList';
import './App.css';
const TodoList = React.lazy(() => import('./TodoList'));

const useTodos = () => {
  // State Hook and set default todos = [].
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {
        id: todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text
      }
    ]);
  };

  const removeTodo = text => {
    setTodos(todos.filter(todo => todo.text !== text));
  };

  return {
    todos,
    addTodo,
    removeTodo
  };
};


function WaitingComponent(props) {
  return todolist => (
    <Suspense fallback={<div>Loading...</div>}>
      <TodoList {...props}/>
    </Suspense>
  );
}

function App() {
  const props = useTodos();

  return (
    <div className="App">
      <Router>
        <div>
          <div>
            <ul id="top-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/list">Todo List</Link>
              </li>
            </ul>
          </div>

          <div class="fakeBannerAd"> </div>

          <Route exact path="/" component={Home} />
          <Route
            path="/list"
            component={WaitingComponent(props)}
          />
        </div>
      </Router>
    </div>
  );
}


export default App;
