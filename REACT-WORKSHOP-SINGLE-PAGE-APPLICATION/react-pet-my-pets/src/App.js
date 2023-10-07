import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Categories from './components/Categories/Categories.js';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      
      <Routes>
        <Route path='/' element={<Categories />} />
        <Route path='/categories/:category' element={<Categories />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
