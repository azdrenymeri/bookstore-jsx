import React from 'react'
import { categories } from '../util/bookCategories';
import {PropTypes } from 'prop-types';

export function CategoryFilter(props) {
    const bookCategories = categories.map(category  => {
        return <option key={category} value={category}> {category} </option>
    });

    return (
        <div>
            <label> Filter books:&nbsp;&nbsp;
                <select className="filter" name="filter" onChange={props.handleChange}>
                            {bookCategories}
                </select>
            </label>
        </div>
    )
}

CategoryFilter.propTypes = {
    handleChange: PropTypes.func.isRequired
};
