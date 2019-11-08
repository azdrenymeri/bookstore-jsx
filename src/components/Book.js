import React from "react";
import {PropTypes} from 'prop-types';

export default function Book(props) {
    return (
        <div>
            <p>{props.book.title} - {props.book.category}<button onClick={() => props.handleRemove(props.book)}>Remove Book</button></p>
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired
}