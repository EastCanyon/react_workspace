import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const inputRef = useRef("");
  const wrap = {
    width: "500px",
    border: "1ps solid black",
    margin: "10px auto",
  };

  let boardList = [
    { id: 1, todoname: "운동하기", completed: 0 },
    { id: 2, todoname: "SNS 꾸미기", completed: 0 },
    { id: 3, todoname: "사진정리하기", completed: 0 },
  ];

  const [todos, setTodos] = useState([...boardList]);
  const [input, setInput] = useState("");

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: todos.length + 1, todoname: input, completed: 0 },
    ]);

    setInput("");
  };

  const deleteTodo = (id) => {
    // setTodos(
    //   todos.filter((todo) => {
    //     return todo.id ! == id;
    //   })
    // );

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
          : todo
      )
    );
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST</h1>
      <form onSubmit={insertTodo}>
        <input
          type="text"
          required={true}
          value={input}
          onChange={handleChangeText}
          ref={inputRef}
        />
        <input type="submit" value="Create" />
      </form>
      {todos
        ? todos.map((todo) => {
            return (
              <div className="todo" key={todo.id}>
                <h3>
                  <label
                    className={todo.completed == 1 ? "completed" : null}
                    onClick={() => {
                      updateTodo(todo.id);
                    }}
                  >
                    {todo.todoname}
                  </label>
                  <label
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    &nbsp;&nbsp;삭제
                  </label>
                </h3>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
