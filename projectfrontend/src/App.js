import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Appbar from './components/Appbar';
import Footer from './components/Footer';
import Charactersinfo from './pages/Charactersinfopage';
import Loginpage from './pages/Loginpage';
import Mainpage from './pages/Mainpage';
import MemberjoinPage from './pages/MemberjoinPage';

const App = () => {
  return (
    <div className="App">
      <div>
        <Appbar/>
      </div>
      <div>      
        <Routes>
          <Route path='/' element={<Mainpage />}/>
          <Route path='/charactersinfopage' element={<Charactersinfo />}/>
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
