import React from 'react';
import './App.css';

import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Todo List App</h1>
      </header>

      <div className='main-content'>
        <form  className='todo-input'>
          <input type="text" placeholder="Add a todo item"/>
        </form>

        <TodoList />
      </div>
    </div>
  );
}

export default App;
