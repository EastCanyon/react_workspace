import './App.css';
import { useEffect, useRef, useState } from 'react';
import Todo from './components/todo1';
import Input from './components/input1';
import axios from 'axios';
import { baseUrl } from './apiurl';

function App() {
  const inputRef = useRef();

  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = async (e) => {
    e.preventDefault();

    //post방식
    await axios
      .post(baseUrl + '/todo', { todoname: input })
      .then((response) => {
        console.log(response.data);
        setInput('');
        getTodos();
      });
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(baseUrl + '/todo/' + id)
      .then((response) => {
        console.log(response.data);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
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

  //async function getTodos(){}
  const getTodos = async () => {
    await axios
      .get(`${baseUrl}/todo/all`)
      .then((response) => {
        console.log(response);
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    inputRef.current.focus();
    console.log('useEffect');
  }, [input]);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST</h1>

      <Input
        insertTodo={insertTodo}
        input={input}
        handleChangeText={handleChangeText}
        inputRef={inputRef}
      />

      <Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
