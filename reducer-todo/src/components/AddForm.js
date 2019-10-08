import React, { useReducer } from 'react';
import { reducer } from '../reducers/reducer';

const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
const ON_SUBMIT = 'ON_SUBMIT';

export const AddForm = (props) => {

  const [itemName, dispatch] = useReducer(reducer, props.todo);


  const handleSubmit = (e) => {
    e.preventDefault();
    const item = itemName;
    dispatch({type: ON_SUBMIT})
    props.addTodo(item);
  }

  const handleChange = (e) => {
    dispatch({type: ON_INPUT_CHANGE, payload: {name: e.target.value}})
  }

  return (
    <form  className='todo-input' onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a todo item"
        value={itemName.name}
        onChange={handleChange}
      />
    </form>
  );
}
