import React from 'react';
import Book from '../components/Book';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import { removeBook }from '../actions/index';

function BookList(props) {
    return (
        <div>
            {props.books.map(book => {
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
    removeBook: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        books: state.books
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeBook: (book) => dispatch(removeBook(book))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
