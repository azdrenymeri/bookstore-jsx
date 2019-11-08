import React from 'react';
import Book from '../components/Book';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import { removeBook, changeFilter }from '../actions/index';
import { CategoryFilter } from './CategoryFilter';

function BookList(props) {

    const booksList = () => {
      return  props.filter !== 'All'? props.books.filter(book => book.category === props.filter): props.books;
    }

    return (
        <div>
            <br/>
            <br/>
                <CategoryFilter handleChange={ (e) => props.changeFilter(e.target.value)} />
            {booksList().map(book => {
                return <Book key={book.id} book={book}  handleRemove={props.removeBook}/>  
            })}
        </div>
    )
}

BookList.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            category: PropTypes.string
        }).isRequired
    ).isRequired,
    removeBook: PropTypes.func.isRequired,
    changeFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        books: state.books,
        filter: state.filter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeBook: (book) => dispatch(removeBook(book)),
        changeFilter: (filter) => dispatch(changeFilter(filter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
