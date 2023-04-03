// 컴포넌트 파일은 항상 대문자로 시작

// 상태전달 : props
import './App.css';
import Todo from './components/todo2';
import Input from './components/input2';
import { useEffect, useRef, useState } from 'react';
import { InputContext } from './contexts/InputContext';
import { TodoContext } from './contexts/TodoContext';

function App() {
  const inputRef = useRef('');

  const wrap = {
    width: '500px',
    border: '1px solid black',
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

  const deleteTodo = (id) => {
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
      <InputContext.Provider
        value={{ insertTodo, input, handleChangeText, inputRef }}
      >
        <Input />
      </InputContext.Provider>
      <TodoContext.Provider value={{ todos, updateTodo, deleteTodo }}>
        <Todo />
      </TodoContext.Provider>
    </div>
  );
}
export default App;
