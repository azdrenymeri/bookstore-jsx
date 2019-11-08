import React from "react";
import {PropTypes} from 'prop-types';

export default function Book(props) {
    const {title,category} = props;
    return (
        <div>
            <p>{title} - {category}</p>
        </div>
    );
}

Book.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}