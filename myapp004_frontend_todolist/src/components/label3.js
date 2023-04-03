import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../apiurl";
import axios from "axios";
import { deleteAction, updateAction } from "../reduxs/action";

const Label = ({ todo }) => {
  const dispatch = useDispatch();

  const todos = useSelector((todos) => todos);

  // const deleteTodo = async (id) => {
  //   await axios
  //     .delete(baseUrl + '/todo/' + id)
  //     .then((response) => {
  //       console.log(response.data);
  //       window.location.replace('/');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const deleteTodo = (id) => {
    deleteAction(id);
  };

  // const updateTodo = async (id) => {
  //   const completed = todos.filter((todo) => todo.id === id)[0].completed;
  //   await axios
  //     .put(baseUrl + "/todo/" + id + "/" + completed)
  //     .then((response) => {
  //       window.location.replace("/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const updateTodo = async (id) => {
    const completed = todos.filter((todo) => todo.id === id)[0].completed;
    updateAction(id, completed);
  };

  return (
    <h3>
      <label
        className={todo.completed === 1 ? "completed" : null}
        onClick={() => updateTodo(todo.id)}
      >
        {todo.todoname}
      </label>
      <label onClick={() => deleteTodo(todo.id)}>&nbsp;&nbsp;삭제</label>
    </h3>
  );
};

export default Label;
