import React from 'react';
import './App.css';
import  BooksForm from './containers/BooksForm';
import { connect } from 'react-redux';
import BookList from './containers/BookList';

// eslint-disable-next-line linebreak-style
function App() {
  return (
    <div className="App">
      <BooksForm />
      <BookList />
    </div>
  );
}


export default connect()(App);
