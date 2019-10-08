
export const todos = [
  {
    name: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },

  {
    name: 'Practice using reducers',
    completed: false,
    id: 4892987589
  },

  {
    name: 'Implement reducers in a project',
    completed: false,
    id: 5892987589
  }
]


export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {todos: [...state.todos, {
          id: new Date(), completed: false, name: action.payload.name
        }], todo: state.todo};

    case 'ON_INPUT_CHANGE':
      return {
        name: action.payload.name
      }

    case 'ON_SUBMIT':
      return {name: ''}

    case 'MARK_TODO':
      return {
        todos: state.todos.map(todo => {
        if (todo.id !== action.payload.id) return todo;
        return {
          id: todo.id,
          name: todo.name,
          complete: action.payload.isComplete,
        };
        }),
        todo: state.todo
      };

    case 'CLEAR':
      return {
        todos: state.todos.filter(item => item.id !== action.payload.id),
        todo: state.todo
      }

    default:
      return state;
}}
