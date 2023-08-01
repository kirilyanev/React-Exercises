import { Component } from 'react';
import Book from './Book.js';

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    render () {        
        return (
            <ul className='book-list'>
                <h2>Our Book Collection</h2>

                {this.props.books.map(x => {
                    return <Book title={x.title} description={x.description} />
                })}
            </ul>
        );
    }
}

export default BookList;