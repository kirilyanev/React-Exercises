import './App.css';
import Heading from './components/Heading';
import BookList from './components/BookList.js';
import Counter from './components/Counter.js';
import Footer from './components/Footer.js';


function App() {
    return (
        <div className="site-wrapper">
            <Heading>Our Book Library</Heading>

            <Counter />

            {/* <BookList books={booksData}/> */}
            <BookList />


            <Footer />
        </div>
  );
}

export default App;
