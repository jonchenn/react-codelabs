import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul id="top-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">Todo List</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/list" component={TodoList} />
        </div>
      </Router>
    </div>
  );
}

export default App;
