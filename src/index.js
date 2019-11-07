import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {combinedReducers} from './reducers/index';



const initialState = {
    books:[
        {
            id:Math.random(),
            title: 'Hamlet',
            category: 'Action'
        },
        {
            id:Math.random(),
            title: 'Johnny Boy',
            category: 'Biography'
        },
        {
            id:Math.random(),
            title: 'In To The Future',
            category: 'Sci-Fi'
        },
        {
            id:Math.random(),
            title: 'WWII',
            category: 'History'
        }
    ]
};

const store = createStore(combinedReducers,
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));