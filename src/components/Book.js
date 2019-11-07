import React from "react";


export default function Book(props) {
    return (
        <div>
            <p>{props.book.title} - {props.book.category}</p>
        </div>
    );
}

