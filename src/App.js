import React from 'react';
import './App.css';
import { BooksForm } from './components/BooksForm';
import { connect } from 'react-redux';
import BookList from './components/BookList';

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
