import { TodoContext } from '../contexts/TodoContext';
import Label from './label2';
import { useContext } from 'react';

const Todo2 = () => {
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

export default Todo2;
