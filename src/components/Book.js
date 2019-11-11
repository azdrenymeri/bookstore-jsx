import React from "react";
import {PropTypes} from 'prop-types';

export default function Book(props) {
    return (
        <div className="container">
            {/* first section */}
            <div className="mainSection">
                <p className="categoryText">{props.book.category}</p>
                <h1 style={{display:'inline',margin:0}}> {props.book.title} </h1>
                <p className="text">Author</p>
                <p className="blueText">
                    <span className="blueText">Comments</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
                    <span  className="blueText">Remove</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <span className="blueText">Edit</span>
                </p>
            </div>

            {/* second section */}
            <div className="secondarySection">
                <div className="spinnerSection">
                <div className="Rectangle">
                    <div className="Oval-1"></div>
                </div>
                </div>
                <div className="spinnerSection">
                      <h2>100%</h2>
                      <p className="text">Completed</p>
                </div>
            </div>

            <div className="secondarySection">
                <p className="text">CURRENT CHAPTER</p>
                <h3>Chapter 17</h3>
            <button className="btn" onClick={() => props.handleRemove(props.book)}>Remove Book</button>
            </div>
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired
}