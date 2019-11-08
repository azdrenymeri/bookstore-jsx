import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const booksReducer = (state=[],action) => {
    console.log(action.type);
    
    switch(action.type) {
        case CREATE_BOOK:
            return [...state,action.payload]
        case REMOVE_BOOK:
        return [
            ...state.filter((book) => {
                return book.id !== action.payload.id
            })
        ];
        default:
            return  state;
    }
}

export default booksReducer;