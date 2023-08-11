import { Component } from 'react';
import bookService from '../services/bookService.js';
import Book from './Book.js';

class BookList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        };
    }

    bookClicked(title) {
        console.log(`The book ${title} has been added to basket!`);
    }

    componentDidMount() {
        bookService.getAll()
            .then(books => {
                this.setState(() => ({ books }));
            });
    }

    render() {

        if (this.state.books.length == 0) {
            return <span>Loading books...</span>;
        }

        return (
            <ul className='book-list'>
                <h2>Our Book Collection</h2>

                {this.state.books.map(x => {
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