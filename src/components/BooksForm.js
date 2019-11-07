import React from 'react'

export function BooksForm(props) {
    const categories = ['Action','Biography','History','Horror','Kids','Learning','Sci-Fi']
    return (
        <div>
            <form>
                <p>
                    <label>Book Title:&nbsp;&nbsp;</label>
                    <input type="text" onChange={() => console.log('changed')} placeholder="Book title" />
                </p>
                <p>
                    <label> Pick a category:&nbsp;&nbsp;
                    <select value="category" onChange={() => console.log('changed') } >
                    {categories.map(category => {
                     return   <option key={category} value={category}> {category} </option>
                    })}
                    </select>
                    </label>

                </p>
            <button type="submit"> Submit Book</button>
            </form>
        </div>
    );
}
