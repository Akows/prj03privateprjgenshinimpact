import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import Appbarv2 from './components/Appbarv2';
import Footer from './components/Footer';

import Mainpage from './pages/Mainpage';

import Loginpage from './pages/Loginpage';
import MemberAdmin from './pages/MemberAdmin';
import MemberjoinPage from './pages/MemberjoinPage';

import WorldInfopage from './pages/WorldInfopage';

import Generalforum from './pages/Generalforum';
import GeneralforumView from './pages/GeneralforumView';
import GeneralforumWriteAndEdit from './pages/GeneralforumWriteAndEdit';

import Incomplete from './pages/Incomplete';


const App = () => {
  return (
    <div className="App">
      <div>
        <Appbarv2/>
      </div>
      <div>      
        <Routes>

          <Route path='/' element={<Mainpage />}/>

          <Route path='/login' element={<Loginpage />}/>   
          <Route path='/memberjoin' element={<MemberjoinPage />}/>            
          <Route path='/memberadmin/memberlist' element={<MemberAdmin />}/>    

          <Route path='/worldinfo' element={<WorldInfopage />}/>

          <Route path='/generalforum' element={<Generalforum/> }/>
          <Route path='/generalforum/view/:b_number_pk' element={<GeneralforumView/> }/>
          <Route path='/generalforum/writeoredit' element={<GeneralforumWriteAndEdit/> }/>


          <Route path='/incomplete' element={<Incomplete />}/>    

        </Routes>
      </div>
      <div>
        <Footer/>
      </div>   

    </div>

  );
}

export default App;
