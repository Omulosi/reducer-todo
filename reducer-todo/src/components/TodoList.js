import React, { useReducer } from 'react';
import TodoItem from './TodoItem'
import { todos, reducer } from '../reducers/reducer';
import { AddForm } from './AddForm';

const MARK_TODO = 'MARK_TODO';
const CLEAR = 'CLEAR';
const ADD_TODO = 'ADD_TODO';

const initialState = {todos, todo: {name: '', id: null, completed: null}};

export const TodoList = (props) => {
  const [todoItems, dispatch] = useReducer(reducer, initialState);

  const addTodo = (item) => {
    dispatch({type: ADD_TODO, payload: { name: item.name }})
  }

  const markComplete = (id, isComplete) => {
    dispatch({
      type: MARK_TODO,
      payload: { id, isComplete },
    });
  };

  const clearCompleted = (id) => {
    dispatch({
      type: CLEAR,
      payload: { id }
    })
  }

  return (
    <div className="todo-items">
      <AddForm  addTodo={addTodo} todo={todoItems.todo} />
      {
        todoItems.todos.map((item) => (
          <TodoItem 
            key={item.id} 
            item={item} 
            markComplete={markComplete}
            clearCompleted={clearCompleted}
          />
        ))
      }
    </div>
  )
}
