import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import Appbar from './components/Appbar';
import Footer from './components/Footer';
import Loginpage from './pages/Loginpage';
import Mainpage from './pages/Mainpage';

const App = () => {
  return (
    <div className="App">
      
      <div>
        <Appbar/>
      </div>
      <div>      
        <Routes>

          <Route path='/' element={<Mainpage />}/>

          <Route path='/login' element={<Loginpage />}/>         

        </Routes>
      </div>
      <div>
        <Footer/>
      </div>   

    </div>

  );
}

export default App;
