import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import Appbarv2 from './components/Appbarv2';
import Footer from './components/Footer';

import Mainpage from './pages/Mainpage';

import WorldInfopage from './pages/WorldInfopage';

import Generalforumv2 from './pages/Generalforumv2';
import GeneralforumViewv2 from './pages/GeneralforumViewv2';
import GeneralforumWriteAndEditv2 from './pages/GeneralforumWriteAndEditv2';

import WorldInfoMondstadt from './pages/WorldInfoMondstadt';
import GenshinIntroduce from './pages/GenshinIntroduce';

import WorldInfoMond from './pages/WorldInfoMond';
import WorldInfoLiyue from './pages/WorldInfoLiyue';
import WorldInfoInazuma from './pages/WorldInfoInazuma';

import Generalforum from './unused/Generalforum';

const App = () => {

  // 현재 보여지는 페이지의 경로명을 가져오는 코드.
  // const pathname = window.location.pathname;

  return (
    <div className="App">

      <div>
        {/* 
          현재 페이지에 해당되는 버튼에 CSS 효과를 고정하고 싶은데
          조건부 렌더링으로 하려면 일부 CSS 속성만 다른 동일한 Appbar 컴포넌트를 여러개 만들어야함.
          이건 비효율적이므로 다른 방법을 찾아볼 것.
        */}

        {/* {pathname === '/' &&
          <Appbarv2/>
        } */}

        <Appbarv2/>
      </div>
      <div>      
        <Routes>

          <Route path='/' element={<Mainpage />}/>

          <Route path='/genshinintroduce' element={<GenshinIntroduce />}/>

          <Route path='/worldinfo' element={<WorldInfopage />}/>
          <Route path='/worldinfo/mondstadt' element={<WorldInfoMondstadt />}/>

          <Route path='/generalforum' element={<Generalforumv2/> }/>
          <Route path='/generalforum/view/:b_number_pk' element={<GeneralforumViewv2/> }/>
          <Route path='/generalforum/writeoredit' element={<GeneralforumWriteAndEditv2/> }/>


          <Route path='/test1' element={<WorldInfoMond/> }/>
          <Route path='/test2' element={<WorldInfoLiyue/> }/>  
          <Route path='/test3' element={<WorldInfoInazuma/> }/> 

          <Route path='/testzone' element={<Generalforum/> }/>  

        </Routes>
      </div>
      <div>
        <Footer/>
      </div>   

    </div>

  );
}

export default App;
