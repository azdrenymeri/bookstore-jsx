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
            category: 'Select'
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
            category: 'Select'
        });
    }

    render(){
        const bookCategories = categories.map(category => {
            if(category === 'All'){category = 'Select'}
            return <option key={category} value={category}> {category} </option>
        });

        return (
            <div className="formContainer">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input className="bookTitle" type="text" name="title" value={this.state.title} placeholder="Book title" onChange={this.handleChange} />
                        &nbsp;&nbsp;&nbsp;
                        <select className="filter" name="category" value={this.state.category} onChange={this.handleChange}>
                            {bookCategories}
                        </select>
                        &nbsp;&nbsp;&nbsp;
                        <button className="btn" type="submit">ADD BOOK</button>
                    </p>
                
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