import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import boardReducers from './reducers/board_reducer';

const store = configureStore({
  reducer: {
    board: boardReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // 기본 값이 true지만 배포할때 코드를 숨기기 위해서 false로 변환하기 쉽게 설정에 넣어놨다.
});

export default store;
