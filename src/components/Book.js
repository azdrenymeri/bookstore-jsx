import { React } from "react";

function Book(props) {
  return (
    <div>
      <p>
          {props.title} - {props.category}
      </p>
    </div>
  )
}

export default Book;