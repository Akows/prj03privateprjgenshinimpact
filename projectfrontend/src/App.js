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

  // 현재 보여지는 페이지의 경로명을 가져오는 코드.
  // const pathname = window.location.pathname;

  return (
    <div className="App">

      <div>
        {/* 
          현재 페이지에 해당되는 버튼에 CSS 효과를 고정하고 싶은데
          조건부 렌더링으로 하려면 일부 CSS 속성만 다른 동일한 Appbar 컴포넌트가 다량 만들어야함.
          이건 비효율적인데 다른 방법을 찾아볼 것.
        */}

        {/* {pathname === '/' &&
          <Appbarv2/>
        } */}

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
