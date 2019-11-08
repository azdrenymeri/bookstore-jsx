import React from 'react';
import './styles/App.css';
import  BooksForm from './containers/BooksForm';
import { connect } from 'react-redux';
import BookList from './containers/BookList';

// eslint-disable-next-line linebreak-style
function App() {
  return (
    <div className="Bookstore-CMS">
      <div className="panel-bg">
          <span className="brand">Bookstore CMS</span>
          <span className="Books"> Books </span>
          <span className="Categories"> Categories</span>
      </div>
      <BookList />
      <BooksForm />
    </div>
  );
}


export default connect()(App);
