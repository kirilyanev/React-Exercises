import './App.css';
import Heading from './components/Heading';
import BookList from './components/BookList.js';

const booksData = [
    {title: 'Harry Potter', description: 'Wizards and stuff'},
    {title:'Programming with JS', description:'Guide to programming'},
    {title:'Crime and punishment', description:'A Dostoevky masterpiece'},
    {title:'Chronicles of Narnia',description:'Adventure'},
];

function App() {
    return (
        <div className="site-wrapper">
            <Heading />

            <BookList books={booksData}/>
        </div>
  );
}

export default App;
