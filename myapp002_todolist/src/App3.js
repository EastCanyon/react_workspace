// 컴포넌트 파일은 항상 대문자로 시작

// 상태전달 : Context API + useSelector() + useDispatch()
import './App.css';
import Todo from './components/todo3';
import Input from './components/input3';
import { Provider } from 'react-redux';
import { store } from './reduxs/store';

function App() {
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST (Redux)</h1>
      <Provider store={store}>
        <Input />
        <Todo />
      </Provider>
    </div>
  );
}
export default App;
