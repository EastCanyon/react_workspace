export const reducer = (todos, action) => {
  switch (action.type) {
    // case 'INSERT': //추가
    //   return [
    //     ...todos,
    //     { id: todos.length + 1, todoname: action.todoname, completed: 0 },
    //   ];

    // case 'DELETE': //삭제
    //   return todos.filter((todo) => todo.id !== action.id);

    // case 'UPDATE': //수정
    //   return todos.map((todo) =>
    //     todo.id === action.id
    //       ? { ...todo, completed: todo.completed == 1 ? 0 : 1 }
    //       : todo
    //   );

    case "LIST": //목록
      return (todos = action.todos);
    default:
      return null;
  }
};
