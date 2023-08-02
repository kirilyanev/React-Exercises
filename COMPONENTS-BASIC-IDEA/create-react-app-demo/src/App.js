import './App.css';
import Heading from './components/Heading';
import BookList from './components/BookList.js';
import Counter from './components/Counter.js';

const booksData = [
    {title: 'Harry Potter', description: 'Wizards and stuff'},
    {title:'Programming with JS', description:'Guide to programming'},
    {title:'Crime and punishment', description:'A Dostoevky masterpiece'},
    {title:'Chronicles of Narnia',description:'Adventure'},
];

function App() {
    return (
        <div className="site-wrapper">
            <Heading>Our Book Library</Heading>

            <Counter />

            <BookList books={booksData}/>
        </div>
  );
}

export default App;
