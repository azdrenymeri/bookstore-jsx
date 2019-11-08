import React from 'react'
import { categories } from '../util/bookCategories';
import {createBook} from '../actions/index';
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types';

class BooksForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            category: categories[0]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const { name } = event.target;
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const{title, category} = this.state;

        if(title.length !== 0 && category.length !== 0 && category !== 'Select') {
            this.props.createBook({
                id: Math.random(),
                title,
                category
            });
        } else {
            alert('Please fill the book title and select a proper category');
        }

        this.setState({
            title: '',
            category: categories[0]
        });
    }

    render(){
        const bookCategories = categories.map(category => {
            return <option key={category} value={category}> {category} </option>
        });

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>Book Title:&nbsp;&nbsp;</label>
                        <input type="text" name="title" value={this.state.title} placeholder="Book title" onChange={this.handleChange} />
                    </p>
                    <p>
                        <label> Pick a category:&nbsp;&nbsp;
                        <select name="category" value={this.state.category} onChange={this.handleChange}>
                            {bookCategories}
                        </select>
                        </label>
    
                    </p>
                <button type="submit"> Submit Book</button>
                </form>
            </div>
        );
    }
    
}

BooksForm.propTypes = {
    createBook: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
    return {
        createBook: (book) => dispatch(createBook(book))
    }
};

export default connect(null, mapDispatchToProps)(BooksForm);