import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Label from "./label2";

const Todo = () => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              <div className="todo" key={todo.id}>
                <Label todo={todo} />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo;
