import React from 'react';
import Book from '../components/Book';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import { removeBook, changeFilter }from '../actions/index';
import { CategoryFilter } from './CategoryFilter';

function BookList(props) {

    return (
        <div>
            <br/>
            <br/>
                <CategoryFilter handleChange={ (e) => props.changeFilter(e.target.value)} />
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
    removeBook: PropTypes.func.isRequired,
    changeFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        filter: state.filter,
        books: state.filter !== 'All'? 
        state.books.filter(book => book.category === state.filter) : state.books
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeBook: (book) => dispatch(removeBook(book)),
        changeFilter: (filter) => dispatch(changeFilter(filter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
