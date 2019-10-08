import React, { useReducer } from 'react';
import TodoItem from './TodoItem'
import { todos, reducer } from '../reducers/reducer';

const MARK_TODO = 'MARK_TODO';

const initialState = todos;

export const TodoList = (props) => {
  const [todoItems, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="todo-items">
      {
        todoItems.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))
      }
    </div>
  )
}
