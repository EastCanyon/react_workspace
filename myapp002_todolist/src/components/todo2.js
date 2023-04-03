import Label from './label2';
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const Todo = () => {
  // const { todos, updateTodo, deleteTodo } = useContext(TodoContext);
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <Label todo={todo} />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo;
