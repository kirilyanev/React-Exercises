import { Route, Routes, } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Login from './components/Login/Login.js';
import Categories from './components/Categories/Categories.js';
import PetDetails from './components/PetDetails/PetDetails.js';
import EditPetDetails from './components/EditPetDetails/EditPetDetails.js';
// import EditPet from './components/EditPet/EditPet.js';
import WrappedEditComponent from './components/EditPet/EditPet.js';

import CreatePet from './components/CreatePet/CreatePet.js';
import DemoPage from './components/Demo.js';
import DemoFunc from './components/DemoFunc.js';
import './App.css';

function App() {
  // console.log(process.env.REACT_APP_CUSTOM_ENV_VARIABLE);
  return (
    <div className="container">
      <Header />
      
      <Routes>
        <Route path='/' element={<Categories />} />
        <Route path='/categories/:category' element={<Categories />} />
        <Route path='/pets/details/:petId' element={<PetDetails />} />
        <Route path='/pets/details/:petId/edit' element={<EditPetDetails />} />
        <Route path='/pets/create' element={<CreatePet />} />
        {/* <Route path='/pets/:petId/edit' element={<EditPet />} /> */}
        <Route path='/pets/:petId/edit' element={<WrappedEditComponent />} />
        <Route path='/login' element={<Login />} />


        <Route path='/demo' element={<DemoPage />} />
        <Route path='/demofunc' element={<DemoFunc />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
