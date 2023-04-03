let boardList = [
  { id: 1, todoname: '운동', completed: 0 },
  { id: 2, todoname: 'sns', completed: 0 },
  { id: 3, todoname: '사진정리', completed: 0 },
];

export const reducer = (todos = boardList, action) => {
  switch (action.type) {
    case 'INSERT': //추가
      return [
        ...todos,
        { id: todos.length + 1, todoname: action.todoname, completed: 0 },
      ];

    case 'DELETE': // 삭제
      return todos.filter((todo) => todo.id !== action.id);

    case 'UPDATE': //업데이트
      return todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
          : todo
      );

    default: //목록
      return todos;
  }
};
