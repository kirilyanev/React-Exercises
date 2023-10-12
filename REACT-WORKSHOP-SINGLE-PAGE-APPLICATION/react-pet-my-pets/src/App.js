import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Categories from './components/Categories/Categories.js';
import PetDetails from './components/PetDetails/PetDetails.js';
import DemoPage from './components/Demo.js';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      
      <Routes>
        <Route path='/' element={<Categories />} />
        <Route path='/categories/:category' element={<Categories />} />
        <Route path='/pets/details/:petId' element={<PetDetails />} />
        <Route path='/demo' element={<DemoPage />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
