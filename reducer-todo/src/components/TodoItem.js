import React from 'react';


const TodoItem = (props) => {
  const { markComplete, clearCompleted} = props;
  const strike = props.item.complete? 'mark-complete': '';
  return (
    <div className="todo-item">
      <p className={strike}>{props.item.name}</p>
      <button onClick={(e) => markComplete(props.item.id, true)}>Mark Complete</button>
      <button onClick={(e) => clearCompleted(props.item.id)}>Clear</button>
    </div>
  )
}

export default TodoItem;
