import { reducer } from './reducer';
import { legacy_createStore as createStore } from 'redux'; // 나중에 사용 안함. 뒤에가서 바꿀거임

export const store = createStore(reducer);
