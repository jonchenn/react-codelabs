import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
//  import TodoList from './TodoList';
import IntersectionObserver from './components/IntersectionObserver/IntersectionObserver';
import ModuleLoader from './components/ModuleLoader/ModuleLoader';
import './App.css';
const TodoList = React.lazy(() => import('./components/TodoList/TodoList'));

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

  props.continueWatching = false;

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
              <li>
                <Link to="/time">Current Time</Link>
              </li>
            </ul>
          </div>
          <Route exact path="/" component={Home} />
          <Route
            path="/list"
            component={WaitingComponent(props)}
          />
          
          <Route path="/time" render={(routeProps) => (
              <div>
                <div className="fakeBannerAd"></div>
                <IntersectionObserver {...props} onIntersection={() => console.log('Loading component...')}>
                  <ModuleLoader 
                    placeholder={<div>Loading...</div>}
                    component={() => import('./components/Clock/Clock')}
                    htmlTag="Clock"
                    {...props}
                  />
                </IntersectionObserver>
              </div>
            )}
          />
        </div>
      </Router>
    </div>
  );
}


export default App;
