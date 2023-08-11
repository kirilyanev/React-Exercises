import { Component } from 'react';
import Book from './Book.js';

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    bookClicked(title) {
        console.log(`The book ${title} has been added to basket!`);
    }

    render () {        
        return (
            <ul className='book-list'>
                <h2>Our Book Collection</h2>

                {this.props.books.map(x => {
                    return <Book
                    title={x.title} 
                    description={x.description}
                    author={x.author}
                    // clickHandler={this.bookClicked.bind(this, x.title)}
                    clickHandler={() => this.bookClicked(x.title)}
                    />;
                })}
            </ul>
        );
    }
}

export default BookList;