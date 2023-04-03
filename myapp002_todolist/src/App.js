import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const inputRef = useRef('');

  const wrap = {
    width: '500px',
    border: '1ps solid black',
    margin: '10px auto',
  };

  let boardList = [
    { id: 1, todoname: '운동', completed: 0 },
    { id: 2, todoname: 'sns', completed: 0 },
    { id: 3, todoname: '사진정리', completed: 0 },
  ];

  const [todos, setTodos] = useState([...boardList]);
  const [input, setInput] = useState('');

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: todos.length + 1, todoname: input, completed: 0 },
    ]);

    setInput('');
  };

  const deletetodo = (id) => {
    // setTodos(
    //   todos.filter((todo) => {
    //     return todo.id !== id;
    //   })
    // );

    // 처리할 문장이 하나인 경우 중괄호{return} 생략 가능
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
    <div className='App' style={wrap}>
      <h1>TODO LIST</h1>
      <form onSubmit={insertTodo} action='#'>
        <input
          type='text'
          required={true}
          value={input}
          onChange={handleChangeText}
          ref={inputRef}
        />
        <input type='submit' value='Cteate' />
      </form>
      {todos
        ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <h3>
                  <label
                    className={todo.completed === 1 ? 'completed' : null}
                    onClick={() => {
                      updateTodo(todo.id);
                    }}
                  >
                    {todo.todoname}
                  </label>
                  <label
                    onClick={() => {
                      deletetodo(todo.id);
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
