import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import Appbar from './components/Appbar';
import Footer from './components/Footer';
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

        </Routes>
      </div>
      <div>
        <Footer/>
      </div>   

    </div>

  );
}

export default App;
