import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Appbar from './components/Appbar';
import Footer from './components/Footer';
import Boardpage from './pages/Boardpage';
import Boardwritepage from './pages/Boardwritepage';
import Charactersinfo from './pages/Charactersinfopage';
import Loginpage from './pages/Loginpage';
import Mainpage from './pages/Mainpage';
import MemberjoinPage from './pages/MemberjoinPage';
import Mypage from './pages/Mypage';
import WorldInfoPage from './pages/WorldInfoPage';

const App = () => {
  return (
    <div className="App">
      <div>
        <Appbar/>
      </div>
      <div>      
        <Routes>
          
          <Route path='/' element={<Mainpage />}/>

          <Route path='/boardpage' element={<Boardpage />}/> 
            <Route path='/boardwritepage' element={<Boardwritepage />}/>

          <Route path='/charactersinfopage' element={<Charactersinfo />}/>
          <Route path='/worldinfopage' element={<WorldInfoPage />}/>          
      
          <Route path='/mypage' element={<Mypage />}/>

          <Route path='/loginpage' element={<Loginpage />}/>
          <Route path='/memberjoinPage' element={<MemberjoinPage />}/>

        </Routes>
      </div>
      <div>
        <Footer/>
      </div>

    </div>
  );
};

export default App;
