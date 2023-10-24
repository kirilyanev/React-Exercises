import { Route, Routes, } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Categories from './components/Categories/Categories.js';
import PetDetails from './components/PetDetails/PetDetails.js';
import EditPetDetails from './components/EditPetDetails/EditPetDetails.js';
// import EditPet from './components/EditPet/EditPet.js';
import WrappedEditComponent from './components/EditPet/EditPet.js';

import CreatePet from './components/CreatePet/CreatePet.js';
import DemoPage from './components/Demo.js';
import DemoFunc from './components/DemoFunc.js';
import AdvancedApp from './components/AdvancedTechniques/AdvancedTechniques.js';
import './App.css';
import { useEffect, useState } from 'react';
import { auth } from './utils/firebase.js';

function App() {
  // console.log(process.env.REACT_APP_CUSTOM_ENV_VARIABLE);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auth.onAuthStateChanged((authUser) => {
    //   if (user) {
    //     setUser(authUser);
    //   } else {
    //     setUser(null);
    //   }
    // });

    // Simpler syntax - just set the new user without if statements
    auth.onAuthStateChanged(setUser);

  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };

  return (
    <div className="container">
      <Header authInfo={authInfo} />

      <Routes>
        <Route path='/' element={<Categories authInfo={authInfo} />} />
        <Route path='/categories/:category' element={<Categories authInfo={authInfo} />} />
        <Route path='/pets/details/:petId' element={<PetDetails authInfo={authInfo} />} />
        <Route path='/pets/details/:petId/edit' element={<EditPetDetails authInfo={authInfo} />} />
        <Route path='/pets/create' element={<CreatePet authInfo={authInfo} />} />
        {/* <Route path='/pets/:petId/edit' element={<EditPet />} /> */}
        <Route path='/pets/:petId/edit' element={<WrappedEditComponent authInfo={authInfo} />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/login' element={<Login authInfo={authInfo} />} />

        <Route path='/register' element={<Register authInfo={authInfo} />} />


        <Route path='/demo' element={<DemoPage />} />
        <Route path='/demofunc' element={<DemoFunc />} />
        <Route path='/advanced-techniques' element={<AdvancedApp />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
