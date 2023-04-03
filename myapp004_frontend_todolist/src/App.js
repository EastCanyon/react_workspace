import { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';
import { baseUrl } from './apiurl';

function App() {
  const inputRef = useRef('');

  const wrap = {
    width: '500px',
    border: '1ps solid black',
    margin: '10px auto',
  };

  // let boardList = [
  //   { id: 1, todoname: '운동', completed: 0 },
  //   { id: 2, todoname: 'sns', completed: 0 },
  //   { id: 3, todoname: '사진정리', completed: 0 },
  // ];

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = async (e) => {
    e.preventDefault();

    await axios
      .post(baseUrl + '/todo/', { todoname: input })
      .then((Response) => {
        console.log(Response.data);
        setInput('');
        getTodos();
      });
  };

  const deletetodo = async (id) => {
    await axios
      .delete(baseUrl + '/todo/' + id)
      .then((Response) => {
        console.log(Response.data);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateTodo = async (id) => {
    let completed = todos.filter((todo) => todo.id === id)[0].completed;
    console.log('completed : ' + completed);

    await axios
      .put(baseUrl + '/todo/' + id + '/' + completed)
      .then((Response) => {
        console.log(Response.data);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // async await 순차적 실행
  // async function getTodos(){}
  const getTodos = async () => {
    await axios
      .get(`${baseUrl}/todo/all`) // baseUrl + '/todo/all'
      .then((Response) => {
        console.log(Response);
        console.log('11111111');
        setTodos(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log('222222222');
  };

  useEffect(() => {
    getTodos();
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, [input]);

  /*
SOP(Same-origin policy) vs CORS(Cross-Origin Resource Sharing)
fetch vs axios
차이점 알아보기
*/

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
