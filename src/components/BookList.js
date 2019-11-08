import React from 'react'
import Book from './Book';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
function BookList(props) {
    return (
        <div>
            {props.books.map(book => {
                return <Book key={book.id} book={book} />
            })}
        </div>
    )
}
BookList.propTypes = {
    books: PropTypes.array.isRequired
}
const mapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList);
