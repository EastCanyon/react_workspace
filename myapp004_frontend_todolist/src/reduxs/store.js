import { reducer } from './reducer';
import { legacy_createStore as createStore } from 'redux';

export const store = createStore(reducer); //npm install redux react-redux
