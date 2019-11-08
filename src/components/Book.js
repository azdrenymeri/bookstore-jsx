import React from "react";
import {PropTypes} from 'prop-types';

export default function Book(props) {
    const {title,category} = props.book;
    return (
        <div>
            <p>{title} - {category}</p>
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired

}