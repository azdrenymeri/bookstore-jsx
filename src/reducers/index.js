import booksReducer from './booksReducer';
import { combineReducers } from 'redux';


export const combinedReducers = combineReducers({books:booksReducer});