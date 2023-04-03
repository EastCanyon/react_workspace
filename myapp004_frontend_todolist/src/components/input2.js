import { useContext } from 'react';
import { InputContext } from '../contexts/InputContext';

const Input = () => {
  const { insertTodo, input, handleChangeText, inputRef } =
    useContext(InputContext);

  return (
    <form onSubmit={insertTodo}>
      <input
        type='text'
        required={true}
        value={input}
        onChange={handleChangeText}
        ref={inputRef}
      />
      <input type='submit' value='Create' />
    </form>
  );
};

export default Input;
