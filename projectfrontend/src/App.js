import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import Appbar from './components/Appbar';
import Footer from './components/Footer';
import Mainpage from './pages/Mainpage';

import Boardpage from './pages/Boardpage';

import Loginpage from './pages/Loginpage';
import MemberAdmin from './pages/MemberAdmin';
import MemberjoinPage from './pages/MemberjoinPage';
import Boardwritepage from './pages/Boardwritepage';
import Boardviewpage from './pages/Boardviewpage';

const App = () => {
  return (
    <div className="App">
      
      <div>
        <Appbar/>
      </div>
      <div>      
        <Routes>

          <Route path='/' element={<Mainpage />}/>

          <Route path='/board' element={<Boardpage />}/>
          <Route path='/board/view/:b_number_pk' element={<Boardviewpage />}/>    
          <Route path='/board/boardwrite' element={<Boardwritepage />}/>  

          <Route path='/login' element={<Loginpage />}/>   
          <Route path='/memberjoin' element={<MemberjoinPage />}/>            
          <Route path='/memberadmin/memberlist' element={<MemberAdmin />}/>     

        </Routes>
      </div>
      <div>
        <Footer/>
      </div>   

    </div>

  );
}

export default App;
