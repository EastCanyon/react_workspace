import { useContext } from 'react';
import { InputContext } from '../contexts/InputContext';

const Input = () => {
  const { insertTodo, input, handleChangeText, inputRef } =
    useContext(InputContext);

  return (
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
  );
};

export default Input;
