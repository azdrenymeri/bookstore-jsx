import booksReducer from './booksReducer';
import filterReducer from './filterReducer';
import { combineReducers } from 'redux';


export const combinedReducers = combineReducers({books:booksReducer, filter: filterReducer});