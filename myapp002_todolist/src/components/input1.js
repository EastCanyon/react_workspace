const Input = (props) => {
  const { insertTodo, input, handleChangeText, inputRef } = props;

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
