const Input = (props) => {
  const { insertTodo, input, handleChangeText, inputRef } = props;

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
