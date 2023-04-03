import { useDispatch } from 'react-redux';

const Label = ({ todo }) => {
  const dispatch = useDispatch();

  //   const deleteTodo = (id) => {
  //     dispatch({ type: 'DELETE', id: id });
  //   };

  //   const updateTodo = (id) => {
  //     dispatch({ type: 'UPDATE', id: id });
  //   };

  return (
    <h3>
      {/* <label
        className={todo.completed === 1 ? 'completed' : null}
        onClick={() => updateTodo(todo.id)}
      > */}
      <label
        className={todo.completed === 1 ? 'completed' : null}
        onClick={() => dispatch({ type: 'UPDATE', id: todo.id })}
      >
        {todo.todoname}
      </label>
      {/* <label onClick={() => deleteTodo(todo.id)}>&nbsp;&nbsp;삭제</label> */}
      <label onClick={() => dispatch({ type: 'DELETE', id: todo.id })}>
        &nbsp;&nbsp;삭제
      </label>
    </h3>
  );
};

export default Label;
