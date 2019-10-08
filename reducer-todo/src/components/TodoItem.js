import React from 'react';


const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <p>{props.item.item}</p>
      <button onClick={props.markComplete}>Mark Complete</button>
    </div>
  )
}

export default TodoItem;
