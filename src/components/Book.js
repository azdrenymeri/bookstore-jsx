import React from "react";
import {PropTypes} from 'prop-types';

export default function Book(props) {
    return (
        <div>
            <p>{props.book.title} - {props.book.category}</p>
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired
}