# React-GenshinimpactWebPage-Project

##

![main 01 JPG](https://user-images.githubusercontent.com/54127322/179493620-43634588-da3a-4ce2-a61c-1e1b007ad987.jpg)

##

### Made by 이유승.
### contact to 010-3629-3686 / akows141@gmail.com
### GitPage :　https://akows.github.io/LYSPrivateProject/

##

## :: 목차 ::

### 1. 소개
##### 1-1. 프로젝트 소개
##### 1-2. 프로젝트 기능
##### 1-3. 개발환경
##### 1-4. 프로젝트 작동 구조

### 2. 프론트엔드 (React)
##### 2-1. 프로젝트 구조
##### 2-2. 컴포넌트 구성

### 3. 백엔드 (Spring Framework)
##### 3-1. 프로젝트 구조
##### 3-2. Database 테이블 설계
##### 3-3. Controller 구성
##### 3-4. DTO 구성
##### 3-5. DAO 구성

### 4. 마무리
##### 4-1. 모자란 점
##### 4-2. 소감

##

## 1. 소개
## 1-1. 프로젝트 소개.

#### 웹 프로그래밍의 기본 소양인 CRUD가 가능한 간단한 게시판을 목표로 시작하게 된 개인 프로젝트입니다. 
#### React를 독학으로 배워 기술을 익혀가면서 제작한 프로젝트이기에 기술적 완성도가 부족할 지라도 제대로 작동하는 웹 페이지를 만들기 위해 노력하였습니다.

## 1-2. 프로젝트 기능

#### 처음에는 단지 가장 기본적인 기능인 CRUD가 가능한 게시판만을 만들고자 했습니다. 
#### 그러나 게시판의 틀이 잡혀나가면서 프론트엔드적인 요소가 너무 부족하다고 생각되어 HTML과 CSS, Javascript같은 프론트엔드 기술 스택을 연습하면서 몇몇 기능과 프론트엔드 요소들을 추가하였습니다.

#### 초기 기능 목표
#### - 작성된 게시물이 DataBase에 저장된다.
#### - DataBase에 저장된 게시물을 조회하여 웹 페이지에서 출력한다.
#### - DataBase에 저장된 게시물을 삭제한다.
#### - DataBase에 저장된 게시물을 수정한다.

#### 추가된 목표들
#### - 게시물 리스트가 출력될 때, 게시물들을 10개 단위로 끊어 출력한다.
#### - 나누어진 게시물들은 페이징 기능을 통해 모두 조회할 수 있다.
#### - 게임 ‘원신’을 주제로 하는 웹페이지의 성격을 강화한다. (원신의 게임 소개 페이지를 그대로 재현해본다 등.)

## 1-3. 개발환경
#### OS : MS Window 10 Pro
#### IDE : IntelliJ IDEA Community Edition 2022.1
#### Backend : Spring Framework, myBatis, Tomcat
#### Frontend : React 16.12.0
#### DateBase : MariaDB 10.6.7 / MySQL Workbench 8.0 CE
#### Web Browser : Google Chrome

## 1-4. 프로젝트 작동 구조
#### Client Side Rendering 방식으로 동작하는, Single Page Application의 구축을 가능하게 해주는 React의 Create React App을 기반으로 작동합니다.

#### Back-end에서 Spring Framework와 myBatis, Tomcat을 이용하여 DB와 백엔드 사이의 데이터를 주고받도록 제작되었습니다. 백엔드는 데이터를 요청받게 될 경우 mapper 파일의 SQL문을 통해 DB에 접근, 필요한 데이터를 조회하여 JSON 방식으로 프론트엔드단까지 넘기게 됩니다. 프론트엔드는 이를 받아 적절한 형태로 화면에 출력합니다.

#### SPA 구조의 웹 페이지가 가지고 있는 뒤로 가기의 문제점은 react-router-dom의 useNavigate를 사용하여 세션 기록(페이지 방문 기록)에 접근, 뒤로 가기 기능을 구현하였습니다.

## 2. 프론트엔드 (React)
## 2-1. 프로젝트 구조
#### 프론트엔드의 프로젝트 구조는 다음과 같습니다.
![SRC 구성](https://user-images.githubusercontent.com/54127322/179493411-418bfa3f-33cd-4034-b827-62a04ffdb428.JPG)
![CSS 구성](https://user-images.githubusercontent.com/54127322/179493421-087125d2-dae6-4fed-8081-1edf23a81b9b.JPG)

## 2-2. 컴포넌트 구성
### index.js
```import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
```

Create React App의 기본 구조를 사용하되, react-router-dom의 BrowserRouter를 사용하여 페이지를 새로고침하지 않고도 주소를 변경할 수 있도록 해주고, 현재 주소에 관련된 정보를 props로 조회 및 사용이 가능하도록 하였습니다.

### App.js
```import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appbarv2 from './components/Appbarv2';
import Footer from './components/Footer';
import Mainpage from './pages/Mainpage';
import GenshinIntroduce from './pages/GenshinIntroduce';
import WorldInfopage from './pages/WorldInfopage';
import WorldInfoMond from './pages/WorldInfoMond';
import WorldInfoLiyue from './pages/WorldInfoLiyue';
import WorldInfoInazuma from './pages/WorldInfoInazuma';
import Generalforumv2 from './pages/Generalforumv2';
import GeneralforumViewv2 from './pages/GeneralforumViewv2';
import GeneralforumWriteAndEditv2 from './pages/GeneralforumWriteAndEditv2';
import Generalforum from './unused/Generalforum';

const App = () => {

  // 현재 보여지는 페이지의 경로명을 가져오는 코드.
  // const pathname = window.location.pathname;

  return (
    <div className="App">
      <div>
        <Appbarv2/>
      </div>
      <div>      
        <Routes>
          <Route path='/' element={<Mainpage />}/>
          <Route path='/genshinintroduce' element={<GenshinIntroduce />}/>
          <Route path='/worldinfo' element={<WorldInfopage />}/>
          <Route path='/worldinfo/mondstadt' element={<WorldInfoMond/> }/>
          <Route path='/worldinfo/liyue' element={<WorldInfoLiyue/> }/>  
          <Route path='/worldinfo/inazuma' element={<WorldInfoInazuma/> }/> 
          <Route path='/generalforum' element={<Generalforumv2/> }/>
          <Route path='/generalforum/view/:b_number_pk' element={<GeneralforumViewv2/> }/>
          <Route path='/generalforum/writeoredit' element={<GeneralforumWriteAndEditv2/> }/>
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
```

상단 Appbar와 하단 Footer는 어떤 페이지에서도 고정으로 출력되도록 하고, react-router-dom의 Route, Routes를 이용해 URL의 변경에 따라 필요한 컴포넌트가 렌더링 되도록 하였습니다.

### Appbarv2.js
### Footer.js

```import * as React from 'react';
import { Link } from 'react-router-dom';
import "../style/css/componentsCSS/Appbarv2.css";

const Appbarv2 = () => {
    return (
        <div id='AB-Content-Outer'>
            <div id='AB-Content-Inner-Logoarea'>
                <div id='AB-Content-Inner-Logoarea-Button'>
                    <Link to="/">
                        <div id='AB-Content-Inner-Logoarea-Img'/>
                    </Link> 
                </div>
            </div>

            <div id='AB-Content-Inner-Pagemenuarea'>
                <div id='AB-Content-Inner-Pagemenuarea-Button'>
                    <div id='AB-Content-Inner-Pagemenuarea-Button-box' className='Pagemenuarea-Button-box1'>
                        <Link to="/genshinintroduce">
                            원신
                        </Link>
                    </div>
                    <div id='AB-Content-Inner-Pagemenuarea-Button-box' className='Pagemenuarea-Button-box2'>
                        <Link to="/worldinfo">
                            티바트
                        </Link>
                    </div>
                    <div id='AB-Content-Inner-Pagemenuarea-Button-box' className='Pagemenuarea-Button-box4'>
                        <Link to="/generalforum">
                            자유게시판
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appbarv2;
```

```import * as React from 'react';

import "../style/css/componentsCSS/Footer.css";

import gamelogo from "../style/img/ect/genshinimpectlogo.png";
import playgrade from "../style/img/ect/gameratingresult.png";
import companylogo from "../style/img/ect/hovoverselogo.png";
import discordicon from "../style/img/ect/discordicon3030.png";
import facebookicon from "../style/img/ect/facebookicon3030.png";
import youtubeicon from "../style/img/ect/youtubeicon3030.png";

const Footer = () => {
    return (
        <>
            <footer id='footerarea'>
                <div id='pagelinkarea'>
                    <div id='pagelinkbtn'>
                        <span className='iconbutton'>
                            <a href='https://discord.com/invite/genshinimpact' target='_blank' rel="noopener noreferrer"> 
                                <img src={discordicon} alt="img error!"/> 
                            </a>
                        </span>

                        <span className='iconbutton'>
                            <a href='https://www.facebook.com/Genshinimpact' target='_blank' rel="noopener noreferrer">
                                <img src={facebookicon} alt="img error!"/> 
                            </a>
                        </span>

                        <span className='iconbutton'>
                            <a href='https://www.youtube.com/c/GenshinImpact' target='_blank' rel="noopener noreferrer"> 
                                <img src={youtubeicon} alt="img error!"/> 
                            </a>                        
                        </span>
                    </div>
                </div>

                <div id='contentarea'>
                    <div id='gamelogoarea'>
                        <img src={gamelogo} alt='img error!'/>
                    </div>

                    <div id='generalconditionsarea'>
                        <span className='linkbutton'>
                            <a className='link' href='https://genshin.hoyoverse.com/ko/company/privacy' target='_blank' rel="noopener noreferrer"> 
                                개인정보처리방침
                            </a>   
                        </span>

                        <span className='linkbutton'>
                            <a className='link' href='https://genshin.hoyoverse.com/ko/company/terms' target='_blank' rel="noopener noreferrer"> 
                                이용약관
                            </a> 
                        </span>

                        <span className='linkbutton'>
                            <a className='link' href='https://www.hoyoverse.com/ko-kr/about-us?utm_source=genshin&utm_medium=footer' target='_blank' rel="noopener noreferrer"> 
                                About Us
                            </a> 
                        </span>

                        <span className='linkbutton'>
                            <a className='link' href='https://genshin.hoyoverse.com/ko/company/fund' target='_blank' rel="noopener noreferrer"> 
                            개인정보 수집 및 이용
                            </a> 
                        </span>

                        <span className='linkbutton'>
                            <a className='link' href='mailto:genshincs_kr@hoyoverse.com' target='_blank' rel="noopener noreferrer"> 
                                고객센터
                            </a> 
                        </span>
                    </div>

                    <div id='blankarea'/>

                    <div id='playgradearea'>
                        <img src={playgrade} alt='img error!' width="210" height="70"/>
                    </div>

                    <div id='playrightarea'>
                        "PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.
                        <br/>
                        Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. All other trademarks are the property of their respective owners.
                    </div>

                    <div id='blankarea'/>

                    <div id='companylogoarea'>
                        <img src={companylogo} alt='img error!' width="320" height="60"/>
                    </div>

                    <div id='companyrightarea'>
                        Copyright © COGNOSPHERE. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
```

화면 최상단과 최하단에 고정되어 있는 컴포넌트들입니다. Appbarv2는 기존에 제작한 Appbar의 구성을 완전히 바꾸어 새 컴포넌트를 제작하였기에 구분을 위해 v2라고 이름을 붙여주었습니다. Appbarv2는 웹 페이지 이동을 위한 라우팅 기능을 수행하는 가장 중요한 요소 중 하나로 react-router-dom의 Link를 사용하여 페이지 이동 기능을 수행하고 있습니다. 하단 Footer는 원신 공식 페이지의 그것을 그대로 재현하는 것을 목표로 제작하였습니다.

## 3. 백엔드 (Spring Framework)
## 3-1. 프로젝트 구조
## 3-2. Database 테이블 설계
## 3-3. Controller 구성
## 3-4. DTO 구성
## 3-5. DAO 구성

## 4. 마무리
## 4-1. 모자란 점
## 4-2. 소감

