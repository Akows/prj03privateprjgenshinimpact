# React-GenshinimpactWebPage-Project

##

![main 01 JPG](https://user-images.githubusercontent.com/54127322/179493620-43634588-da3a-4ce2-a61c-1e1b007ad987.jpg)

##

### Made by 이유승.
### contact to 010-3629-3686 / akows141@gmail.com
### GitPage : https://akows.github.io/LYSPrivateProject/

#### (GitPage의 로딩 문제로 인해 처음 접속시 화면이 제대로 출력되지 않습니다. 좌측 상단의 원신 로고 버튼을 클릭하여 페이지를 새로 렌더링해주세요 ㅠㅠ.)

#### (GitPage는 정적 페이지만 배포 가능하여 백엔드 시스템의 구축이 불가능합니다. 따라서 게시판 기능은 하단 2-3. 웹페이지 스크린샷 부분에서 간접적으로 보실수 있도록 해두었습니다. AWS나 카페24 등을 이용한 배포 방식을 알아보고 있으나 현재로써는 백엔드 부분을 직접 살펴볼 수는 없습니다. 죄송합니다 ㅜ)

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


### Mainpage.js

```import React, { useRef } from "react";
import ReactPlayer from "react-player";
import "../style/css/Mainpage.css";

import background from "../style/video/background.mp4";

const Mainpage = () => {
    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();

    // 페이지가 로딩되면 자동적으로 스크롤을 시작 지점으로 이동시키는 기능
    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    // 하단 푸터 버튼의 외부링크 이동 기능
    const moveSony = () => {
        window.open('https://www.playstation.com/ko-kr/games/genshin-impact/');
    }
    const moveAppS = () => {
        window.open('https://apps.apple.com/app/id1517783697');
    }
    const moveGooS = () => {
        window.open('https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact');
    }
    const moveWinS = () => {
        window.open('https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact');
    }

    return (
        <>
            {/* 화면 가로 길이가 일정 이상으로 올라가면 작동 (반응형 웹) */}
            <div id="MG-Content-Videobackground" ref={pagestartpoint}>
                <ReactPlayer
                    url={background}
                    width="100%"
                    height="100%"
                    playing={true}
                    muted={true}
                    loop={true}
                    controls={false}
                />

                <div id="MG-Content-Area">
                    <div id="MG-Content-Area-Logo">
                        
                    </div>
                    <div id="MG-Content-Area-Text">
                        <p>《원신》은 게임 개발사 미호요가 개발한 오픈 월드 어드벤처 게임입니다.</p>

                        <p>이 원소의 힘으로 가득 찬 판타지 대륙 「티바트」에는 </p>

                        <p> 어떤 이야기들이 모험가들을 기다리고 있을까요? </p>

                        <p>귀여운 페이몬과 함께 이 광활한 대지로 모험을 떠나보세요!</p>
                    </div>
                </div>

            </div>

            {/* 화면 가로 길이가 일정 이하로 내려가면 작동 (반응형 웹) */}
            <div id="MG-Content-RWebBackground">
                <div id="MG-Content-RWebArea">
                    <div id="MG-Content-RWebArea-Logo">
                        
                    </div>
                    <div id="MG-Content-RWebArea-Paimon">
                        
                    </div>
                    <div id="MG-Content-RWebArea-Text">
                        <p>페이몬!</p>
                    </div>
                </div>
            </div>


            <div id="MG-Content-Footer">
                <div id="MG-Content-Footer-ButtonArea">
                    <div id="MG-Content-Footer-ButtonArea-Btn" className="MG-Btn1 MG-Btnhover" onClick={moveSony}/>
                    <div id="MG-Content-Footer-ButtonArea-Btn" className="MG-Btn2 MG-Btnhover" onClick={moveAppS}/>
                    <div id="MG-Content-Footer-ButtonArea-Btn" className="MG-Btn3 MG-Btnhover" onClick={moveGooS}/>
                    <div id="MG-Content-Footer-ButtonArea-Btn" className="MG-Btn4 MG-Btnhover" onClick={moveWinS}/>
                </div>
            </div>
        </>
    );
}

export default Mainpage;
```

### Mainpage.css

```/* 프로젝트 메인 페이지 CSS */
/* 원신 폰트 설정 */
@font-face {
    font-family: 'GIfont';
    src: url('../font/ja-jp.ttf') format('truetype');
}

/* 투명화 애니매이션 */
@keyframes ShowUp {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* 아래에서 위로 올라오는 애니매이션 */
@keyframes FadeUp {
    0% {
        opacity: 0;
        transform: translate3d(0, 15%, 0);
    }
    100% {
        opacity: 1;
        transform: translateZ(0);
    }
}

/* 비디오 배경화면 설정 */
/* 비디오 배경화면 설정 */
#MG-Content-Videobackground {
    width: 100%;
    height: 100%;

    overflow: hidden;
    position: relative;

    animation: ShowUp 2s;
}

/* 반응형 배경화면 설정 */
/* 반응형 배경화면 설정 */
#MG-Content-RWebBackground {
    color: black;
    padding: 10px;
    width: 100%;
    height: 100vh;
    position: relative;

    display: none;
}
#MG-Content-RWebBackground::before {
    content: "";
    background-image: url("../img/background/TravelerCelestial.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.7;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}
#MG-Content-RWebBackground > * {
    color: black;
    text-align: center;
    position: relative;
}

/* 배경 화면 위에 배치할 컨텐츠 영역 설정 */
/* 배경 화면 위에 배치할 컨텐츠 영역 설정 */
#MG-Content-Area {
    width: 100%;
    height: 100%;

    position: absolute;

    margin-top: 100px;

    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

/* 컨텐츠 영역 내부 로고 및 텍스트 설정 */
/* 컨텐츠 영역 내부 로고 및 텍스트 설정 */
#MG-Content-Area-Logo {
    width: 100%;
    height: 30%;

    background-image: url("../img/ect/Genshin_Impact_logo.svg.png");
    background-size: 550px 200px;
    background-repeat: no-repeat;
    background-position: center;

    animation: FadeUp 1s;
}
#MG-Content-Area-Text {
    width: 100%;
    height: 70%;

    font-family: 'GIfont';
    font-size: x-large;
    font-weight: 500;

    animation: FadeUp 1s;
}

/* 푸터 버튼 영역 */
/* 푸터 버튼 영역 */
#MG-Content-Footer {
    width: 100%;
    height: 100px;

    background-color: gray;
    border-bottom: white 4.5px solid;
}

#MG-Content-Footer-ButtonArea {
    width: 100%;
    height: 100%;

    padding: 5px;

    display: inline-flex;
    justify-content: center;
}

#MG-Content-Footer-ButtonArea-Btn {
    width: 200px;
    height: 60px;

    margin: 15px;

    border-radius: 10px;

    /* border: 1px black solid; */
}

.MG-Btn1 {
    width: 100%;
    height: 100%;

    background-image: url("../img/ect/sony.png");
    background-size: 200px 60px;
    background-repeat: no-repeat;
    background-position: 0px 0px;
}
.MG-Btn2 {
    width: 100%;
    height: 100%;

    background-image: url("../img/ect/apple.png");
    background-size: 200px 60px;
    background-repeat: no-repeat;
    background-position: 0px 0px;
}
.MG-Btn3 {
    width: 100%;
    height: 100%;

    background-image: url("../img/ect/google.png");
    background-size: 200px 60px;
    background-repeat: no-repeat;
    background-position: 0px 0px;
}
.MG-Btn4 {
    width: 100%;
    height: 100%;

    background-image: url("../img/ect/window.png");
    background-size: 200px 60px;
    background-repeat: no-repeat;
    background-position: 0px 0px;
}

.MG-Btnhover:hover {
    opacity: 0.7;
}

/* 반응형 웹 CSS 설정 */
@media ( max-width: 1200px ) {
    #MG-Content-Area-Logo {
        display: none;
    }
    #MG-Content-Area-Text {
        display: none;
    }
    #MG-Content-Footer {
        display: none;
    }
}

@media ( max-width: 1190px ) {
    #MG-Content-Videobackground {
        display: none;
    }
    #MG-Content-Area-Logo {
        display: none;
    }
    #MG-Content-Area-Text {
        display: none;
    }
    #MG-Content-Footer {
        display: none;
    }

    #MG-Content-RWebBackground {
        display: block;

        animation: ShowUp 2s;
    }
    #MG-Content-RWebArea {
        width: 100%;
        height: 100%;
    
        position: absolute;

        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    #MG-Content-RWebArea-Logo {
        width: 100%;
        height: 25%;
    
        background-image: url("../img/ect/Genshin_Impact_logo.svg.png");
        background-size: 450px 150px;
        background-repeat: no-repeat;
        background-position: center;
    }
    #MG-Content-RWebArea-Paimon {
        width: 100%;
        height: 55%;
    
        background-image: url("../img/character/paimon.png");
        background-size: 500px 650px;
        background-repeat: no-repeat;
        background-position: center;

        animation: FadeUp 1s;
    }
    #MG-Content-RWebArea-Text {
        width: 100%;
        height: 20%;

        font-family: 'GIfont';
        font-size: x-large;
        font-weight: 500;

        animation: FadeUp 1s;
    }
}
```

본 프로젝트의 메인 페이지입니다. 움직이는 배경화면을 구현하기 위해 react-player를 이용하여 영상을 삽입하여 이를 배경이미지로 사용하였습니다. 또한 반응형 웹 기능을 추가하여 페이지 가로 길이가 1200px 이하로 내려갈 경우 배경화면과 출력 문구 등이 변경되도록 하였습니다.

### GenshinIntroduce.js

```import React, { useRef } from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";

import "../style/css/SlickCustomCSS/slick.css";
import "../style/css/SlickCustomCSS/slick-theme.css";

import "../style/css/GenshinIntroduce.css";
import "../style/css/Global.css";

import trailer from "../style/video/trailer.mp4";
import sildeimg1 from "../style/img/gameInfo/silde1.png";
import sildeimg2 from "../style/img/gameInfo/silde2.png";
import sildeimg3 from "../style/img/gameInfo/silde3.png";
import sildeimg4 from "../style/img/gameInfo/silde4.png";
import sildeimg5 from "../style/img/gameInfo/silde5.png";
import sildeimg6 from "../style/img/gameInfo/silde6.png";

import introimg1 from "../style/img/gameInfo/silde2-1.png"; 
import introimg2 from "../style/img/gameInfo/silde2-2.png"; 
import introimg3 from "../style/img/gameInfo/silde2-3.png"; 
import introimg4 from "../style/img/gameInfo/silde2-4.png"; 
import introimg5 from "../style/img/gameInfo/silde2-5.png"; 

import Sliderintro from "../components/Sliderintro";

const GenshinIntroduce = () => {

    const imgset = [
        {
            img1: introimg1,
            img2: introimg2,
            img3: introimg3,
            img4: introimg4,
            img5: introimg5
        }
    ];

    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();
    const trailerpoint = useRef();
    const versioninfopoint = useRef();
    const gamefeaturepoint = useRef();
    const productlaunchpoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    // 페이지 특정 지점으로 이동하는 기능 코드.
    const moveToStart = () => {
        pagestartpoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveToGodIntroduce = () => {
        trailerpoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointroduceKnightsofFavonius = () => {
        versioninfopoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointroduceMondCastle = () => {
        gamefeaturepoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointroduceMondPoint = () => {
        productlaunchpoint.current.scrollIntoView({behavior: 'smooth'});
    };

    // 외부 페이지로 이동하는 코드.
    const movehomepage = () => {
        window.open('https://genshin.hoyoverse.com/ko/');
    }

    // react-slick의 custom 화살표 설정
    // 화살표 커스텀 설정이 실패하여 사용 보류
    const PrevArrow = (props) => {
        const { className, onClick } = props;

        return (
            <div
                className={className}
                id="prevarrow"
                onClick={onClick}
            />
        );
    }

    const NextArrow = (props) => {
        const { className, onClick } = props;

        return (
            <div
                className={className}
                id="nextarrow"
                onClick={onClick}
            />
        );
    }

    // react-slick 기본 설정
    const settings = {
        slide: 'div', 
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <div className="EV-BackgroundArea EV-BackgroundIMG1" ref={pagestartpoint}>
                <div id='EV-Content-Outer-Main'>
                    <div id="EV-Content-ContentAreaInnerorizontal">
                        <div id='EV-Content-Outer-Main-Logo'>
                            <div id='EV-Content-Outer-Main-Logoimg'/>
                        </div>

                        <div id='EV-Content-Outer-Main-Title'>
                            <div id='EV-Content-Outer-Main-Titlebtn' onClick={movehomepage}/>
                            <div id='EV-Content-Outer-Main-Titleimg'/>                           
                        </div>
                    </div>
                </div>

                <div id='EV-Content-Outer-Contents'>
                    <div id='EV-Content-Outer-Content-Container'>

                        <div id="EV-Content-Outer-Content-ContentsArea">

                            <div id="EV-Content-Outer-Content-PV" ref={trailerpoint}>
                                <div id="EV-Content-ContentAreaInnerverticality">
                                    <div id="EV-Content-Outer-Content-Movietitle">
                                        <div id="EV-Content-Outer-Content-Movietitleplaybtn"/>
                                    </div>

                                    <div id="EV-Content-Outer-Content-Movie">
                                        <div id="EV-Content-Outer-Content-trailer">
                                            <ReactPlayer
                                                url={trailer}
                                                width="100%"
                                                height="100%"
                                                playing={true}
                                                muted={true}
                                                loop={true}
                                                controls={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="EV-Content-Outer-Content-VersionInfo" ref={versioninfopoint}>
                                <div id="EV-Content-ContentAreaInnerverticality">
                                    <div id="EV-Content-Outer-Content-VItitle"/>

                                        <div id="EV-Content-Outer-Content-VI">
                                            <div id="EV-Content-ContentAreaInnerorizontal">
                                                
                                                <div id="EV-Content-Outer-Content-VI-Silde">
                                                    <div>
                                                        <h2>2.7 정보</h2>

                                                        <Slider {...settings}>
                                                            <img src={sildeimg1} alt="데이터 없음."/>
                                                            <img src={sildeimg2} alt="데이터 없음."/>
                                                            <img src={sildeimg3} alt="데이터 없음."/>
                                                            <img src={sildeimg4} alt="데이터 없음."/>
                                                            <img src={sildeimg5} alt="데이터 없음."/>
                                                            <img src={sildeimg6} alt="데이터 없음."/>
                                                        </Slider>
                                                    </div>
                                                </div>

                                                {/* react-slick 라이브러리에서 이미지를 사용한 div 태그가 인식이 되지 않아 사용 보류. */}
                                                {/* <div id="EV-Content-Outer-Content-VI-Silde1" className="Sildefile"/>
                                                <div id="EV-Content-Outer-Content-VI-Silde2" className="Sildefile"/>
                                                <div id="EV-Content-Outer-Content-VI-Silde3" className="Sildefile"/>
                                                <div id="EV-Content-Outer-Content-VI-Silde4" className="Sildefile"/>
                                                <div id="EV-Content-Outer-Content-VI-Silde5" className="Sildefile"/>
                                                <div id="EV-Content-Outer-Content-VI-Silde6" className="Sildefile"/> */}

                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div id="EV-Content-Outer-Content-GameFeature" ref={gamefeaturepoint}>
                                <div id="EV-Content-ContentAreaInnerverticality">
                                    <div id="EV-Content-Outer-Content-GFtitle">

                                    </div>

                                    <div id="EV-Content-Outer-Content-GF">
                                        <div id="EV-Content-Outer-Content-Slide">   
                                            <Sliderintro imgs={imgset}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="EV-Content-Outer-Content-Productlaunch" >
                                <div id="EV-Content-ContentAreaInnerverticality">
                                    <div id="EV-Content-Outer-Content-PI" ref={productlaunchpoint}>
                                        <div id="EV-Content-Outer-Content-PI-MainLogo"/>
                                        <div id="EV-Content-Outer-Content-PI-Slogan"/>
                                        <div id="EV-Content-Outer-Content-PI-Launchinfo"/>
                                        <div id="EV-Content-Outer-Content-PI-Platforminfo-Paimon"/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='EV-Content-MenuRemote'>
                    <div id="EV-Content-MenuRemote-Icon" onClick={moveToStart}/>

                    <div id="EV-Content-MenuRemote-Movebtu" onClick={moveToGodIntroduce}>
                        <div id="EV-Content-MenuRemote-Movebtu-Textbox">PV</div>
                    </div>
                    <div id="EV-Content-MenuRemote-Movebtu" onClick={moveTointroduceKnightsofFavonius}>
                        <div id="EV-Content-MenuRemote-Movebtu-Textbox">버전정보</div>
                    </div>
                    <div id="EV-Content-MenuRemote-Movebtu" onClick={moveTointroduceMondCastle}>
                        <div id="EV-Content-MenuRemote-Movebtu-Textbox">게임특징</div>
                    </div>
                    <div id="EV-Content-MenuRemote-Movebtu" onClick={moveTointroduceMondPoint}>
                        <div id="EV-Content-MenuRemote-Movebtu-Textbox">출시정보</div>
                    </div>
                </div>

            </div>

            
        </>
    )
}

export default GenshinIntroduce;
```

### GenshinIntroduce.css

```/* 원신 소개 페이지 CSS */

/* 페이지 배경화면 설정 */
/* 배경화면 위에 흰색 투명 바탕의 컨텐츠 영역이 배치됨. */

/* 페이지 배경화면 설정 */
/* 페이지 배경화면 설정 */
.EV-BackgroundArea {
    color: black;
    padding: 10px;
    width: 100%;
    height: 100%;
    position: relative;
}
.EV-BackgroundArea > * {
    color: black;
    text-align: center;
    position: relative;
}

/* 페이지 배경화면 - 배경 이미지 설정 */
/* 페이지 배경화면 - 배경 이미지 설정 */
.EV-BackgroundIMG1::before {
    content: "";
    /* background-attachment: fixed; */
    background-image: url("../img/background/2.7b.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}

/* 컨텐츠 배치구역 설정 */
/* 컨텐츠 배치구역 설정 */
/* 상단 이미지 배치구역 */
#EV-Content-Outer-Main {
    width: 1950px;
    height: 1050px;
    margin-top: 80px;
    display: inline-block;
}

#EV-Content-Outer-Main > * {
    color: black;
    text-align: center;
    position: relative;
    display: inline-block;
}

#EV-Content-Outer-Main::before {
    content: "";
    background-color: white;
    opacity: 0;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-radius: 20px;
}

/* 하단 컨텐츠 영역 */
#EV-Content-Outer-Contents {
    width: 1750px;
    height: 6000px;
    margin-top: 20px; 
    display: inline-block;
}

/* 실제 컨텐츠 배치구역 */
#EV-Content-Outer-Content-Container {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    display: inline-block;
}

#EV-Content-Outer-Content-Container > * {
    color: black;
    text-align: center;
    position: relative;
    display: inline-block;
}

#EV-Content-Outer-Content-Container::before {
    content: "";
    background-color: white;
    opacity: 0;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-radius: 20px;
}

/* 페이지 이동용 리모콘 CSS */
#EV-Content-MenuRemote {
    width: 110px;
    height: 320px;
    top: 180px; 
    right: 50px;
    /* margin-left: 1985px; */

    background-color: #EBF5FF;
    border-radius: 20px;
    opacity: 0.8;

    position: fixed; 
    text-align: center;
}

#EV-Content-MenuRemote-Icon {
    width: 100px;
    height: 100px;

    margin-left: 5px;
    
    background-image: url("../img/ect/genshinimpectlogo.png");
    background-size: 180px 90px;
    background-repeat: no-repeat;
    background-position: -40px 10px;
}

#EV-Content-MenuRemote-Movebtu {
    width: 80px;
    height: 40px;

    margin-top: 9px;
    margin-left: 13px;

    font-family: 'GIfont';
    font-size: large;
    font-weight: 500;

    border-radius: 30px;

    border: 2px #EBF5FF solid;
}
#EV-Content-MenuRemote-Movebtu:hover {
    background-color: #464646;
    color: white;
}
#EV-Content-MenuRemote-Movebtu:active {
    background-color: #a0a0a0;
    color: white;
}
#EV-Content-MenuRemote-Movebtu-Textbox {
    margin-top: 10px;
}

/* 실제컨텐츠 배치영역 설정 - 구역 틀 */
/* 실제컨텐츠 배치영역 설정 - 구역 틀 */
#EV-Content-Outer-Content-ContentsArea {
    width: 97%;
    height: 99%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

/* div들을 중앙 기준 수직 정렬할 때 사용할 CSS */
#EV-Content-ContentAreaInnerverticality {
    width: 100%;
    height: 100%;

    display: inline-flex;
    flex-direction: column;
    align-items: center;
}

/* div들을 중앙 기준 수평 정렬할 때 사용할 CSS */
#EV-Content-ContentAreaInnerorizontal{
    width: 100%;
    height: 100%;

    display: flex;
}

#EV-Content-Outer-Main-Logo {
    width: 25%;
    height: 100%;

    /* border: 2px black solid; */
}

#EV-Content-Outer-Main-Logoimg {
    width: 100%;
    height: 100%;

    background-image: url("../img/ect/genshinimpectlogo\(blue\).png");
    background-size: 320px 200px;
    background-repeat: no-repeat;
    background-position: 100px 0;
}

#EV-Content-Outer-Main-Titlebtn {
    width: 310px;
    height: 70px;

    margin-left: 1200px;

    background-image: url("../img/ect/movehomepagebtn.png");
    background-size: 310px 70px;
    background-repeat: no-repeat;
    background-position: 0 0;

    /* border: 2px black solid; */
}

#EV-Content-Outer-Main-Title {
    width: 100%;
    height: 100%;

    /* border: 2px black solid; */
}

#EV-Content-Outer-Main-Titleimg {
    width: 100%;
    height: 100%;

    background-image: url("../img/ect/2.7maintitle.png");
    background-size: 900px 400px;
    background-repeat: no-repeat;
    background-position: 650px 500px;
}

/* 하단 컨텐츠 배치영역 설정 */
/* 하단 컨텐츠 배치영역 설정 */
#EV-Content-Outer-Content-PV {
    width: 100%;
    height: 20%;

    /* 영역 확인용 설정 */
    /* border: 2px black solid; */
}
#EV-Content-Outer-Content-VersionInfo{
    width: 100%;
    height: 25%;

    /* 영역 확인용 설정 */
    /* border: 2px black solid; */
}

#EV-Content-Outer-Content-GameFeature{
    width: 100%;
    height: 20%;

    /* 영역 확인용 설정 */
    /* border: 2px black solid; */
}

#EV-Content-Outer-Content-Productlaunch {
    width: 100%;
    height: 35%;

    /* 영역 확인용 설정 */
    /* border: 2px black solid; */
}

/* 하단 컨텐츠 내부영역 설정 */
/* 하단 컨텐츠 내부영역 설정 */

/* 영상 영역 설정 */
#EV-Content-Outer-Content-Movietitle {
    width: 95%;
    height: 20%;

    margin: 20px;

    background-image: url("../img/ect/playbtuconti.png");
    background-size: 500px 100px;
    background-repeat: no-repeat;
    background-position: center;

    /* 영역 확인용 설정 */
    /* border: 2px black solid; */
}
#EV-Content-Outer-Content-Movietitleplaybtn {
    width: 100%;
    height: 100%;

    opacity: 0.8;

    background-image: url("../img/ect/play.png");
    background-size: 50px 50px;
    background-repeat: no-repeat;
    background-position: center;
}

#EV-Content-Outer-Content-Movie {
    width: 95%;
    height: 80%;

    margin: 20px;

    display: inline-flex;
    flex-direction: column;
    align-items: center;

    /* 영역 확인용 설정 */
    /* border: 2px black solid; */
}
#EV-Content-Outer-Content-trailer {
    width: 85%;
    height: 85%;

    margin: 20px;
}

/* 버전 정보 영역 설정 */
#EV-Content-Outer-Content-VItitle {
    width: 95%;
    height: 15%;

    background-image: url("../img/ect/VersionInfo.png");
    background-size: 1500px 200px;
    background-repeat: no-repeat;
    background-position: center;

    /* 영역 확인용 설정 */
    /* border: 2px black solid; */
}

#EV-Content-Outer-Content-VI {
    width: 100%;
    height: 85%;

    margin: 10px;

    /* 영역 확인용 설정 */
    /* border: 2px black solid; */
}

#EV-Content-Outer-Content-VI-Silde {
    width: 100%;
    height: 100%;

    margin-top: 20px;

    font-family: 'GIfont';
    font-size: x-large;
    font-weight: 200;
    color: white;

    /* 영역 확인용 설정 */
    /* border: 2px black solid; */
}

#EV-Content-Outer-Content-VI-Sildediv {
    width: 100px;
    height: 100px;

        /* 영역 확인용 설정 */
    /* border: 2px black solid; */
}

.Sildefile {
    width: 100%;
    height: 100%;

    background-size: 500px 750px;
    background-repeat: no-repeat;
    background-position: center;
}

#EV-Content-Outer-Content-VI-Silde1 {
    background-image: url("../img/gameInfo/silde1.png");
}
#EV-Content-Outer-Content-VI-Silde2 {
    background-image: url("../img/gameInfo/silde2.png");
}
#EV-Content-Outer-Content-VI-Silde3 {
    background-image: url("../img/gameInfo/silde3.png");
}
#EV-Content-Outer-Content-VI-Silde4 {
    background-image: url("../img/gameInfo/silde4.png");
}
#EV-Content-Outer-Content-VI-Silde5 {
    background-image: url("../img/gameInfo/silde5.png");
}
#EV-Content-Outer-Content-VI-Silde6 {
    background-image: url("../img/gameInfo/silde6.png");
}

/* react-slick의 기존 화살표 안보이도록 조치 */
.slick-next:before {
    display: none;
}
.slick-prev:before {
    display: none;
}

/* react-slick의 커스텀 화살표 */
/* 화살표가 위치하는 영역 크기 조절이 안되어 사용보류 */
#prevarrow {
    width: 100%;
    height: 100%;

    background-image: url("../img/ect/leftbtn.png");
    background-size: 100px 100px;
    background-repeat: no-repeat;
    background-position: 0px, 0px;
}
#nextarrow {
    width: 100%;
    height: 100%;
    
    background-image: url("../img/ect/rightbtn.png");
    background-size: 100px 100px;
    background-repeat: no-repeat;
    background-position: 0px, 0px;
}

/* 게임 특징 영역 설정 */
#EV-Content-Outer-Content-GFtitle {
    width: 95%;
    height: 30%;

    margin: 20px;

    background-image: url("../img/ect/GameFeature.png");
    background-size: 1500px 200px;
    background-repeat: no-repeat;
    background-position: center;

    /* 영역 확인용 설정 */
    /* border: 2px black solid; */
}

#EV-Content-Outer-Content-GF {
    width: 95%;
    height: 80%;

    margin: 20px;

    /* 영역 확인용 설정 */
    /* border: 2px white solid; */
}
#EV-Content-Outer-Content-Slide {
    width: 100%;
    height: 100%;
    margin-left: 325px;
}


/* 게임 출시 정보 영역 설정 */
#EV-Content-Outer-Content-PI {
    width: 95%;
    height: 70%;

    margin-top: 500px;

    /* 영역 확인용 설정 */
    /* border: 2px black solid; */
}

#EV-Content-Outer-Content-PI-MainLogo {
    width: 100%;
    height: 15%;

    margin-top: 50px;

    background-image: url("../img/ect/genshinimpectlogo\(white\).png");
    background-size: 400px 250px;
    background-repeat: no-repeat;
    width: 100%;
    height: 5%;

    background-image: url("../img/ect/gameslogan.png");
    background-size: 1000px 100px;
    background-repeat: no-repeat;
    background-position: center;
}
#EV-Content-Outer-Content-PI-Launchinfo{
    width: 100%;
    height: 15%;

    background-image: url("../img/ect/launchinfo.png");
    background-size: 700px 170px;
    background-repeat: no-repeat;
    background-position: center;
}

#EV-Content-Outer-Content-PI-Platforminfo {
    width: 100%;
    height: 10%;

    display: flex;
    justify-content: center;

}

#EV-Content-Outer-Content-PI-Platforminfo-Paimon {
    width: 100%;
    height: 60%;

    background-image: url("../img/character/paimon.png");
    background-size: 650px 850px;
    background-repeat: no-repeat;
    background-position: center;

    display: none;
}

#EV-Content-Outer-Content-Productlaunch:hover #EV-Content-Outer-Content-PI-Platforminfo-Paimon {
    animation: ShowUp 3s;
    display: block;
}

```

### Sliderintro.js

```import React, { useState, useEffect, useRef } from "react";
import styledComponents from "styled-components";

const Container = styledComponents.div`
    width: 59.6%;
    overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;
const Button = styledComponents.button`
    all: unset;
    margin-top: 20px;
    margin-right: 100px;
    margin-left: 100px;
    border: 1px solid white;
    padding: 0.5em 2em;
    color: white;
    border-radius: 10px;
    &:hover {
        transition: all 0.3s ease-in-out;
        background-color: gray;
        color: #fff;
    }
`;
const SliderContainer = styledComponents.div`
    width: 100%;
    display: flex; //이미지들을 가로로 나열합니다.
`;

const IMG = styledComponents.img`
    width: 100%;
    height: 45vh;
`;

const Sliderintro = (props) => {

    const TOTAL_SLIDES = 4;

    const [currentSlide, setCurrentSlide] = useState(0);

    const slideRef = useRef(null);

    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
            setCurrentSlide(0);
        } 
        else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } 
        else {
            setCurrentSlide(currentSlide - 1);
        }
    }

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
        }, [currentSlide]);

    return (
        <Container>
            {/* {currentSlide} */}
            <SliderContainer ref={slideRef}>
                <IMG src={props.imgs[0].img1} alt="데이터 없음."/>
                <IMG src={props.imgs[0].img2} alt="데이터 없음."/>
                <IMG src={props.imgs[0].img3} alt="데이터 없음."/>
                <IMG src={props.imgs[0].img4} alt="데이터 없음."/>
                <IMG src={props.imgs[0].img5} alt="데이터 없음."/>
            </SliderContainer>
            <Button onClick={prevSlide}>Prev</Button>
            <Button onClick={nextSlide}>Next</Button>
        </Container>
    )
}

export default Sliderintro;
```

원신 공식 게임 소개 페이지를 그대로 재현해볼 것을 목표로 만든 게임 소개 페이지입니다. 메인페이지에서 사용하였던 react-player로 게임 트레일러 영상을 삽입하였으며, 이미지 슬라이드 기능을 구현하면서 react-slick 라이브러리를 사용해보고, 구글링으로 찾은 슬라이드 코드를 클론코딩하여 사용해보았습니다. 클론코딩 슬라이드 기능의 경우 styled-components를 사용하여 JS 파일 내부에서 CSS 속성을 설정해보았습니다. 또한 페이지를 각 기능별로 영역을 나누고 우측에 각 영역으로 바로 이동가능한 영역 이동 기능을 수행하는 리모컨을 구현하였습니다.



## 3. 백엔드 (Spring Framework)
## 3-1. 프로젝트 구조
## 3-2. Database 테이블 설계
## 3-3. Controller 구성
## 3-4. DTO 구성
## 3-5. DAO 구성

## 4. 마무리
## 4-1. 모자란 점
## 4-2. 소감

