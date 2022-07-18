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
##### 2-3. 웹페이지 스크린샷

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
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import React from 'react';
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

</div>
</details>

Create React App의 기본 구조를 사용하되, react-router-dom의 BrowserRouter를 사용하여 페이지를 새로고침하지 않고도 주소를 변경할 수 있도록 해주고, 현재 주소에 관련된 정보를 props로 조회 및 사용이 가능하도록 하였습니다.

### App.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import * as React from 'react';
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

</div>
</details>

상단 Appbar와 하단 Footer는 어떤 페이지에서도 고정으로 출력되도록 하고, react-router-dom의 Route, Routes를 이용해 URL의 변경에 따라 필요한 컴포넌트가 렌더링 되도록 하였습니다.

## 

### Appbarv2.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import * as React from 'react';
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

</div>
</details>

### Appbarv2.css
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```css
/* 상단 메뉴바 CSS */

/* 원신 폰트 설정 */
@font-face {
    font-family: 'GIfont';
    src: url('../../font/ja-jp.ttf') format('truetype');
}

/* ul, li 태그의 기본 스타일을 제거 */
ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
}

#AB-Content-Outer{
    width: 100%;
    height: 70px;

    position: fixed;
    z-index: 999;

    background-color: black;
    opacity: 0.7;
}
#AB-Content-Outer > * {
    float: left;
    display : inline-flex;
}


#AB-Content-Inner-Logoarea {
    width: 12%;
    height: 100%;

    background-image: url("../../img/ect/genshinimpectlogo.png");
    background-size: 150px 70px;
    background-repeat: no-repeat;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
#AB-Content-Inner-Pagemenuarea {
    width: 78.5%;
    height: 100%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
#AB-Content-Inner-Usermenuarea {
    width: 8%;
    height: 100%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
#AB-Content-Inner-ResponsiveWebMenuarea {
    width: 0%;
    height: 0%;

    display: none;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

#AB-Content-Inner-Logoarea-Button {
    width: 100%;
    height: 100%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
    #AB-Content-Inner-Logoarea-Img {
        width: 90%;
        height: 90%;

        margin: auto;
        padding: 10px;

        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    
#AB-Content-Inner-Pagemenuarea-Button {
    width: 100%;
    height: 100%;
    margin-left: 60px;
    margin-top: 24px;
    display : inline-flex;
}
    #AB-Content-Inner-Pagemenuarea-Button-box {
        margin-left: 20px;
    }

    #AB-Content-Inner-Pagemenuarea-Button-box > * {
        color: white;

        text-decoration: none;
        font-family: 'GIfont';
        font-size: large;
        font-weight: 100;
    
        /* 커서가 올라가면 글자 뒤에 배경색이 띄워지는 CSS (아래 절반만 배경)  */
        /* background-image: linear-gradient(transparent calc(100% - 3px), #000 3px); */
    }

    #AB-Content-Inner-Pagemenuarea-Button-box > *:hover {
        line-height: 1.2;
        text-shadow: 0 0 10px #fff, 0 0 20px #fff;

        /* 커서가 올라가면 글자 뒤에 배경색이 띄워지는 CSS (아래 절반만 배경)  */
        /* background-image: linear-gradient(transparent 60%, gray 40%); */
    }

    .Pagemenuarea-Button-box1 > *:hover {
        border-bottom: 3px solid red; 
    }
    .Pagemenuarea-Button-box2 > *:hover {
        border-bottom: 3px solid blue; 
    }
    .Pagemenuarea-Button-box3 > *:hover {
        border-bottom: 3px solid yellow; 
    }
    .Pagemenuarea-Button-box4 > *:hover {
        border-bottom: 3px solid green; 
    }

#AB-Content-Inner-Usermenu-Button {
    width: 90%;
    height: 90%;

    margin-top: 5px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid white; */
}
#AB-Content-Inner-Usermenu-Button-box {
    width: 120px;
    height: 50px;

    margin-top: 20px;
}

#AB-Content-Inner-Usermenu-Button-box > * {
    color: white;

    text-decoration: none;
    font-family: 'GIfont';
    font-size: large;
    font-weight: 100;

    /* 커서가 올라가면 글자 뒤에 배경색이 띄워지는 CSS (아래 절반만 배경)  */
    /* background-image: linear-gradient(transparent calc(100% - 3px), #000 3px); */
}

#AB-Content-Inner-Usermenu-Button-box > *:hover {
    /* color: red; */
    border-bottom: 3px solid blue; 
    line-height: 1.2;

    text-shadow: 0 0 10px #fff, 0 0 20px #fff;

    /* 커서가 올라가면 글자 뒤에 배경색이 띄워지는 CSS (아래 절반만 배경)  */
    /* background-image: linear-gradient(transparent 60%, gray 40%); */
}

/* 하단 메뉴를 숨김, 커서가 올라갈 때에만 메뉴가 드러나도록 조치 */
#AB-Content-Inner-Usermenu-Button-box-li {
    width: 50%;
    height: 50%;
    position: relative;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid white; */
}

#AB-Content-Inner-Usermenu-Button-box-li-ul {
    background: black;
    position: absolute;
    visibility: hidden;

    opacity: 0;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid white; */
}

#AB-Content-Inner-Usermenu-Button-box-li:hover #AB-Content-Inner-Usermenu-Button-box-li-ul {
    opacity: 1;
    visibility: visible;
}

/* 반응형 웹 CSS 설정 */
/* 950px 이하에서는 유저 메뉴가 사라지도록 */
@media ( max-width: 950px ) {
    #AB-Content-Inner-Logoarea {
        width: 15%;
        height: 100%;
    
        background-image: url("../../img/ect/genshinimpectlogo.png");
        background-size: 150px 70px;
        background-repeat: no-repeat;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }

    #AB-Content-Inner-Pagemenuarea {
        width: 85%;
        height: 100%;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    
    #AB-Content-Inner-Usermenuarea {
        width: 0%;
        height: 0%;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }

    #AB-Content-Inner-ResponsiveWebMenuarea {
        width: 0%;
        height: 0%;
    }
}

/* 700px 이하에서는 페이지 메뉴도 사라지도록 */
@media ( max-width: 700px ) {
    #AB-Content-Inner-Logoarea {
        width: 20%;
        height: 100%;
    
        background-image: url("../../img/ect/genshinimpectlogo.png");
        background-size: 120px 60px;
        background-repeat: no-repeat;
        background-position: 0px 5px;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    
    #AB-Content-Inner-Pagemenuarea {
        width: 80%;
        height: 100%;

        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    
    #AB-Content-Inner-Usermenuarea {
        width: 0%;
        height: 0%;

        display: none;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }

    /* 반응형 전용 메뉴 CSS */
    /* hover 사용시 원인불명의 CSS 충돌 현상이 생겨 해결시까지 사용 중단 */
    #AB-Content-Inner-ResponsiveWebMenuarea {
        width: 0%;
        height: 0%;
    }
    #AB-Content-Inner-ResponsiveWebMenuarea-Button-box {
        width: 100px;
        height: 45px;
    
        margin-top: 25px;
    }
    
    #AB-Content-Inner-ResponsiveWebMenuarea-Button-box > * {
        color: white;
    
        text-decoration: none;
        font-family: 'GIfont';
        font-size: large;
        font-weight: 100;
    
        /* 커서가 올라가면 글자 뒤에 배경색이 띄워지는 CSS (아래 절반만 배경)  */
        /* background-image: linear-gradient(transparent calc(100% - 3px), #000 3px); */
    }
    
    #AB-Content-Inner-ResponsiveWebMenuarea-Button-box > *:hover {
        /* color: red; */
        border-bottom: 3px solid blue; 
        line-height: 1.2;
    
        text-shadow: 0 0 10px #fff, 0 0 20px #fff;
    
        /* 커서가 올라가면 글자 뒤에 배경색이 띄워지는 CSS (아래 절반만 배경)  */
        /* background-image: linear-gradient(transparent 60%, gray 40%); */
    }
    
    /* 하단 메뉴를 숨김, 커서가 올라갈 때에만 메뉴가 드러나도록 조치 */

    
    #AB-Content-Inner-ResponsiveWebMenuarea-Button-box-li-ul {
        background: black;

        position: absolute;
        visibility: hidden;

        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid white; */
    }
    
    #AB-Content-Inner-ResponsiveWebMenuarea-Button-box-li:hover #AB-Content-Inner-ResponsiveWebMenuarea-Button-box-li-ul {
        visibility: visible;
    }
}
```
</div>
</details>

### Footer.css
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```css
#footerarea {
    width: 100%;
    height: 500px;
    background: linear-gradient(90deg, rgba(9,9,9,1) 0%, rgba(0,0,0,1) 51%, rgba(129,129,129,1) 100%);
}

#pagelinkarea {
    width: 100%;
    height: 8%;
    background: linear-gradient(90deg, rgba(108,108,108,0.5270483193277311) 0%, rgba(217,217,217,1) 100%);
    text-align: left;
    display: inline-block;
}
#pagelinkbtn {
    width: 100%;
    height: 100%;

    margin-top: 5px;
}
    #pagelinkarea > a {
        text-decoration: none;
    }

    .iconbutton{
        margin: 10px;
        height: 100%;
        text-decoration: none;
    }

#contentarea {
    width: 100%;
    height: 92%;
}
    #gamelogoarea {
        padding: 10px;
        height: 8%;
    }
    #generalconditionsarea {
        padding: 10px;
        height: 8%;
        margin-top: 40px;
        color: gray;
    }
    .linkbutton{
        width: 100px;
        height: 80px;
        padding: 10px;
    }

    .link{
        width: 100px;
        height: 80px;
        padding: 10px;
        color: gray;
        text-decoration: none;
    }

    #playgradearea {
        height: 15%;
    }
    #playrightarea {
        height: 13%;
        margin-top: 30px;
        color: gray;
        font-size: small;
    }
    #companylogoarea {
        height: 16%;
    }
    #companyrightarea {
        height: 14%;
        color: white;
        font-size: small;
    }

    #blankarea {
        height: 10%;
        display: none;
    }

    @media ( max-width: 1190px ) {
        #playrightarea {
            display: none;
        }
        #blankarea {
            display: block;
        }
    }
```
</div>
</details>

### Footer.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import * as React from 'react';

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

</div>
</details>

화면 최상단과 최하단에 고정되어 있는 컴포넌트들입니다. Appbarv2는 기존에 제작한 Appbar의 구성을 완전히 바꾸어 새 컴포넌트를 제작하였기에 구분을 위해 v2라고 이름을 붙여주었습니다. Appbarv2는 웹 페이지 이동을 위한 라우팅 기능을 수행하는 가장 중요한 요소 중 하나로 react-router-dom의 Link를 사용하여 페이지 이동 기능을 수행하고 있습니다. 하단 Footer는 원신 공식 페이지의 그것을 그대로 재현하는 것을 목표로 제작하였습니다.

## 

### Mainpage.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import React, { useRef } from "react";
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

</div>
</details>

### Mainpage.css
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```css
/* 프로젝트 메인 페이지 CSS */
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

</div>
</details>

본 프로젝트의 메인 페이지입니다. 움직이는 배경화면을 구현하기 위해 react-player를 이용하여 영상을 삽입하여 이를 배경이미지로 사용하였습니다. 또한 반응형 웹 기능을 추가하여 페이지 가로 길이가 1200px 이하로 내려갈 경우 배경화면과 출력 문구 등이 변경되도록 하였습니다.

## 

### GenshinIntroduce.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import React, { useRef } from "react";
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

</div>
</details>

### GenshinIntroduce.css
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```css
/* 원신 소개 페이지 CSS */

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

</div>
</details>

### Sliderintro.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import React, { useState, useEffect, useRef } from "react";
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

</div>
</details>

원신 공식 게임 소개 페이지를 그대로 재현해볼 것을 목표로 만든 게임 소개 페이지입니다. 메인페이지에서 사용하였던 react-player로 게임 트레일러 영상을 삽입하였으며, 이미지 슬라이드 기능을 구현하면서 react-slick 라이브러리를 사용해보고, 구글링으로 찾은 슬라이드 코드를 클론코딩하여 사용해보았습니다. 클론코딩 슬라이드 기능의 경우 styled-components를 사용하여 JS 파일 내부에서 CSS 속성을 설정해보았습니다. 또한 페이지를 각 기능별로 영역을 나누고 우측에 각 영역으로 바로 이동가능한 영역 이동 기능을 수행하는 리모컨을 구현하였습니다.

## 

### WorldInfopage.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import React, { useRef } from "react";

import InazumaBannerVertical from "../components/banner/InazumaBannerVertical";
import LiyueBannerVertical from "../components/banner/LiyueBannerVertical";
import MondBannerVertical from "../components/banner/MondBannerVertical";

import "../style/css/WorldInfopage.css";
import "../style/css/Global.css";

const WorldInfopage = () => {
    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    return (
        <>
            <div id="WINF-Background" ref={pagestartpoint}>
                <div id='WINF-Content-outer'>
                    <div id='WINF-Content-ContentArea'>
                        <div id="WINF-Content-Bannarouter">
                            <MondBannerVertical/>
                            <LiyueBannerVertical/>
                            <InazumaBannerVertical/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorldInfopage;
```

</div>
</details>

### WorldInfopage.css
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```css
/* 월드 소개 페이지 CSS */

/* 페이지 배경화면 설정 */
/* 배경화면 위에 흰색 투명 바탕의 컨텐츠 영역이 배치됨. */
#WINF-Background {
    color: black;
    padding: 10px;
    width: 100%;
    height: 100vh;
    position: relative;
}
#WINF-Background::before {
    content: "";
    background-image: url("../img/background/ConsulTravelerPaimonTeyvat.png");
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
#WINF-Background > * {
    color: black;
    text-align: center;
    position: relative;
}

#WINF-Content-outer {
    width: 1600px;
    height: 1050px;
    margin-top: 80px;
    display: inline-block;
}

#WINF-Content-outer > * {
    color: black;
    text-align: center;
    position: relative;
    display: inline-block;
}

#WINF-Content-outer::before {
    content: "";
    background-color: white;
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-radius: 20px;
}

#WINF-Content-ContentArea {
    margin: 50px;
    width: 92%;
    height: 90%;
}

#WINF-Content-Bannarouter {
    width: 100%;
    height: 100%;      
    display: inline-flex;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
```

</div>
</details>

월드 소개 페이지입니다. SPA 구조의 근본적인 특징 때문인지 페이지 이동시 스크롤의 위치가 초기화되지 않아 useRef를 사용해 페이지 최상단에 포인트를 지정하고 useEffect를 이용해 페이지 이동시 스크롤의 위치가 페이지 최상단으로 이동하도록 하였습니다. 월드 소개 페이지는 각 세부 소개 페이지로 넘어가기 전에 보여지는 페이지로 수직 배너를 만들어 보다 생동감 있는 입장 버튼을 구현하였습니다.

## 

### MondBannerVertical.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import { Link } from "react-router-dom";
import "../../style/css/BannerCSS/MondBannerVertical.css";

const MondBannerVertical = () => {
    return (
        <div id="MBannerVer-Outer">
            <Link to={"/worldinfo/mondstadt"}>
            <div id="MBannerVer-Emblem"></div>
            <div id="MBannerVer-Text">
                몬드성
                <div id="MBannerVer-HoverIMG"></div>
            </div>
            </Link>
        </div>
    )
};

export default MondBannerVertical;
```
</div>
</details>

### MondBannerVertical.css
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```css
/* 몬드 배너 */
/* 몬드 배너 */
#MBannerVer-Outer {
    width: 33.3%;
    height: 100%;

    background-image: url("../../img/background/city/Mondstadt.jpg");
    background-size: 1800px 1000px;
    background-repeat: no-repeat;
    background-position: -400px 0px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
#MBannerVer-Text {
    width: 100%;
    height: 100%;

    color: white;
    font-family: 'GIfont';
    font-size: xx-large;
    font-weight: 500;

    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;

    display: none;
}

#MBannerVer-Emblem {
    width: 100%;
    height: 25%;
    
    background-image: url("../../img/emblem/Emblem_Mondstadt.webp");
    background-size: 250px 250px;
    background-repeat: no-repeat;
    background-position: 120px 0px;
    display: none;
}
#MBannerVer-HoverIMG {
    width: 100%;
    height: 75%;
    
    background-image: url("../../img/character/Character_Venti_Full_Wish.webp");
    background-size: 900px 900px;
    background-repeat: no-repeat;
    background-position: -200px -120px;
    display: none;
}

#MBannerVer-Outer:hover #MBannerVer-Emblem {
    display: block;
    animation: fadeInUp 0.6s;
}
#MBannerVer-Outer:hover #MBannerVer-HoverIMG {
    display: block;
    animation: ShowUp 0.6s;
}
#MBannerVer-Outer:hover #MBannerVer-Text {
    display: block;
    animation: ShowUp 0.6s;
}
```

</div>
</details>

### LiyueBannerVertical.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import { Link } from "react-router-dom";
import "../../style/css/BannerCSS/LiyueBannerVertical.css";

const LiyueBannerVertical = () => {
    return (
        <div id="LBannerVer-Outer">
            <Link to={"/worldinfo/liyue"}>
            <div id="LBannerVer-Emblem"></div>
            <div id="LBannerVer-Text">
                리월항
                <div id="LBannerVer-HoverIMG"></div>
            </div>
            </Link>
        </div>
    )
};

export default LiyueBannerVertical;
```

</div>
</details>

### LiyueBannerVertical.css
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```css
/* 리월 배너 */
/* 리월 배너 */
#LBannerVer-Outer {
    width: 33.3%;
    height: 100%;
    
    background-image: url("../../img/background/city/Liyue.jpg");
    background-size: 1800px 1000px;
    background-repeat: no-repeat;
    background-position: -180px 0px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
#LBannerVer-Text {
    width: 100%;
    height: 100%;

    color: white;
    font-family: 'GIfont';
    font-size: xx-large;
    font-weight: 500;

    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;

    display: none;
}

#LBannerVer-Emblem {
    width: 100%;
    height: 25%;
    
    background-image: url("../../img/emblem/Emblem_Liyue.webp");
    background-size: 250px 250px;
    background-repeat: no-repeat;
    background-position: 121px 0px;
    display: none;
}
#LBannerVer-HoverIMG {
    width: 100%;
    height: 71%;
    
    background-image: url("../../img/character/Character_Zhongli_Full_Wish.webp");
    background-size: 1200px 1450px;
    background-repeat: no-repeat;
    background-position: -300px -80px;
    display: none;
}

#LBannerVer-Outer:hover #LBannerVer-Emblem {
    display: block;
    animation: fadeInUp 0.6s;
}
#LBannerVer-Outer:hover #LBannerVer-HoverIMG {
    display: block;
    animation: ShowUp 0.6s;
}
#LBannerVer-Outer:hover #LBannerVer-Text {
    display: block;
    animation: ShowUp 0.6s;
}
```

</div>
</details>

### InazumaBannerVertical.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import { Link } from "react-router-dom";
import "../../style/css/BannerCSS/InazumaBannerVertical.css";

const InazumaBannerVertical = () => {
    return (
        <div id="IBannerVer-Outer">
            <Link to={"/worldinfo/inazuma"}>
            <div id="IBannerVer-Emblem"></div>
            <div id="IBannerVer-Text">
                이나즈마섬
                <div id="IBannerVer-HoverIMG"></div>
            </div>
            </Link>
        </div>
    )
};

export default InazumaBannerVertical;
```

</div>
</details>

### InazumaBannerVertical.css
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```css
/* 이나즈마 배너 */
/* 이나즈마 배너 */
#IBannerVer-Outer{
    width: 33.3%;
    height: 100%;
    
    background-image: url("../../img/background/city/Inazuma.jpg");
    background-size: 1800px 1000px;
    background-repeat: no-repeat;
    background-position: -1150px 0px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
#IBannerVer-Text {
    width: 100%;
    height: 100%;

    color: white;
    font-family: 'GIfont';
    font-size: xx-large;
    font-weight: 500;
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;

    display: none;
}

#IBannerVer-Emblem {
    width: 100%;
    height: 25%;
    
    background-image: url("../../img/emblem/Emblem_Inazuma.webp");
    background-size: 250px 250px;
    background-repeat: no-repeat;
    background-position: 122px 0px;
    display: none;
}
#IBannerVer-HoverIMG {
    width: 100%;
    height: 75%;
    
    background-image: url("../../img/character/Character_Raiden_Shogun_Full_Wish.webp");
    background-size: 900px 800px;
    background-repeat: no-repeat;
    background-position: -200px 0px;
    display: none;
}

#IBannerVer-Outer:hover #IBannerVer-Emblem {
    display: block;
    animation: fadeInUp 0.6s;
}
#IBannerVer-Outer:hover #IBannerVer-HoverIMG {
    display: block;
    animation: ShowUp 0.6s;
}
#IBannerVer-Outer:hover #IBannerVer-Text {
    display: block;
    animation: ShowUp 0.6s;
}
```

</div>
</details>

배너 컴포넌트는 마우스 커서가 올라갈 경우 지역의 이름, 상징 인물, 지역 문양이 띄워지도록 제작하였습니다.

## 

### WorldInfoMond.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import React, { useRef } from "react";

import "../style/css/WorldInfoMond.css";
import "../style/css/Global.css";

import mondinfoimg1 from "../style/img/regionimg/mond_01.jpg"; 
import mondinfoimg2 from "../style/img/regionimg/mond_02.jpg"; 
import mondinfoimg3 from "../style/img/regionimg/mond_03.jpg"; 
import mondinfoimg4 from "../style/img/regionimg/mond_04.jpg"; 
import mondinfoimg5 from "../style/img/regionimg/mond_05.jpg"; 

import MondBannerHorizontal from "../components/banner/MondBannerHorizontal";
import Sliderworldinfo from "../components/Sliderworldinfo";

const WorldInfoMond = () => {
    const imgset = [
        {
            img1: mondinfoimg1,
            img2: mondinfoimg2,
            img3: mondinfoimg3,
            img4: mondinfoimg4,
            img5: mondinfoimg5
        }
    ];

    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();
    const introducegodpoint = useRef();
    const introducecitypoint = useRef();
    const introducegovpoint = useRef();
    const introduceviewpoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    // 페이지 특정 지점으로 이동하는 기능 코드.
    const moveTointromond = () => {
        pagestartpoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointrogod = () => {
        introducegodpoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointrocity = () => {
        introducecitypoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointrogov = () => {
        introducegovpoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointroview = () => {
        introduceviewpoint.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="WIFM-BackgroundArea WIFM-BackgroundIMG WIFM-Background-SectionConfig" ref={pagestartpoint}>

            <div className='WIFM-IntroduceMond-ContentOuter WIFM-ContentOuter-SectionConfig'>
                <div className='WIFM-IntroduceMond-ContentInner'>
                    <div className='WIFM-IntroduceMond-TitleBanner'>
                        <div className='WIFM-IntroduceMond-Banner'>
                            <MondBannerHorizontal/>
                        </div>
                    </div>

                    <div className='WIFM-IntroduceMond-PhotoAndScript'>
                        <div className='WIFM-IntroduceMond-Photo'>
                            <div className='WIFM-IntroduceMond-Photoimg1'>
                                <p>몬드성</p>
                            </div>
                            <div className='WIFM-IntroduceMond-Photoimg2'>
                                <p>다운 와이너리</p>
                            </div>
                        </div>
                        <div className='WIFM-IntroduceMond-Script'>
                            <p>티바트 대륙 북동쪽에 위치한 바람과 자유의 도시.</p>

                            <br/>

                            <p>산과 드넓은 평원 사이로</p>
                            <p>민들레 향기를 가득 머금은 자유의 바람이</p>
                            <p>시드르 호수 위로 불며 호수 중앙의 섬에 위치한 몬드성에</p>
                            <p>바람 신 바르바토스의 축복과 은혜를 가져다준다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFM-IntroduceGod-ContentOuter WIFM-ContentOuter-SectionConfig' ref={introducegodpoint}>
                <div className='WIFM-IntroduceGod-ContentInner'>
                    <div className='WIFM-IntroduceGod-Background'>
                        <div className='WIFM-IntroduceGod-Script1'>
                            <p>「바람의 방향은 항상 바뀌는 거니까」</p>
                            <p>「언젠가는, 더 빛나는 곳으로 향할 날이 올거야」</p>
                            <p>「이제부터는 내 축복과 함께 더 자유롭게 날아봐」</p>
                        </div>
                        <div className='WIFM-IntroduceGod-Name'>
                            <p>「자유의 신, 바르바토스」</p>
                        </div>

                        <div className='WIFM-IntroduceGod-Script2'>
                            <p>수천년 전, 열풍의 마신 데카라비안을 축출하고 자유의 도시 '몬드'를 세운 바람과 자유의 신.</p>
                            <p>1600여년 간 몬드를 다스리다 홀연 자취를 감추었다.</p>
                            <p>1000여년 이상 모습을 드러내지 않았으나 몬드 사람들은 언젠가 바르바토스가 자신들 곁으로 돌아올 것이라 굳게 믿고있다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFM-IntroduceCity-ContentOuter WIFM-ContentOuter-SectionConfig' ref={introducecitypoint}>
                <div className='WIFM-IntroduceCity-ContentInner'>
                    <div className='WIFM-IntroduceCity-Script'>
                        <div className='WIFM-IntroduceCity-ScriptTitle'>
                            <p>「몬드성」</p> 
                        </div>

                        <br/>

                        <p>「음유시인과 예술가들 사이에서 '자유의 도시', '목가의 성', '북쪽의 명관'이라고 몬드의 중심지.</p>

                        <br/>

                        <p>바르바토스가 자취를 감춘 뒤 타락한 귀족들이 권력을 독점하고 사람들을 노예로 부렸다.</p>
                        <p>어느 날 몬드에 강대한 마룡이 나타났는데, 귀족들은 몬드 사람들을 노예로 만들어 </p>
                        <p>마룡에게 제물로 바치며 자신들의 안전만을 지켜나갔다.</p>

                        <br/>

                        <p>바네사라는 이름의 여성 노예가 음유시인의 모습으로 나타난 바르바토스의 도움을 얻어</p>
                        <p>마룡을 무찌르고 타락한 귀족들을 몰아냄으로써 몬드는 다시 자유를 되찾을 수 있었다.</p>
                        <p>이후 몬드 사람들은 하르파스툼 축제와 윈드블룸 축제를 통해 당시의 사건을 기리고 있다.</p>
                    </div>

                    <div className='WIFM-IntroduceCity-IMG'>
                        <div className='WIFM-IntroduceCity-image'/>
                    </div>
                </div>
            </div>
            <div className='WIFM-IntroduceGov-ContentOuter WIFM-ContentOuter-SectionConfig' ref={introducegovpoint}>
                <div className='WIFM-IntroduceGov-ContentInner'>
                    <div className='WIFM-IntroduceGov-IMG'>
                        <div className='WIFM-IntroduceGov-image'/>
                    </div>

                    <div className='WIFM-IntroduceGov-Script'>
                        <div className='WIFM-IntroduceGov-ScriptTitle'>
                            <p>페보니우스 기사단</p> 
                        </div>

                        <br/>

                        <p>몬드의 행정과 방위를 담당하는 기사단.</p>

                        <br/>

                        <p>바람 신과 함께 몬드의 자유를 되찾은 바네사는 다시는 억압의 시대가 닥치지 않기를 원했다.</p>
                        <p>그리하여 자신과 함께 뜻을 같이 했던 동지들과 함께 몬드를 지킬 기사단을 만들었다.</p>
                        <p>그 이름은 '페보니우스 기사단'.</p>

                        <br/>

                        <p>바네사는 초대 기사단장이 되어 '민들레 기사'라는 이명과 함께 몬드를 수호했다.</p>
                        <p>그녀가 생명의 다했을 때, 생애 위업이 신들에게 인정받아 그녀의 혼은 셀레스티아로 향했으며.</p>
                        <p>매의 형태로 몬드로 내려와 사람들을 지켜보고 있다는 설화가 내려오고 있다.</p>
                    </div>
                </div>
            </div>

            <div className='WIFM-IntroduceViewpoint-ContentOuter WIFM-ContentOuter-SectionConfig' ref={introduceviewpoint}>
                <div className='WIFM-IntroduceViewpoint-ContentInner'>
                    <div className='WIFM-IntroduceViewpoint-Title'>
                        <p>눈여겨볼 장소</p>
                    </div>
                    <div className='WIFM-IntroduceViewpoint-Slider'>
                        <Sliderworldinfo imgs={imgset}/>
                    </div>
                </div>
            </div>

            <div className='WIFM-Logo-ContentOuter WIFM-ContentOuter-SectionConfig'>
                <div className='WIFM-Logo-ContentInner'>
                    <div className="WIFM-Logo-ContentInner-MainLogo"/>
                    <div className="WIFM-Logo-ContentInner-Slogan"/>
                </div>
            </div>

            <div id='WIFM-Remotecontrol'>
                <div id="WIFM-Remotecontrol-Icon" onClick={moveTointromond}/>

                <div className="WIFM-Remotecontrol-Button" onClick={moveTointrogod}>
                    <div className="WIFM-Remotecontrol-Textbox">집정관</div>
                </div>
                <div className="WIFM-Remotecontrol-Button" onClick={moveTointrocity}>
                    <div className="WIFM-Remotecontrol-Textbox">몬드성</div>
                </div>
                <div className="WIFM-Remotecontrol-Button" onClick={moveTointrogov}>
                    <div className="WIFM-Remotecontrol-Textbox">기사단</div>
                </div>
                <div className="WIFM-Remotecontrol-Button" onClick={moveTointroview}>
                    <div className="WIFM-Remotecontrol-Textbox">관람</div>
                </div>
            </div>

        </div>
    )
}

export default WorldInfoMond;
```

</div>
</details>

### WorldInfoMond.css
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```css
/* 몬드 소개 페이지 CSS */
/* 몬드 소개 페이지 CSS */

/* 페이지 배경영역 설정 */
.WIFM-BackgroundArea {
    color: black;
    padding: 20px;
    width: 100%;
    height: 6000px;
    position: relative;
}
.WIFM-BackgroundArea > * {
    color: black;
    text-align: center;
    position: relative;
}

/* 페이지 배경화면 - 배경 이미지 설정 */
.WIFM-BackgroundIMG::before {
    content: "";
    background-attachment: fixed;
    background-image: url("../img/background/MondstadtView.jpg");
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

/* 컨텐츠 배치 방식 */
/* 컨텐츠 배치 방식 */
.WIFM-Background-SectionConfig {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
}

/* 페이지 이동용 리모콘 CSS */
/* 페이지 이동용 리모콘 CSS */
#WIFM-Remotecontrol {
    width: 110px;
    height: 320px;
    top: 180px; 
    right: 50px;

    background-color: #EBF5FF;
    border-radius: 20px;
    opacity: 0.8;

    position: fixed; 
    text-align: center;
}

#WIFM-Remotecontrol-Icon {
    width: 100px;
    height: 100px;

    margin-left: 5px;
    
    background-image: url("../img/ingameasset/Element_Anemo.png");
    background-size: 100px 100px;
    background-repeat: no-repeat;
    background-position: 0px 0px;
}

.WIFM-Remotecontrol-Button {
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
.WIFM-Remotecontrol-Button:hover {
    background-color: #464646;
    color: white;
}
.WIFM-Remotecontrol-Button:active {
    background-color: #a0a0a0;
    color: white;
}
.WIFM-Remotecontrol-Textbox {
    margin-top: 10px;
}

/* 컨텐츠 Outer 영역 설정 */
/* 컨텐츠 Outer 영역 설정 */
.WIFM-IntroduceMond-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceGod-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceCity-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceGov-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceViewpoint-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-Logo-ContentOuter {
    width: 85%;
    height: 10%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

/* 컨텐츠 Outer 영역 컨텐츠 배치 방식 설정 */
.WIFM-ContentOuter-SectionConfig {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-top: 70px;
}

/* 컨텐츠 Inner 영역 설정 */
/* 컨텐츠 Inner 영역 설정 */
.WIFM-IntroduceMond-ContentInner {
    width: 95%;
    height: 95%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceGod-ContentInner {
    width: 95%;
    height: 95%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceCity-ContentInner {
    width: 95%;
    height: 95%;

    display: flex;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceGov-ContentInner {
    width: 95%;
    height: 95%;

    display: flex;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceViewpoint-ContentInner {
    width: 95%;
    height: 95%;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-Logo-ContentInner {
    width: 95%;
    height: 95%;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

/* 컨텐츠 영역 설정 */
/* 컨텐츠 영역 설정 */

/* 몬드 소개 영역 설정 */
.WIFM-IntroduceMond-TitleBanner {
    width: 100%;
    height: 25%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
    .WIFM-IntroduceMond-Banner {
        width: 100%;
        height: 100%;

        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }

.WIFM-IntroduceMond-PhotoAndScript {
    width: 100%;
    height: 75%;

    display: flex;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceMond-Photo {
    width: 50%;
    height: 100%;

    display: flex;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceMond-Photoimg1{
    width: 50%;
    height: 40%;

    margin-top: 60px;
    margin-left: 5px;

    background-image: url("../img/regionimg/mond_03.jpg");
    background-size: 600px 400px;
    background-repeat: no-repeat;
    background-position: 0px 0px;

    border-radius: 10px;

    font-family: 'GIfont';
    font-size: large;

    animation: fadeDown 2s;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceMond-Photoimg2{
    width: 50%;
    height: 40%;

    margin-top: 270px;
    margin-right: 5px;

    background-image: url("../img/regionimg/mond_05.jpg");
    background-size: 600px 400px;
    background-repeat: no-repeat;
    background-position: 0px 0px;

    border-radius: 10px;

    font-family: 'GIfont';
    font-size: large;

    animation: fadeUp 2s;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceMond-Script {
    width: 50%;
    height: 100%;

    margin-top: 100px;

    font-family: 'GIfont';
    font-size: x-large;

    animation: ShowUp 2s;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

/* 집정관 영역 설정 */
/* 집정관 영역 설정 */
.WIFM-IntroduceGod-Background {
    width: 100%;
    height: 1000px;
    position: relative;
}
.WIFM-IntroduceGod-Background > * {
    position: relative;
}
.WIFM-IntroduceGod-Background::before {
    content: "";
    /* background-attachment: fixed; */
    background-image: url("../img/background/god/Barbatos.jfif");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.7;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    border-radius: 15px;
}
.WIFM-IntroduceGod-Script1 {
    width: 100%;
    height: 20%;

    top: 60px;

    font-family: 'GIfont';
    font-size: x-large;

    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;

    color: white;
}
.WIFM-IntroduceGod-Name {
    width: 100%;
    height: 40%;

    top: 50px;

    font-family: 'GIfont';
    font-size: xx-large;

    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;

    color: black;
}

.WIFM-IntroduceGod-Script2 {
    width: 100%;
    height: 40%;

    top: 50px;

    font-family: 'GIfont';
    font-size: x-large;

    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;

    color: black;
}

/* 도시 소개 영역 설정 */
/* 도시 소개 영역 설정 */
.WIFM-IntroduceCity-Script {
    width: 50%;
    height: 80%;

    margin-top: 50px;

    font-family: 'GIfont';
    font-size: x-large;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceCity-ScriptTitle {
    font-family: 'GIfont';
    font-size: 50px;
}

.WIFM-IntroduceCity-IMG {
    width: 50%;
    height: 100%;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceCity-image {
    width: 80%;
    height: 80%;

    margin-top: 30px;

    background-image: url("../img/background/MondstadtCastle.jpg");
    background-size: 1500px 1000px;
    background-repeat: no-repeat;
    background-position: -600px 0px;

    border-radius: 20px;
}

/* 정부 소개 영역 설정 */
/* 정부 소개 영역 설정 */
.WIFM-IntroduceGov-Script {
    width: 50%;
    height: 80%;

    margin-top: 50px;

    font-family: 'GIfont';
    font-size: x-large;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceGov-ScriptTitle {
    font-family: 'GIfont';
    font-size: 50px;
}

.WIFM-IntroduceGov-IMG {
    width: 50%;
    height: 100%;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceGov-image {
    width: 80%;
    height: 80%;

    margin-top: 30px;

    background-image: url("../img/background/KnightsofFavonius.jpg");
    background-size: 1800px 1000px;
    background-repeat: no-repeat;
    background-position: -500px -100px;

    border-radius: 20px;
}



/* 관람 영역 설정 */
/* 관람 영역 설정 */
.WIFM-IntroduceViewpoint-Title {
    width: 100%;
    height: 20%;

    margin-top: 0px;

    font-family: 'GIfont';
    font-size: xx-large;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFM-IntroduceViewpoint-Slider {
    width: 100%;
    height: 80%;

    margin-top: -30px;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}



/* 로고 영역 설정 */
/* 로고 영역 설정 */
.WIFM-Logo-ContentInner-MainLogo {
    width: 100%;
    height: 40%;

    margin-top: 100px;
    
    background-image: url("../img/ect/genshinimpectlogo\(white\).png");
    background-size: 400px 250px;
    background-repeat: no-repeat;
    background-position: center;
}
.WIFM-Logo-ContentInner-Slogan{
    width: 100%;
    height: 20%;

    background-image: url("../img/ect/gameslogan.png");
    background-size: 800px 80px;
    background-repeat: no-repeat;
    background-position: center;
}
```

</div>
</details>

### WorldInfoLiyue.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import React, { useRef } from "react";

import "../style/css/WorldInfoLiyue.css";
import "../style/css/Global.css";

import liyueinfoimg1 from "../style/img/regionimg/liyue_01.jpg"; 
import liyueinfoimg2 from "../style/img/regionimg/liyue_02.jpg"; 
import liyueinfoimg3 from "../style/img/regionimg/liyue_03.jpg"; 
import liyueinfoimg4 from "../style/img/regionimg/liyue_04.jpg"; 
import liyueinfoimg5 from "../style/img/regionimg/liyue_05.jpg"; 

import LiyueBannerHorizontal from "../components/banner/LiyueBannerHorizontal";
import Sliderworldinfo from "../components/Sliderworldinfo";

const WorldInfoLiyue = () => {
    const imgset = [
        {
            img1: liyueinfoimg1,
            img2: liyueinfoimg2,
            img3: liyueinfoimg3,
            img4: liyueinfoimg4,
            img5: liyueinfoimg5
        }
    ];

    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();
    const introducegodpoint = useRef();
    const introducecitypoint = useRef();
    const introducegovpoint = useRef();
    const introduceviewpoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    // 페이지 특정 지점으로 이동하는 기능 코드.
    const moveTointroliyue = () => {
        pagestartpoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointrogod = () => {
        introducegodpoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointrocity = () => {
        introducecitypoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointrogov = () => {
        introducegovpoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointroview = () => {
        introduceviewpoint.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="WIFL-BackgroundArea WIFL-BackgroundIMG WIFL-Background-SectionConfig" ref={pagestartpoint}>

            <div className='WIFL-IntroduceLiyue-ContentOuter WIFL-ContentOuter-SectionConfig'>
                <div className='WIFL-IntroduceLiyue-ContentInner'>
                    <div className='WIFL-IntroduceLiyue-TitleBanner'>
                        <div className='WIFL-IntroduceLiyue-Banner'>
                            <LiyueBannerHorizontal/>
                        </div>
                    </div>

                    <div className='WIFL-IntroduceLiyue-PhotoAndScript'>
                        <div className='WIFL-IntroduceLiyue-Photo'>
                            <div className='WIFL-IntroduceLiyue-Photoimg1'>
                                <p>리월항</p>
                            </div>
                            <div className='WIFL-IntroduceLiyue-Photoimg2'>
                                <p>망서객잔</p>
                            </div>
                        </div>
                        <div className='WIFL-IntroduceLiyue-Script'>
                            <p>티바트 대륙 동쪽에 위치한 풍요로운 항구 도시.</p>

                            <br/>

                            <p>우뚝 솟아있는 산기슭과 석림, 생기 넘치는 강가와 드넓은 평원이</p>
                            <p>만든 리월의 다양한 지형은 계절마다 다채로운 풍경을 보여준다.</p>
                            <p>산과 돌이 이뤄낸 장관 속엔 얼마나 많은 바위 신의</p>
                            <p>오랜 선물들이 사람들을 기다리고 있을까?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFL-IntroduceGod-ContentOuter WIFL-ContentOuter-SectionConfig' ref={introducegodpoint}>
                <div className='WIFL-IntroduceGod-ContentInner'>
                    <div className='WIFL-IntroduceGod-Background'>
                        <div className='WIFL-IntroduceGod-Script1'>
                            <p>「대지에서 유통되고 있는 은전은 전부 나의 피와 살이다」</p>
                            <p>「난 이 방법으로 인간들의 땀과 지혜, 미래에 대한 보증을 선 것이다」</p>
                            <p>「이는 중생에 대한 내 믿음이다. 이 믿음을 저버린다면 나의 피를 더럽히는 짓이다」</p>
                        </div>
                        <div className='WIFL-IntroduceGod-Name'>
                            <p>「계약의 신, 모락스」</p>
                        </div>

                        <div className='WIFL-IntroduceGod-Script2'>
                            <p>리월을 수호하는 선인이 시조이자 최초의 선인.</p>
                            <p>티바트의 일곱 집정관 중 가장 나이가 많고, 가장 오래 지배자의 자리에 있는 신.</p>
                            <p>계약과 상업의 신으로써 리월을 티바트 제일가는 경제 중심지로 발전시켰다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFL-IntroduceCity-ContentOuter WIFL-ContentOuter-SectionConfig' ref={introducecitypoint}>
                <div className='WIFL-IntroduceCity-ContentInner'>
                    <div className='WIFL-IntroduceCity-Script'>
                        <div className='WIFL-IntroduceCity-ScriptTitle'>
                            <p>「리월항」</p> 
                        </div>

                        <br/>

                        <p>3700년 역사의, 티바트에서 가장 오래된 도시이자 상업적 번영을 이룬 도시.</p>

                        <br/>

                        <p>바위의 신 모락스는 리월 지역의 마신들을 몰아내고 리월항을 세웠다.</p>
                        <p>계약과 상업의 신이기도 한 모락스는 자신의 이념을 토대로 도시를 만들었고.</p>
                        <p>세밀한 법률과 통치규범을 통해 도시를 발전시켜나갔다.</p>

                        <br/>

                        <p>리월의 경제는 티바트 대륙에서 제일 가는 수준으로</p>
                        <p>리월항의 화폐인 '모라'는 티바트 어디에서나 통용되어 널리 사용되고 있을 정도이다</p>
                        <p>리월 사람들은 모락스를 숭배하며 '암왕제군'이라는 명칭으로 그를 부르고 있다.</p>
                    </div>

                    <div className='WIFL-IntroduceCity-IMG'>
                        <div className='WIFL-IntroduceCity-image'/>
                    </div>
                </div>
            </div>
            <div className='WIFL-IntroduceGov-ContentOuter WIFL-ContentOuter-SectionConfig' ref={introducegovpoint}>
                <div className='WIFL-IntroduceGov-ContentInner'>
                    <div className='WIFL-IntroduceGov-IMG'>
                        <div className='WIFL-IntroduceGov-image'/>
                    </div>

                    <div className='WIFL-IntroduceGov-Script'>
                        <div className='WIFL-IntroduceGov-ScriptTitle'>
                            <p>리월 칠성</p> 
                        </div>

                        <br/>

                        <p>모락스 바로 아래에서 리월을 다스리는 7명의 사람들.</p>

                        <br/>

                        <p>모락스는 자신과 선인들이 일방적으로 리월 사람들을 지배하고 싶은 마음은 없었다.</p>
                        <p>따라서 리월에서 가장 뛰어난 7명을 선발하여 지배자의 역할을 나누어 하도록 하였다.</p>
                        <p>그 이름은 '리월 칠성'.</p>

                        <br/>

                        <p>모락스와 선인들은 리월이 큰 문제가 생겼을 때 직접 나설 뿐</p>
                        <p>평상시에는 리월 칠성이 리월항을 직접 다스리도록 하고 있다.</p>
                        <p>또한 리월 칠성 아래에 8개 부처를 두어 이들을 보조하도록 하였다.</p>
                    </div>
                </div>
            </div>

            <div className='WIFL-IntroduceViewpoint-ContentOuter WIFL-ContentOuter-SectionConfig' ref={introduceviewpoint}>
                <div className='WIFL-IntroduceViewpoint-ContentInner'>
                    <div className='WIFL-IntroduceViewpoint-Title'>
                        <p>눈여겨볼 장소</p>
                    </div>
                    <div className='WIFL-IntroduceViewpoint-Slider'>
                        <Sliderworldinfo imgs={imgset}/>
                    </div>
                </div>
            </div>

            <div className='WIFL-Logo-ContentOuter WIFL-ContentOuter-SectionConfig'>
                <div className='WIFL-Logo-ContentInner'>
                    <div className="WIFL-Logo-ContentInner-MainLogo"/>
                    <div className="WIFL-Logo-ContentInner-Slogan"/>
                </div>
            </div>

            <div id='WIFL-Remotecontrol'>
                <div id="WIFL-Remotecontrol-Icon" onClick={moveTointroliyue}/>

                <div className="WIFL-Remotecontrol-Button" onClick={moveTointrogod}>
                    <div className="WIFL-Remotecontrol-Textbox">집정관</div>
                </div>
                <div className="WIFL-Remotecontrol-Button" onClick={moveTointrocity}>
                    <div className="WIFL-Remotecontrol-Textbox">리월항</div>
                </div>
                <div className="WIFL-Remotecontrol-Button" onClick={moveTointrogov}>
                    <div className="WIFL-Remotecontrol-Textbox">칠성</div>
                </div>
                <div className="WIFL-Remotecontrol-Button" onClick={moveTointroview}>
                    <div className="WIFL-Remotecontrol-Textbox">관람</div>
                </div>
            </div>

        </div>
    )
}

export default WorldInfoLiyue;
```

</div>
</details>

### WorldInfoLiyue.css
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```css
/* 리월 소개 페이지 CSS */
/* 리월 소개 페이지 CSS */

/* 페이지 배경영역 설정 */
.WIFL-BackgroundArea {
    color: black;
    padding: 20px;
    width: 100%;
    height: 6000px;
    position: relative;
}
.WIFL-BackgroundArea > * {
    color: black;
    text-align: center;
    position: relative;
}

/* 페이지 배경화면 - 배경 이미지 설정 */
.WIFL-BackgroundIMG::before {
    content: "";
    background-attachment: fixed;
    background-image: url("../img/background/LiyueInn.jpg");
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

/* 컨텐츠 배치 방식 */
/* 컨텐츠 배치 방식 */
.WIFL-Background-SectionConfig {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
}

/* 페이지 이동용 리모콘 CSS */
/* 페이지 이동용 리모콘 CSS */
#WIFL-Remotecontrol {
    width: 110px;
    height: 320px;
    top: 180px; 
    right: 50px;

    background-color: #EBF5FF;
    border-radius: 20px;
    opacity: 0.8;

    position: fixed; 
    text-align: center;
}

#WIFL-Remotecontrol-Icon {
    width: 100px;
    height: 100px;

    margin-left: 5px;
    
    background-image: url("../img/ingameasset/Element_Geo.png");
    background-size: 100px 100px;
    background-repeat: no-repeat;
    background-position: 0px 0px;
}

.WIFL-Remotecontrol-Button {
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
.WIFL-Remotecontrol-Button:hover {
    background-color: #464646;
    color: white;
}
.WIFL-Remotecontrol-Button:active {
    background-color: #a0a0a0;
    color: white;
}
.WIFL-Remotecontrol-Textbox {
    margin-top: 10px;
}

/* 컨텐츠 Outer 영역 설정 */
/* 컨텐츠 Outer 영역 설정 */
.WIFL-IntroduceLiyue-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-IntroduceGod-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-IntroduceCity-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-IntroduceGov-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-IntroduceViewpoint-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-Logo-ContentOuter {
    width: 85%;
    height: 10%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

/* 컨텐츠 Outer 영역 컨텐츠 배치 방식 설정 */
.WIFL-ContentOuter-SectionConfig {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-top: 70px;
}

/* 컨텐츠 Inner 영역 설정 */
/* 컨텐츠 Inner 영역 설정 */
.WIFL-IntroduceLiyue-ContentInner {
    width: 95%;
    height: 95%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-IntroduceGod-ContentInner {
    width: 95%;
    height: 95%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-IntroduceCity-ContentInner {
    width: 95%;
    height: 95%;

    display: flex;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-IntroduceGov-ContentInner {
    width: 95%;
    height: 95%;

    display: flex;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-IntroduceViewpoint-ContentInner {
    width: 95%;
    height: 95%;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-Logo-ContentInner {
    width: 95%;
    height: 95%;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

/* 컨텐츠 영역 설정 */
/* 컨텐츠 영역 설정 */

/* 리월 소개 영역 설정 */
.WIFL-IntroduceLiyue-TitleBanner {
    width: 100%;
    height: 25%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
    .WIFL-IntroduceLiyue-Banner {
        width: 100%;
        height: 100%;

        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }

    .WIFL-IntroduceLiyue-PhotoAndScript {
        width: 100%;
        height: 75%;
    
        display: flex;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    .WIFL-IntroduceLiyue-Photo {
        width: 50%;
        height: 100%;
    
        display: flex;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    .WIFL-IntroduceLiyue-Photoimg1{
        width: 50%;
        height: 40%;
    
        margin-top: 60px;
        margin-left: 5px;
    
        background-image: url("../img/regionimg/liyue_05.jpg");
        background-size: 600px 400px;
        background-repeat: no-repeat;
        background-position: 0px 0px;
    
        border-radius: 10px;
    
        font-family: 'GIfont';
        font-size: large;
    
        animation: fadeDown 2s;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    .WIFL-IntroduceLiyue-Photoimg2{
        width: 50%;
        height: 40%;
    
        margin-top: 270px;
        margin-right: 5px;
    
        background-image: url("../img/regionimg/liyue_03.jpg");
        background-size: 600px 400px;
        background-repeat: no-repeat;
        background-position: 0px 0px;
    
        border-radius: 10px;
    
        font-family: 'GIfont';
        font-size: large;
    
        animation: fadeUp 2s;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    .WIFL-IntroduceLiyue-Script {
        width: 50%;
        height: 100%;
    
        margin-top: 100px;
    
        font-family: 'GIfont';
        font-size: x-large;
    
        animation: ShowUp 2s;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }

/* 집정관 영역 설정 */
/* 집정관 영역 설정 */
.WIFL-IntroduceGod-Background {
    width: 100%;
    height: 1000px;
    position: relative;
}
.WIFL-IntroduceGod-Background > * {
    position: relative;
}
.WIFL-IntroduceGod-Background::before {
    content: "";
    /* background-attachment: fixed; */
    background-image: url("../img/background/god/Morax.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.7;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    border-radius: 15px;
}
.WIFL-IntroduceGod-Script1 {
    width: 100%;
    height: 20%;

    top: 60px;

    font-family: 'GIfont';
    font-size: x-large;

    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;

    color: white;
}
.WIFL-IntroduceGod-Name {
    width: 100%;
    height: 40%;

    top: 50px;

    font-family: 'GIfont';
    font-size: xx-large;

    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;

    color: black;
}

.WIFL-IntroduceGod-Script2 {
    width: 100%;
    height: 40%;

    top: 50px;

    font-family: 'GIfont';
    font-size: x-large;

    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;

    color: black;
}

/* 도시 소개 영역 설정 */
/* 도시 소개 영역 설정 */
.WIFL-IntroduceCity-Script {
    width: 50%;
    height: 80%;

    margin-top: 50px;

    font-family: 'GIfont';
    font-size: x-large;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-IntroduceCity-ScriptTitle {
    font-family: 'GIfont';
    font-size: 50px;
}

.WIFL-IntroduceCity-IMG {
    width: 50%;
    height: 100%;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-IntroduceCity-image {
    width: 80%;
    height: 80%;

    margin-top: 30px;

    background-image: url("../img/background/Liyueport.jfif");
    background-size: 1500px 900px;
    background-repeat: no-repeat;
    background-position: -300px -100px;

    border-radius: 20px;
}

/* 정부 소개 영역 설정 */
/* 정부 소개 영역 설정 */
.WIFL-IntroduceGov-Script {
    width: 50%;
    height: 80%;

    margin-top: 50px;

    font-family: 'GIfont';
    font-size: x-large;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-IntroduceGov-ScriptTitle {
    font-family: 'GIfont';
    font-size: 50px;
}

.WIFL-IntroduceGov-IMG {
    width: 50%;
    height: 100%;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-IntroduceGov-image {
    width: 80%;
    height: 80%;

    margin-top: 30px;

    background-image: url("../img/background/Liyuesevenstar.jpg");
    background-size: 1100px 900px;
    background-repeat: no-repeat;
    background-position: -150px 0px;

    border-radius: 20px;
}



/* 관람 영역 설정 */
/* 관람 영역 설정 */
.WIFL-IntroduceViewpoint-Title {
    width: 100%;
    height: 20%;

    margin-top: 0px;

    font-family: 'GIfont';
    font-size: xx-large;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFL-IntroduceViewpoint-Slider {
    width: 100%;
    height: 80%;

    margin-top: -30px;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

/* 로고 영역 설정 */
/* 로고 영역 설정 */
.WIFL-Logo-ContentInner-MainLogo {
    width: 100%;
    height: 40%;

    margin-top: 100px;
    
    background-image: url("../img/ect/genshinimpectlogo\(white\).png");
    background-size: 400px 250px;
    background-repeat: no-repeat;
    background-position: center;
}
.WIFL-Logo-ContentInner-Slogan{
    width: 100%;
    height: 20%;

    background-image: url("../img/ect/gameslogan.png");
    background-size: 800px 80px;
    background-repeat: no-repeat;
    background-position: center;
}
```

</div>
</details>

### WorldInfoInazuma.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import React, { useRef } from "react";
import "../style/css/WorldInfoInazuma.css";
import "../style/css/Global.css";

import inazumainfoimg1 from "../style/img/regionimg/Inazuma_01.jpg"; 
import inazumainfoimg2 from "../style/img/regionimg/Inazuma_02.jpg"; 
import inazumainfoimg3 from "../style/img/regionimg/Inazuma_03.jpg"; 
import inazumainfoimg4 from "../style/img/regionimg/Inazuma_04.jpg"; 
import inazumainfoimg5 from "../style/img/regionimg/Inazuma_05.jpg"; 

import InazumaBannerHorizontal from "../components/banner/InazumaBannerHorizontal";
import Sliderworldinfo from "../components/Sliderworldinfo";

const WorldInfoInazuma = () => {
    const imgset = [
        {
            img1: inazumainfoimg1,
            img2: inazumainfoimg2,
            img3: inazumainfoimg3,
            img4: inazumainfoimg4,
            img5: inazumainfoimg5
        }
    ];
    
    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();
    const introducegodpoint = useRef();
    const introducecitypoint = useRef();
    const introducegovpoint = useRef();
    const introduceviewpoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    // 페이지 특정 지점으로 이동하는 기능 코드.
    const moveTointromond = () => {
        pagestartpoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointrogod = () => {
        introducegodpoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointrocity = () => {
        introducecitypoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointrogov = () => {
        introducegovpoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointroview = () => {
        introduceviewpoint.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="WIFI-BackgroundArea WIFI-BackgroundIMG WIFI-Background-SectionConfig" ref={pagestartpoint}>

            <div className='WIFI-IntroduceInazuma-ContentOuter WIFI-ContentOuter-SectionConfig'>
                <div className='WIFI-IntroduceInazuma-ContentInner'>
                    <div className='WIFI-IntroduceInazuma-TitleBanner'>
                        <div className='WIFI-IntroduceInazuma-Banner'>
                            <InazumaBannerHorizontal/>
                        </div>
                    </div>

                    <div className='WIFI-IntroduceInazuma-PhotoAndScript'>
                        <div className='WIFI-IntroduceInazuma-Photo'>
                            <div className='WIFI-IntroduceInazuma-Photoimg1'>
                                <p>이나즈마성</p>
                            </div>
                            <div className='WIFI-IntroduceInazuma-Photoimg2'>
                                <p>산호궁</p>
                            </div>
                        </div>
                        <div className='WIFI-IntroduceInazuma-Script'>
                            <p>티바트 대륙 극동에 위치한 봉쇄된 제도.</p>

                            <br/>

                            <p>끝없는 뇌우를 뚫고 벚꽃의 가호가 서린 열도에 들어서면</p>
                            <p>둘러싸인 사취, 우뚝 솟은 절벽 그리고 그윽한 산속에서</p>
                            <p>위대하신 나루카미 쇼군이 추구하는 영원을 확인할 수 있다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFI-IntroduceGod-ContentOuter WIFI-ContentOuter-SectionConfig' ref={introducegodpoint}>
                <div className='WIFI-IntroduceGod-ContentInner'>
                    <div className='WIFI-IntroduceGod-Background'>
                        <div className='WIFI-IntroduceGod-Script1'>
                            <p>「이 몸은 세상에서 가장 뛰어나고 존귀하나니」</p>
                            <p>「천하의 권력은 내가 쥐어야 할 것이다」</p>
                            <p>「내 백성들에게 하나의 꿈을 약속한 적 있다. 바로 천년만년 변하지 않는 『영원』이다」</p>
                        </div>
                        <div className='WIFI-IntroduceGod-Name'>
                            <p>「영원의 신, 바알」</p>
                        </div>

                        <div className='WIFI-IntroduceGod-Script2'>
                            <p>그 어떤 신보다도 냉철하고 잔혹하며, 무자비한 신.</p>
                            <p>자신이 세운 이나즈마에서 절대적인 지배자로 군림하고 있다.</p>
                            <p>「천리」에 가장 가까운 건 오직 「영원」뿐이라는 믿음으로 자신의 백성들을 고통 속에 몰아넣고 있다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFI-IntroduceCity-ContentOuter WIFI-ContentOuter-SectionConfig' ref={introducecitypoint}>
                <div className='WIFI-IntroduceCity-ContentInner'>
                    <div className='WIFI-IntroduceCity-Script'>
                        <div className='WIFI-IntroduceCity-ScriptTitle'>
                            <p>「이나즈마성」</p> 
                        </div>

                        <br/>

                        <p>이나즈마의 지배자, 번개의 신 '라이덴 쇼군'이 거처하는 천수각.</p>

                        <br/>

                        <p>바알은 '라이덴 쇼군'이라는 이름으로 이나즈마를 잔혹하게 지배하고 있다.</p>
                        <p>이나즈마 천수각은 쇼군의 절대적인 권력을 상징하는 장소로</p>
                        <p>쇼군은 섬기는 수많은 부하들의 삼엄한 경비 속에 철저하게 지켜지고 있다.</p>

                        <br/>

                        <p>이나즈마 가장 높은 곳에 위치하여 번개의 신은 그녀가 통치하는 백성들을 한 눈에 볼 수 있다고 전해진다.</p>
                    </div>

                    <div className='WIFI-IntroduceCity-IMG'>
                        <div className='WIFI-IntroduceCity-image'/>
                    </div>
                </div>
            </div>
            <div className='WIFI-IntroduceGov-ContentOuter WIFI-ContentOuter-SectionConfig' ref={introducegovpoint}>
                <div className='WIFI-IntroduceGov-ContentInner'>
                    <div className='WIFI-IntroduceGov-IMG'>
                        <div className='WIFI-IntroduceGov-image1'/>
                        <div className='WIFI-IntroduceGov-image2'/>
                        <div className='WIFI-IntroduceGov-image3'/>
                    </div>

                    <div className='WIFI-IntroduceGov-Script'>
                        <div className='WIFI-IntroduceGov-ScriptTitle'>
                            <p>이나즈마 삼봉행</p> 
                        </div>

                        <br/>

                        <p>라이덴 쇼군 아래에서 이나즈마를 통치하는 3개의 권력집단.</p>

                        <br/>

                        <p>이나즈마의 명문가 히이라기 가문, 쿠죠 가문, 카미사토 가문은</p>
                        <p>쇼군의 명령을 받아 각기 간조 봉행, 텐료 봉행, 야시로 봉행이라는 기관을 운영하고 있다.</p>
                        <p>그 이름은 '삼봉행'.</p>

                        <br/>

                        <p>간조 봉행은 이나즈마의 경제를 총괄하며, 외부에서 유입되는 외국인들의 관리감독을 담당한다.</p>
                        <p>텐료 봉행은 이나즈마의 군사를 담당하며, 쇼군의 명령에 따라 내외부의 외적을 처리한다.</p>
                        <p>야시로 봉행은 이나즈마의 제사와 예술을 담당하며, 이나즈마의 문화를 담당하고 있다.</p>
                    </div>
                </div>
            </div>

            <div className='WIFI-IntroduceViewpoint-ContentOuter WIFI-ContentOuter-SectionConfig' ref={introduceviewpoint}>
                <div className='WIFI-IntroduceViewpoint-ContentInner'>
                    <div className='WIFI-IntroduceViewpoint-Title'>
                        <p>눈여겨볼 장소</p>
                    </div>
                    <div className='WIFI-IntroduceViewpoint-Slider'>
                        <Sliderworldinfo imgs={imgset}/>
                    </div>
                </div>
            </div>

            <div className='WIFI-Logo-ContentOuter WIFI-ContentOuter-SectionConfig'>
                <div className='WIFI-Logo-ContentInner'>
                    <div className="WIFI-Logo-ContentInner-MainLogo"/>
                    <div className="WIFI-Logo-ContentInner-Slogan"/>
                </div>
            </div>

            <div id='WIFI-Remotecontrol'>
                <div id="WIFI-Remotecontrol-Icon" onClick={moveTointromond}/>

                <div className="WIFI-Remotecontrol-Button" onClick={moveTointrogod}>
                    <div className="WIFI-Remotecontrol-Textbox">집정관</div>
                </div>
                <div className="WIFI-Remotecontrol-Button" onClick={moveTointrocity}>
                    <div className="WIFI-Remotecontrol-Textbox">이나즈마</div>
                </div>
                <div className="WIFI-Remotecontrol-Button" onClick={moveTointrogov}>
                    <div className="WIFI-Remotecontrol-Textbox">삼봉행</div>
                </div>
                <div className="WIFI-Remotecontrol-Button" onClick={moveTointroview}>
                    <div className="WIFI-Remotecontrol-Textbox">관람</div>
                </div>
            </div>

        </div>
    )
}

export default WorldInfoInazuma;
```

</div>
</details>

### WorldInfoInazuma.css
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```css
/* 이나즈마 소개 페이지 CSS */
/* 이나즈마 소개 페이지 CSS */

/* 페이지 배경영역 설정 */
.WIFI-BackgroundArea {
    color: black;
    padding: 20px;
    width: 100%;
    height: 6000px;
    position: relative;
}
.WIFI-BackgroundArea > * {
    color: black;
    text-align: center;
    position: relative;
}

/* 페이지 배경화면 - 배경 이미지 설정 */
.WIFI-BackgroundIMG::before {
    content: "";
    background-attachment: fixed;
    background-image: url("../img/background/Inazumashrine.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.8;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}

/* 컨텐츠 배치 방식 */
/* 컨텐츠 배치 방식 */
.WIFI-Background-SectionConfig {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
}

/* 페이지 이동용 리모콘 CSS */
/* 페이지 이동용 리모콘 CSS */
#WIFI-Remotecontrol {
    width: 110px;
    height: 320px;
    top: 180px; 
    right: 50px;

    background-color: #EBF5FF;
    border-radius: 20px;
    opacity: 0.8;

    position: fixed; 
    text-align: center;
}

#WIFI-Remotecontrol-Icon {
    width: 100px;
    height: 100px;

    margin-left: 5px;
    
    background-image: url("../img/ingameasset/Element_Electro.png");
    background-size: 100px 100px;
    background-repeat: no-repeat;
    background-position: 0px 0px;
}

.WIFI-Remotecontrol-Button {
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
.WIFI-Remotecontrol-Button:hover {
    background-color: #464646;
    color: white;
}
.WIFI-Remotecontrol-Button:active {
    background-color: #a0a0a0;
    color: white;
}
.WIFI-Remotecontrol-Textbox {
    margin-top: 10px;
}

/* 컨텐츠 Outer 영역 설정 */
/* 컨텐츠 Outer 영역 설정 */
.WIFI-IntroduceInazuma-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFI-IntroduceGod-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFI-IntroduceCity-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFI-IntroduceGov-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFI-IntroduceViewpoint-ContentOuter {
    width: 85%;
    height: 18%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFI-Logo-ContentOuter {
    width: 85%;
    height: 10%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

/* 컨텐츠 Outer 영역 컨텐츠 배치 방식 설정 */
.WIFI-ContentOuter-SectionConfig {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-top: 70px;
}

/* 컨텐츠 Inner 영역 설정 */
/* 컨텐츠 Inner 영역 설정 */
.WIFI-IntroduceInazuma-ContentInner {
    width: 95%;
    height: 95%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFI-IntroduceGod-ContentInner {
    width: 95%;
    height: 95%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFI-IntroduceCity-ContentInner {
    width: 95%;
    height: 95%;

    display: flex;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFI-IntroduceGov-ContentInner {
    width: 95%;
    height: 95%;

    display: flex;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFI-IntroduceViewpoint-ContentInner {
    width: 95%;
    height: 95%;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.WIFI-Logo-ContentInner {
    width: 95%;
    height: 95%;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

/* 컨텐츠 영역 설정 */
/* 컨텐츠 영역 설정 */

/* 이나즈마 소개 영역 설정 */
.WIFI-IntroduceInazuma-TitleBanner {
    width: 100%;
    height: 25%;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
    .WIFI-IntroduceInazuma-Banner {
        width: 100%;
        height: 100%;

        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }

    .WIFI-IntroduceInazuma-PhotoAndScript {
        width: 100%;
        height: 75%;
    
        display: flex;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    .WIFI-IntroduceInazuma-Photo {
        width: 50%;
        height: 100%;
    
        display: flex;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    .WIFI-IntroduceInazuma-Photoimg1{
        width: 50%;
        height: 40%;
    
        margin-top: 60px;
        margin-left: 5px;
    
        background-image: url("../img/regionimg/Inazuma_01.jpg");
        background-size: 600px 400px;
        background-repeat: no-repeat;
        background-position: 0px 0px;
    
        border-radius: 10px;
    
        font-family: 'GIfont';
        font-size: large;
    
        animation: fadeDown 2s;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    .WIFI-IntroduceInazuma-Photoimg2{
        width: 50%;
        height: 40%;
    
        margin-top: 270px;
        margin-right: 5px;
    
        background-image: url("../img/regionimg/Inazuma_03.jpg");
        background-size: 600px 400px;
        background-repeat: no-repeat;
        background-position: 0px 0px;
    
        border-radius: 10px;
    
        font-family: 'GIfont';
        font-size: large;
    
        animation: fadeUp 2s;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    .WIFI-IntroduceInazuma-Script {
        width: 50%;
        height: 100%;
    
        margin-top: 100px;
    
        font-family: 'GIfont';
        font-size: x-large;
    
        animation: ShowUp 2s;

        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    
    /* 집정관 영역 설정 */
    /* 집정관 영역 설정 */
    .WIFI-IntroduceGod-Background {
        width: 100%;
        height: 1000px;
        position: relative;
    }
    .WIFI-IntroduceGod-Background > * {
        position: relative;
    }
    .WIFI-IntroduceGod-Background::before {
        content: "";
        /* background-attachment: fixed; */
        background-image: url("../img/background/god/Baal.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.7;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    
        border-radius: 15px;
    }
    .WIFI-IntroduceGod-Script1 {
        width: 100%;
        height: 20%;
    
        top: 60px;
    
        font-family: 'GIfont';
        font-size: x-large;
    
        text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
    
        color: white;
    }
    .WIFI-IntroduceGod-Name {
        width: 100%;
        height: 40%;
    
        top: 50px;
    
        font-family: 'GIfont';
        font-size: xx-large;
    
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    
        color: black;
    }
    
    .WIFI-IntroduceGod-Script2 {
        width: 100%;
        height: 40%;
    
        top: 50px;
    
        font-family: 'GIfont';
        font-size: x-large;
    
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    
        color: black;
    }
    
    /* 도시 소개 영역 설정 */
    /* 도시 소개 영역 설정 */
    .WIFI-IntroduceCity-Script {
        width: 50%;
        height: 80%;
    
        margin-top: 50px;
    
        font-family: 'GIfont';
        font-size: x-large;

        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    .WIFI-IntroduceCity-ScriptTitle {
        font-family: 'GIfont';
        font-size: 50px;

        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    }
    
    .WIFI-IntroduceCity-IMG {
        width: 50%;
        height: 100%;
    
        display: inline-flex;
        align-items: center;
        flex-direction: column;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    .WIFI-IntroduceCity-image {
        width: 80%;
        height: 80%;
    
        margin-top: 30px;
    
        background-image: url("../img/background/InazumaClasle.jfif");
        background-size: 1200px 1000px;
        background-repeat: no-repeat;
        background-position: -250px 0px;
    
        border-radius: 20px;
    }
    
    /* 정부 소개 영역 설정 */
    /* 정부 소개 영역 설정 */
    .WIFI-IntroduceGov-Script {
        width: 50%;
        height: 80%;
    
        margin-top: 50px;
    
        font-family: 'GIfont';
        font-size: x-large;

        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    .WIFI-IntroduceGov-ScriptTitle {
        font-family: 'GIfont';
        font-size: 50px;

        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    }
    
    .WIFI-IntroduceGov-IMG {
        width: 50%;
        height: 100%;
    
        display: inline-flex;
        align-items: center;
        flex-direction: column;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    .WIFI-IntroduceGov-image1 {
        width: 30%;
        height: 30%;

        margin-top: 80px;
    
        background-image: url("../img/emblem/hiiragi.png");
        background-size: 200px 200px;
        background-repeat: no-repeat;
        background-position: 0px 0px;
    
    }
    .WIFI-IntroduceGov-image2 {
        width: 30%;
        height: 30%;
    
        background-image: url("../img/emblem/kuzu.png");
        background-size: 200px 200px;
        background-repeat: no-repeat;
        background-position: 0px 0px;
    
    }
    .WIFI-IntroduceGov-image3 {
        width: 30%;
        height: 30%;

        background-image: url("../img/emblem/kamisato.png");
        background-size: 200px 200px;
        background-repeat: no-repeat;
        background-position: 0px 0px;
    
    }
    
    /* 관람 영역 설정 */
    /* 관람 영역 설정 */
    .WIFI-IntroduceViewpoint-Title {
        width: 100%;
        height: 20%;
    
        margin-top: 0px;
    
        font-family: 'GIfont';
        font-size: xx-large;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }
    .WIFI-IntroduceViewpoint-Slider {
        width: 100%;
        height: 80%;
    
        margin-top: -30px;
    
        display: inline-flex;
        align-items: center;
        flex-direction: column;
    
        /* 영역 확인용 경계선 설정 */
        /* border: 1px solid black; */
    }

/* 로고 영역 설정 */
/* 로고 영역 설정 */
.WIFI-Logo-ContentInner-MainLogo {
    width: 100%;
    height: 40%;

    margin-top: 100px;
    
    background-image: url("../img/ect/genshinimpectlogo\(white\).png");
    background-size: 400px 250px;
    background-repeat: no-repeat;
    background-position: center;
}
.WIFI-Logo-ContentInner-Slogan{
    width: 100%;
    height: 20%;

    background-image: url("../img/ect/gameslogan.png");
    background-size: 800px 80px;
    background-repeat: no-repeat;
    background-position: center;
}
```

</div>
</details>

세부 소개 페이지는 당 월드의 이름, 간단한 소개, 상징 인물 소개, 수도 설명, 지배계층 소개, 주요 장소 소개로 나누어져있습니다. 게임 소개 페이지에서 사용되었던 슬라이드쇼와 영역 이동 리모컨 기능이 적용되었습니다.

## 

### Generalforumv2.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import React, { useRef } from "react";

import "../style/css/Generalforumv2.css";
import "../style/css/Global.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const Generalforumv2 = () => {

    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    // 자유게시판의 최상단.
    // 이 곳에서 게시물 데이터를 모두 불러받아 출력하고, 하위 페이지 혹은 컴포넌트의 매개변수로 넘겨져 기능 구현에 사용될 것임.

    // **
    // 여기부터는 리액트 스크립트
    // **

    // 서버에서 호출된 JSON 형식의 게시물 데이터들을 받을 state을 선언.
    const [postdata, setPostdata] = React.useState(['', '', '', '', '', '', '', '', '', '']);

    // 서버에서 게시물 데이터들을 호출하여 postdata state에 set.
    React.useEffect(() => {
        axios.get("http://localhost:8090/board/getallboardlist")
                .then(response => {
                    setPostdata(response.data);
                    console.log(response.data);
                });
    }, []);

    // 페이징 기능을 구현을 위해 필요한 state와, 변수 및 함수들.
    // 현재 페이지 - 페이지 당 표시할 게시물 갯수 state를 선언.
    const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지는 1.
    const [postsPerPage, setPostsPerPage] = React.useState(10); // 한 페이지에서 출력할 게시물의 갯수는 10.

    //no-unused-vars 경고 무시를 위한 더미 코드.
    console.log(setPostsPerPage); 

    // 기능 구현을 위해 필요한 index의 첫 위치와 마지막 위치를 계산하는 수식과 결과값을 담을 변수.
    const indexOfLast = currentPage * postsPerPage; // 1 x 10 =  10
    const indexOfFirst = indexOfLast - postsPerPage; // 10 - 10 = 0

    //게시글 데이터의 JSON 배열을 매개변수로 받아 전체 데이터의 길이를 계산.
    const currentPosts = (param) => {
        let currentPosts = 0;
        currentPosts = param.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }

    // **
    // 여기부터는 리액트 프론트
    // **

    return (
        <div className="GFV2-BackgroundArea GFV2-BackgroundIMG GFV2-Background-SectionConfig" ref={pagestartpoint}>

            <div className='GFV2-Content-Outer-Main GFV2-ContentOuter-SectionConfig'>

                <div className='GFV2-Content-Title'>
                    <div className='GFV2-Content-TitleBanner'>

                        <div className='GFV2-Content-TitleBannerIMG IMG1'>

                        </div>

                        <div className='GFV2-Content-TitleBannerTEXT'>
                            <p>익명게시판</p>
                        </div>

                        <div className='GFV2-Content-TitleBannerIMG IMG2'>

                        </div>
                    </div>
                </div>

                <div className='GFV2-Content-List'>
                    <div className='GFV2-Content-ListTable'>

                        {/* map 함수로 DB에서 받아온 데이터들을 적절한 형식으로 모두 출력. */}
                        {/* currentPosts 함수를 이용하여 전체 데이터들의 갯수도 계산한다. */}
                        {currentPosts(postdata).map(datas => {
                            return (

                                <div className='GFV2-Content-Table' key={datas.b_number_pk}>
                                    <div className='GFV2-Content-ListNumber'>
                                        <p>{datas.b_number_pk}</p> 
                                    </div>   
                                    <div className='GFV2-Content-ListTitle'>
                                        <Link to={`/generalforum/view/${datas.b_number_pk}`} 
                                                state={{b_number_pk: datas.b_number_pk,
                                                        b_title: datas.b_title,
                                                        b_content: datas.b_content,
                                                        b_write_time : datas.b_write_time,
                                                        isModify : false}}
                                        >
                                            <p>{datas.b_title}</p>
                                        </Link>
                                    </div> 
                                    <div className='GFV2-Content-ListTime'>
                                        <p>{datas.b_write_time}</p>
                                    </div>                                  
                                </div>

                            );
                        })}



                    </div>
                </div>

                <div className='GFV2-Content-Button'>
                    <div className='GFV2-Content-Paging'>
                        <div className='GFV2-Content-PagingButton'>
                            <Pagination 
                                postsPerPage={postsPerPage} 
                                totalPosts={postdata.length} 
                                paginate={setCurrentPage}
                            />
                        </div>
                    </div>

                    <div className='GFV2-Content-Write'>

                        <div className='GFV2-Content-WriteButton'>
                            <Link to="/generalforum/writeoredit" 
                                state={{isModify : false,
                                        number: '',
                                        title: '',
                                        content: ''
                                        }}>
                            <p>글 작성하기</p>
                            </Link>
                        </div>
                        
                    </div>
                </div>

            </div> 

        </div>
    )
}

export default Generalforumv2;
```

</div>
</details>

### Generalforumv2.css
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```css
/* 익명게시판 소개 페이지 CSS */

/* 페이지 배경화면 설정 */
/* 배경화면 위에 흰색 투명 바탕의 컨텐츠 영역이 배치됨. */

/* 페이지 배경화면 설정 */
/* 페이지 배경화면 설정 */
.GFV2-BackgroundArea {
    color: black;
    padding: 10px;
    width: 1920px;
    height: 1600px;
    position: relative;
}
.GFV2-BackgroundArea > * {
    color: black;
    text-align: center;
    position: relative;
}

/* 페이지 배경화면 - 배경 이미지 설정 */
/* 페이지 배경화면 - 배경 이미지 설정 */
.GFV2-BackgroundIMG::before {
    content: "";
    background-image: url("../img/background/MondstadtCastleWhite.jpg");
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

/* 컨텐츠 배치 방식 */
/* 컨텐츠 배치 방식 */
.GFV2-Background-SectionConfig {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
}

/* 컨텐츠 배치구역 설정 */
/* 컨텐츠 배치구역 설정 */
/* 전체 컨텐츠 배치구역 설정 */
.GFV2-Content-Outer-Main {
    width: 95%;
    height: 90%;
    margin-top: 63px;
    
    display: inline-block;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

/* 컨텐츠 Outer 영역 컨텐츠 배치 방식 설정 */
.GFV2-ContentOuter-SectionConfig {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
}

/* 세부 컨텐츠 배치구역 설정 */
.GFV2-Content-Title {
    width: 100%;
    height: 30%;

    position: relative;
}
.GFV2-Content-Title::before {
    content: "";
    background-color: black;
    opacity: 0;

    border-radius: 50px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}
.GFV2-Content-Title > * {
    position: relative;
}
.GFV2-Content-TitleBanner {
    width: 100%;
    height: 100%;

    display: flex;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

.GFV2-Content-TitleBannerIMG {
    width: 40%;
    height: 100%;

    animation: ShowUp 1s;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
} 
.IMG1 {
    background-image: url("../img/character/Character_Amber_Full_Wish.webp");
    background-size: 700px 600px;
    background-repeat: no-repeat;
    background-position: 30px 40px;
}
.IMG2 {
    background-image: url("../img/character/character_Ganyu_portrait.png");
    background-size: 600px 400px;
    background-repeat: no-repeat;
    background-position: 0px 15px;
}

.GFV2-Content-TitleBannerTEXT {
    width: 20%;
    height: 100%;

    font-family: 'GIfont';
    font-size: 50px;
    color: black;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;

    animation: ShowUp 1s;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

.GFV2-Content-List {
    width: 95%;
    height: 65%;
    
    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.GFV2-Content-ListTable {
    width: 95%;
    height: 95%;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    position: relative;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.GFV2-Content-ListTable::before {
    content: "";
    background-color: black;
    opacity: 0;

    border-radius: 50px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}
.GFV2-Content-ListTable > * {
    position: relative;
}

.GFV2-Content-Table {
    width: 1200px;
    height: 75px;

    top: 30px;

    margin-top: 3px;

    display: flex;
    justify-content: center;
    flex-direction: row;

    font-family: 'GIfont';
    font-size: large;

    /* border: 1px solid black;
    border-style: solid none; */

    position: relative;
}
.GFV2-Content-Table::before {
    content: "";
    background-color: black;
    opacity: 0.1;

    border-radius: 20px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}
.GFV2-Content-Table > * {
    position: relative;
}

.GFV2-Content-Table:hover {
    background-color: white;
    opacity: 0.9;
    border-radius: 20px;

    background-image: url("../img/ingameasset/Element_Anemo.png");
    background-size: 600px 400px;
    background-repeat: no-repeat;
    background-position: 210px 0px;
}
.GFV2-Content-Table:hover .GFV2-Content-ListTitle > a {
    text-decoration: none;
    color: red;
    font-size: 25px;
    animation: ShowUp 1s;
}



.GFV2-Content-ListNumber {
    width: 10%;
    height: 100%;

    margin-top: 10px;
}
.GFV2-Content-ListTitle {
    width: 65%;
    height: 100%;

    margin-top: 5px;
}
.GFV2-Content-ListTitle > a {
    width: 100%;
    height: 100%;

    text-decoration: none;
    color: black;
}

.GFV2-Content-ListTime {
    width: 25%;
    height: 100%;

    margin-top: 10px;
}

.GFV2-Content-Button {
    width: 95%;
    height: 10%;

    margin-top: 20px;

    display: flex;
    justify-content: center;
    flex-direction: row;

    position: relative;
}
.GFV2-Content-Button::before {
    content: "";
    background-color: black;
    opacity: 0.1;

    border-radius: 50px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}
.GFV2-Content-Button > * {
    position: relative;
}


.GFV2-Content-Paging {
    width: 60%;
    height: 95%;

    margin-top: 3px;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

.GFV2-Content-Write {
    width: 40%;
    height: 95%;

    margin-top: 3px;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

.GFV2-Content-PagingButton {
    width: 80%;
    height: 30%;

    margin-top: 45px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}

.GFV2-Content-WriteButton {
    width: 70%;
    height: 80%;

    margin-top: 15px;

    background-color: #E1F6FA;

    border-radius: 15px;

    font-family: 'GIfont';
    font-size: xx-large;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.GFV2-Content-WriteButton > a {
    text-decoration: none;
    color: black;
}

.GFV2-Content-WriteButton:hover {
    animation: ShowUp 1s;
    font-size: xx-large;

    color: black;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    border-radius: 15px;

    background-image: url("../img/character/Character_Klee_Full_Wish.webp");
    background-size: 700px 800px;
    background-repeat: no-repeat;
    background-position: -80px -50px;
}
```

</div>
</details>

자유게시판(익명게시판) 페이지입니다. 본 페이지에서는 백엔드와의 통신을 통해 DB에 데이터를 저장하고, 조회하며 수정 및 삭제 기능을 수행하는 최상단 페이지입니다. 이 페이지에서 게시물 데이터가 조회되어 하위 컴포넌트의 매개변수로 넘겨주고 있습니다. useState를 이용해 postdata 변수를 생성, 제어하며 useEffect와 axios로 백엔드와 통신 기능을 수행하여 데이터를 주고받아 게시판 기능을 수행하게 됩니다.

또한 페이징 기능도 구현하였습니다. 필요한 변수들을 선언하고 기능 구현을 위한 로직을 통해 최종적으로 게시글이 10개 단위로 출력되도록 하였습니다.

## 

### GeneralforumViewv2.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import axios from "axios";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/css/GeneralforumViewv2.css";
import "../style/css/Global.css";

const GeneralforumViewv2 = () => {
    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = React.useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    // 자유게시판의 게시물 상세보기.
    // Generalforum에서 게시물 데이터를 전달받아 내용을 출력.
    // 또한 이 곳에서 삭제와 수정 페이지로 데이터를 넘겨 기능을 구현하게 됨.

    // **
    // 여기부터는 리액트 스크립트
    // **

    // Generalforum에서 게시물 데이터를 가지고 오기위해 useLocation을 사용.
    const location = useLocation();

    // useLocation으로 가져온 데이터를 변수에 삽입.
    const postnumber = location.state.b_number_pk;
    const posttitle = location.state.b_title;
    const postwritetime = location.state.b_write_time;
    const postcontent = location.state.b_content;

    // 기능 작동 이후 페이지 이동을 위해 useNavigate을 사용.
    const navigate = useNavigate();

    // 게시글 삭제 기능
    const PostDelete = (event) => {
        event.preventDefault();

        axios({
            url: 'http://localhost:8090/board/boarddelete',
            method: 'put',
            data: { 
                b_number_pk: postnumber
            }
        })
        .then((Response) => {
            window.location.reload();
            alert("글이 삭제되었습니다.");
            navigate('/generalforum');
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    // 뒤로가기 기능
    const Backword = (event) => { 
        event.preventDefault();
        navigate(-1);
    }

    // **
    // 여기부터는 리액트 프론트
    // **

    return (
        <div className="GFVV2-BackgroundArea GFVV2-BackgroundIMG GFVV2-Background-SectionConfig" ref={pagestartpoint}>
            <div className='GFVV2-Content-Outer-Main GFVV2-ContentOuter-SectionConfig'>
                <div className='GFVV2-Content-TitleAndContents'>

                    <div className='GFVV2-Content-Contents'>
                        <div className='GFVV2-Content-ForumTitle'>
                            <p>{posttitle}</p>
                        </div>

                        <div className="GFVV2-Content-Line"/>

                        <div className='GFVV2-Content-ForumText'>
                            <p>{postcontent}</p>
                        </div>
                    </div>

                    <div className='GFVV2-Content-Title'>
                        <div className='GFVV2-Content-Time'>
                            <p>{postwritetime}</p>
                        </div>
                        <div className='GFVV2-Content-Button'>

                            <div className='GFVV2-Content-Backbtn' onClick={Backword}>
                                <p className="btntext">뒤로 가기</p>
                            </div>
                            <div className='GFVV2-Content-Deletebtn' onClick={PostDelete}>
                                <p className="btntext" >글 삭제하기</p>
                            </div>
                            <div className='GFVV2-Content-Updatebtn'>
                                <Link to={'/generalforum/writeoredit'} state={{ isModify: true,
                                                                            number: postnumber,
                                                                            title: posttitle,
                                                                            content: postcontent
                                                                            }}>
                                <p className="btntext">글 수정하기</p>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div> 
        </div>
    )
}

export default GeneralforumViewv2;
```

</div>
</details>

### GeneralforumViewv2.css
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```css
/* 글 상세보기 페이지 CSS */

/* 페이지 배경화면 설정 */
/* 배경화면 위에 흰색 투명 바탕의 컨텐츠 영역이 배치됨. */

/* 페이지 배경화면 설정 */
/* 페이지 배경화면 설정 */
.GFVV2-BackgroundArea {
    color: black;
    padding: 10px;
    width: 100%;
    height: 100vh;
    position: relative;
}
.GFVV2-BackgroundArea > * {
    color: black;
    text-align: center;
    position: relative;
}

/* 페이지 배경화면 - 배경 이미지 설정 */
/* 페이지 배경화면 - 배경 이미지 설정 */
.GFVV2-BackgroundIMG::before {
    content: "";
    background-attachment: fixed;
    background-image: url("../img/background/Starsky.jpg");
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

/* 컨텐츠 배치 방식 */
/* 컨텐츠 배치 방식 */
.GFVV2-Background-SectionConfig {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
}

/* 컨텐츠 배치구역 설정 */
/* 컨텐츠 배치구역 설정 */
/* 전체 컨텐츠 배치구역 설정 */
.GFVV2-Content-Outer-Main {
    width: 95%;
    height: 95%;
    margin-top: 80px;
    
    display: inline-block;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid white; */
}

/* 컨텐츠 Outer 영역 컨텐츠 배치 방식 설정 */
.GFVV2-ContentOuter-SectionConfig {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
}

.GFVV2-Content-TitleAndContents {
    width: 90%;
    height: 90%;

    margin-top: 30px;

    display: flex;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid white; */
}

.GFVV2-Content-Contents {
    width: 70%;
    height: 100%;

    display: inline-flex;
    justify-content: center;
    flex-direction: column;

    align-items: center;

    position: relative;
}
.GFVV2-Content-Contents > * {
    position: relative;
}
.GFVV2-Content-Contents::before {
    content: "";
    background-color: #EBF5FF;
    border-radius: 20px;
    opacity: 0.8;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}

.GFVV2-Content-ForumTitle {
    width: 98%;
    height: 10%;

    margin: 10px;
    left: 50px;

    text-align: left;

    font-family: 'GIfont';
    font-size: 40px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.GFVV2-Content-ForumTitle > p {
    bottom: 30px;
}
.GFVV2-Content-Line {
    width: 90%;
    height: 0.1%;

    border: 0.1px solid black;
}

.GFVV2-Content-ForumText {
    width: 95%;
    height: 90%;

    margin: 30px;
    left: 30px;

    text-align: left;

    font-family: 'GIfont';
    font-size: 20px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.GFVV2-Content-ForumText > p {
    top: 30px;
}

.GFVV2-Content-Title {
    width: 450px;
    height: 500px;

    right: 185px;
    position: fixed; 
}
.GFVV2-Content-Title > * {
    position: relative;
}
.GFVV2-Content-Title::before {
    content: "";
    background-color: #EBF5FF;
    border-radius: 20px;
    opacity: 0.8;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}

.GFVV2-Content-Time {
    width: 95%;
    height: 20%;

    margin: 10px;

    font-family: 'GIfont';
    font-size: 30px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.GFVV2-Content-Time > p {
    bottom: 30px;
}

.GFVV2-Content-Button {
    width: 95%;
    height: 73%;

    margin: 10px;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    font-family: 'GIfont';
    font-size: 25px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.GFVV2-Content-Button > p {
    top: 30px;
}

.btntext {
    margin-top: 40px;
}
.GFVV2-Content-Backbtn {
    width: 95%;
    height: 30%;

    background-color: #EBF5FF;
    border-radius: 20px;

    margin-top: 5px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.GFVV2-Content-Backbtn:hover{
    background-color: gray;
    border-radius: 20px;
    opacity: 0.7;
    color: red;
}
.GFVV2-Content-Deletebtn {
    width: 95%;
    height: 30%;

    margin-top: 5px;

    background-color: #EBF5FF;
    border-radius: 20px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.GFVV2-Content-Deletebtn:hover{
    background-color: gray;
    border-radius: 20px;
    opacity: 0.7;
    color: red;
}
.GFVV2-Content-Updatebtn {
    width: 95%;
    height: 30%;

    margin-top: 5px;

    background-color: #EBF5FF;
    border-radius: 20px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.GFVV2-Content-Updatebtn:hover{
    background-color: gray;
    border-radius: 20px;
    opacity: 0.7;
    color: red;
}


/* 반응형 웹 CSS 설정 */
@media ( max-width: 2000px ) {
    .GFVV2-Content-Title {
        width: 300px;
        height: 500px;
    
        right: 250px;
        position: fixed; 
    }

    .GFVV2-Content-Time {
        width: 90%;
        height: 20%;
    }

    .GFVV2-Content-Button {
        width: 90%;
        height: 70%;
    }

    .btntext {
        margin-top: 30px;
    }
}

/* 반응형 웹 CSS 설정 */
@media ( max-width: 1700px ) {
    .GFVV2-Content-Title {
        width: 220px;
        height: 420px;
    
        right: 100px;
        position: fixed; 
    }

    .GFVV2-Content-Time {
        width: 90%;
        height: 20%;
    }

    .GFVV2-Content-Button {
        width: 90%;
        height: 70%;
    }

    .btntext {
        margin-top: 20px;
    }
}

/* 반응형 웹 CSS 설정 */
@media ( max-width: 1200px ) {
    .GFVV2-Content-Title {
        width: 220px;
        height: 420px;
    
        right: 80px;
        position: fixed; 
    }
}

/* 반응형 웹 CSS 설정 */
@media ( max-width: 900px ) {
    .GFVV2-Content-Title {
        width: 180px;
        height: 420px;
    
        right: 0px;
        position: fixed; 
    }
}
```

</div>
</details>

자유게시판(익명게시판)의 상세 글 보기 페이지입니다. Generalforumv2.js에서 조회된 게시글 데이터는 useLocation을 통해 변수에 담겨져 출력되도록 하였습니다. 또한 게시글 수정 및 삭제 기능도 이 곳에서 수행할 수 있도록 하였습니다. 삭제 기능은 버튼의 onClick 함수를 적용하여 axios를 통해 백엔드로 글 번호가 넘어가 DB에서 삭제되도록 하였습니다. (DB에서 완전 삭제되지는 않고 삭제글 컬럼을 두고 그곳에서 Y/N 여부로 글 삭제를 판단하도록 되어있습니다.) 또 navigate를 사용하여 뒤로 가기 기능을 구현하였습니다.

## 

### GeneralforumWriteAndEditv2.js
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```javascript
import axios from "axios";
import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostInputv2 from "../components/PostInputv2";
import "../style/css/GeneralforumWriteAndEditv2.css";

const GeneralforumWriteAndEditv2 = () => {
    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    // 자유게시판 글 작성 페이지.
    // Generalforum에서 받아온 게시글 데이터로 수정을 하거나, 글을 작성하여 DB에 저장.

    // **
    // 여기부터는 리액트 스크립트
    // **

    // 기능 작동 이후 페이지 이동을 위해 useNavigate을 사용.
    const navigate = useNavigate();

    // 게시글 제목, 게시글 내용을 제어하는 state.
    // 하나의 input 컴포넌트로 게시글 작성-수정 기능을 구현하기 위해 isModify state를 사용함.
    const [b_title, setTitle] = React.useState('');
    const [b_content, setContent] = React.useState('');
    const [isModify, setIsModify] = React.useState(false);
    // const [isWorkEnd, setIsWorkEnd] = React.useState(false);

    // GeneralforumView에서 보낸 게시물 데이터를 받아오기 위해 useLocation을 사용.
    const location = useLocation();

    // useLocation으로 가져온 데이터를 변수에 삽입.
    // submit 함수를 작동시키는 부분이 컴포넌트로 내려갈 경우, location.state에 문제가 생겨 에러를 일으키니 주의.
    const postnumber = location.state.number;
    const posttitle = location.state.title;
    const postcontent = location.state.content;
    const postismodify = location.state.isModify;

    // localStorage.setItem("number", JSON.stringify(postnumber));
    // localStorage.setItem("title", JSON.stringify(posttitle));
    // localStorage.setItem("content", JSON.stringify(postcontent));
    // localStorage.setItem("ismodify", JSON.stringify(postismodify));

    // const savednumber = localStorage.getItem("number");
    // const savedtitle = localStorage.getItem("title");
    // const savedcontent = localStorage.getItem("content");
    // const savedismodify = localStorage.getItem("ismodify");

    // 게시글을 작성할 것인지, 수정할 것인지를 isModify state를 기준으로 검증.
    // 게시글 수정(isModify가 true일 경우)에는 게시글 값을 받아와서 input 컴포넌트로 넘기기 위해 데이터 변수를 set함수들로 삽입.
    React.useEffect(() => {
        if (postismodify === true)
        {
            setTitle(posttitle);
            setContent(postcontent);
            setIsModify(postismodify);
        }
    }, [postismodify, posttitle, postcontent]);

    // 게시글 작성-수정 기능 코드.
    // isModify 여부를 판별하여 게시글 작성 혹은 수정 기능이 작동됨.
    const submiteventhandler = (event) => {
        event.preventDefault();

        // 작성 혹은 수정된 게시글 데이터를 JSON 형식으로 하나의 변수에 삽입.
        const postdata = {b_title: b_title, b_content: b_content};

        console.log(b_title);
        console.log(b_content);

        // 게시글의 제목이나 내용이 비어있을 경우 경고창이 뜨고 작성-수정 기능이 동작하지 않음.
        if (b_title === "" || b_content === "") {
            alert("제목 혹은 내용을 모두 입력하여야합니다.");
            window.location.reload();
        }
        // isModify가 true이면 수정 기능 작동.
        else if (isModify === true) {
            axios({
                url: 'http://localhost:8090/board/boardupdate',
                method: 'put',
                data: { 
                    b_number_pk: postnumber,
                    b_title: b_title,
                    b_content: b_content
                }
            })
            .then((Response) => {
                alert("글 수정이 완료되었습니다.");
                navigate(`/generalforum`);
                window.location.reload();
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        // 아닌 경우에는 작성 기능 작동.
        else {
            axios.post('http://localhost:8090/board/write', postdata)
            .then((Response) => {
                alert("글 작성이 완료되었습니다.");
                navigate('/generalforum');
                window.location.reload();
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }

    // 현재 시스템 시간을 가져오는 코드
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1

    let date = today.getDate(); 
    const time = year + '-' + month + '-' + date;


    // **
    // 여기부터는 리액트 프론트
    // **

    return (
        <>
            {/* 매개변수 쓰임새.
                title / content : 게시글 수정 시 기존 데이터를 받아와 출력해주는데 사용.
                submitevent : submit 이벤트가 작성된 함수를 작동시키는데 사용.
                isModify : 게시글 작성-수정 여부를 판별하는 기준 변수.
                setTitle / setContent : 게시글 작성-수정 시 입력받은 데이터를 받아와 set함수에 사용.
            */}

            {isModify === false &&
                <div className="GFWAEV2-BackgroundArea GFWAEV2-BackgroundIMG GFWAEV2-Background-SectionConfig" ref={pagestartpoint}>
                    <div className='GFWAEV2-Content-Outer-Main GFWAEV2-ContentOuter-SectionConfig'>
                        <div className='GFWAEV2-Content-TitleAndContents'>

                            <PostInputv2
                                submitevent={submiteventhandler}
                                isModify={isModify}
                                setTitle={setTitle}
                                setContent={setContent}
                            />

                            <div className='GFWAEV2-Content-Title'>
                                <div className='GFWAEV2-Content-Time'>
                                    <p>{time}</p>
                                </div>
                                <div className='GFWAEV2-Content-Button'>

                                    <div className='GFWAEV2-Content-SubmitBtn' onClick={submiteventhandler}>
                                        <p className="btntext">등록</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            }

            {isModify === true &&
                <div className="GFWAEV2-BackgroundArea GFWAEV2-BackgroundIMG GFWAEV2-Background-SectionConfig" ref={pagestartpoint}>
                    <div className='GFWAEV2-Content-Outer-Main GFWAEV2-ContentOuter-SectionConfig'>
                        <div className='GFWAEV2-Content-TitleAndContents'>

                            <PostInputv2
                                title={b_title}
                                content={b_content}
                                submitevent={submiteventhandler}
                                isModify={isModify}
                                setTitle={setTitle}
                                setContent={setContent}
                            />

                            <div className='GFWAEV2-Content-Title'>
                                <div className='GFWAEV2-Content-Time'>
                                    <p>{time}</p>
                                </div>
                                <div className='GFWAEV2-Content-Button'>

                                    <div className='GFWAEV2-Content-SubmitBtn' onClick={submiteventhandler}>
                                        <p className="btntext">수정</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            }
        </>
    )
}

export default GeneralforumWriteAndEditv2;
```

</div>
</details>

### GeneralforumWriteAndEditv2.css
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```css
/* 익명게시판 작성 / 수정 페이지 CSS */

/* 페이지 배경화면 설정 */
/* 배경화면 위에 흰색 투명 바탕의 컨텐츠 영역이 배치됨. */

/* 페이지 배경화면 설정 */
/* 페이지 배경화면 설정 */
.GFWAEV2-BackgroundArea {
    color: black;
    padding: 10px;
    width: 100%;
    height: 100vh;
    position: relative;
}
.GFWAEV2-BackgroundArea > * {
    color: black;
    text-align: center;
    position: relative;
}

/* 페이지 배경화면 - 배경 이미지 설정 */
/* 페이지 배경화면 - 배경 이미지 설정 */
.GFWAEV2-BackgroundIMG::before {
    content: "";
    background-attachment: fixed;
    background-image: url("../img/background/Starsky.jpg");
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

/* 컨텐츠 배치 방식 */
/* 컨텐츠 배치 방식 */
.GFWAEV2-Background-SectionConfig {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
}

/* 컨텐츠 배치구역 설정 */
/* 컨텐츠 배치구역 설정 */
/* 전체 컨텐츠 배치구역 설정 */
.GFWAEV2-Content-Outer-Main {
    width: 95%;
    height: 95%;
    margin-top: 80px;
    
    display: inline-block;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid white; */
}

/* 컨텐츠 Outer 영역 컨텐츠 배치 방식 설정 */
.GFWAEV2-ContentOuter-SectionConfig {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
}

.GFWAEV2-Content-TitleAndContents {
    width: 90%;
    height: 90%;

    margin-top: 30px;

    display: flex;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid white; */
}

.GFWAEV2-Content-Title {
    width: 450px;
    height: 500px;

    right: 185px;
    position: fixed; 
}
.GFWAEV2-Content-Title > * {
    position: relative;
}
.GFWAEV2-Content-Title::before {
    content: "";
    background-color: #EBF5FF;
    border-radius: 20px;
    opacity: 0.8;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}

.GFWAEV2-Content-Time {
    width: 95%;
    height: 20%;

    margin: 10px;

    font-family: 'GIfont';
    font-size: 30px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.GFWAEV2-Content-Time > p {
    bottom: 30px;
}

.GFWAEV2-Content-Button {
    width: 95%;
    height: 73%;

    margin: 10px;

    display: inline-flex;
    align-items: center;
    flex-direction: column;

    font-family: 'GIfont';
    font-size: 25px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.GFWAEV2-Content-Button > p {
    top: 30px;
}

.btntext {
    margin-top: 40px;
}
.GFWAEV2-Content-SubmitBtn {
    width: 95%;
    height: 30%;

    background-color: #EBF5FF;
    border-radius: 20px;

    margin-top: 5px;

    /* 영역 확인용 경계선 설정 */
    /* border: 1px solid black; */
}
.GFWAEV2-Content-SubmitBtn:hover{
    background-color: gray;
    border-radius: 20px;
    opacity: 0.7;
    color: red;
}

/* 반응형 웹 CSS 설정 */
@media ( max-width: 2000px ) {
    .GFWAEV2-Content-Title {
        width: 180px;
        height: 400px;
    
        right: 250px;
        position: fixed; 
    }

    .GFWAEV2-Content-Time {
        width: 90%;
        height: 20%;
    }

    .GFWAEV2-Content-Button {
        width: 90%;
        height: 70%;
    }

    .btntext {
        margin-top: 30px;
    }
}

/* 반응형 웹 CSS 설정 */
@media ( max-width: 1500px ) {
    .GFWAEV2-Content-Title {
        width: 180px;
        height: 300px;
    
        right: 0px;
        position: fixed; 
    }

    .GFWAEV2-Content-Time {
        width: 90%;
        height: 20%;
    }

    .GFWAEV2-Content-Button {
        width: 90%;
        height: 70%;
    }

    .btntext {
        margin-top: 20px;
    }
}
```

</div>
</details>

자유게시판(익명게시판)의 글 작성 및 수정 페이지입니다. 기본적으로 상세 글 페이지와 동일한 구성으로 글 작성 및 수정 여부를 판단하는 변수를 만들어 같은 페이지에서 작성과 수정 기능이 구분되어 동작하도록 만들었습니다.

## 

## 2-3. 웹페이지 스크린샷
## 메인 페이지 (반응형 웹 적용)
![001 메인 페이지](https://user-images.githubusercontent.com/54127322/179523012-b23ad184-5e3e-44c8-9a17-cc4f0c69d2f6.JPG)
![002 메인 페이지 2](https://user-images.githubusercontent.com/54127322/179523019-22e0975e-5801-4c35-a2bd-b9cc852a8232.JPG)

본 프로젝트의 메인 페이지입니다. 메인 페이지는 반응형 웹이 적용되어 화면의 너비가 1200px 이하로 줄어들 경우, 배경화면과 출력 문구가 바뀌어 출력되도록 하였습니다.

## 상단 Appbar & 하단 Footer
![003 앱바](https://user-images.githubusercontent.com/54127322/179523022-2634c444-3239-4304-a788-09c93450b86d.JPG)
![004 푸터](https://user-images.githubusercontent.com/54127322/179523024-ad1bb3dc-796c-4468-9fe2-3bcbdd57de1b.JPG)

## 게임 소개 페이지
![005 게임 소개 페이지 01](https://user-images.githubusercontent.com/54127322/179523027-d8e3ce07-33ab-4ee6-9db2-a6343ab5a9f4.JPG)
![006 게임 소개 페이지 02](https://user-images.githubusercontent.com/54127322/179523031-eef0f02c-20de-4985-bbdf-b77b8d222c63.JPG)
![007 게임 소개 페이지 03](https://user-images.githubusercontent.com/54127322/179523032-70612c3e-0a4d-4d66-935d-9fc57167763b.JPG)
![008 게임 소개 페이지 04](https://user-images.githubusercontent.com/54127322/179523037-3f06e781-4d72-40ed-82b4-86e4908f2f68.JPG)
![009 게임 소개 페이지 05](https://user-images.githubusercontent.com/54127322/179523039-7e912dab-5122-4d2b-b2cf-fb3b50865f18.JPG)

## 월드 소개 페이지
![010 월드 소개 페이지 - 메인](https://user-images.githubusercontent.com/54127322/179523042-ea1e02cc-7e08-4b6c-961b-71e125d9eb9c.JPG)
![011 월드 소개 페이지 - 몬드](https://user-images.githubusercontent.com/54127322/179523044-e69adf59-4f60-43b0-aaae-b50510651dd8.JPG)
![012 월드 소개 페이지 - 리월](https://user-images.githubusercontent.com/54127322/179523047-a99d38f9-3c02-4857-8a5e-f4c69be63992.JPG)
![013 월드 소개 페이지 - 이나즈마](https://user-images.githubusercontent.com/54127322/179523049-d2122a38-d40f-4207-b67a-46b4129f4018.JPG)

## 자유게시판(익명게시판) 페이지
![014 익명게시판](https://user-images.githubusercontent.com/54127322/179523050-e527cf04-6ddc-40ef-913f-9fb33c29ee39.JPG)
![015 상세글 보기페이지](https://user-images.githubusercontent.com/54127322/179523053-8d7ec444-96ed-4990-8522-9e7d757d6a97.JPG)
![016 글 작성 페이지](https://user-images.githubusercontent.com/54127322/179523054-243e84fa-2127-4d99-9f76-121f5c1dab62.JPG)
![017 글 수정 페이지](https://user-images.githubusercontent.com/54127322/179523057-447ff788-46be-45d0-a795-238dc4a673d1.JPG)

## 자유게시판(익명게시판)의 각종 알림
![018 글 수정 알람](https://user-images.githubusercontent.com/54127322/179523060-3c815241-10e2-4970-877e-3857d2afe3cb.JPG)
![019 글 작성 알람](https://user-images.githubusercontent.com/54127322/179523062-ab8460b6-adc1-462a-8e6a-19b0c8840880.JPG)
![020 글 삭제 알람](https://user-images.githubusercontent.com/54127322/179523064-bede399e-8d5e-4ebe-96c4-fac6a765e45f.JPG)
![021 무결성 알람](https://user-images.githubusercontent.com/54127322/179523065-ff2d9c4a-4231-498f-9f9a-e41656b58c51.JPG)

## 3. 백엔드 (Spring Framework)
## 3-1. 프로젝트 구조
백엔드의 프로젝트 구조는 다음과 같습니다.
![SRC](https://user-images.githubusercontent.com/54127322/179523070-82bc045d-f37b-44bf-916f-fc1e36ce2205.JPG)

## 3-2. Database 테이블 설계
![DB 테이블 구조](https://user-images.githubusercontent.com/54127322/179523069-3d64abcb-af59-4d19-98e8-feda61a31666.JPG)

DB는 MariaDB를 사용하였으며 DBMS로는 MySQL Workbench를 이용하였습니다.

게시판 작성을 위해 1개의 테이블을 제작하였습니다. PK로 사용할 ‘게시판 번호’ B_NUMBER_PK를 시작으로 게시글 제목 B_TITLE, 게시글 내용 B_CONTENT, 게시글 작성 시간 B_WRITE_TIME, 게시글 삭제여부 B_DELETE_STATE의 5개 컬럼이 게시판 테이블에 존재하고 있습니다.

또한 훗날 회원가입 기능을 추가할 것을 염두하여 회원 테이블의 회원번호 컬럼을 FK로 존재하고 있으며 첨부파일 기능 확장을 염두하여 첨부파일 정보 컬럼도 존재하지만 현재로써 이 2가지 컬럼은 기능하고 있지 않습니다. (추후 기능 추가 이후 사용 예정)

## 3-3. Controller 구성
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```java
package com.privproject.genshinimpectweb.Controller;
import com.privproject.genshinimpectweb.Entity.BoardDto;
import com.privproject.genshinimpectweb.Service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/board")
@CrossOrigin
public class BoardController {

    @Autowired
    BoardService boardService;

    @PostMapping("/write")
    public String boardWrite(@RequestBody BoardDto boardDto)
    {
        boardService.boardWrite(boardDto);

        return "Board Write Complete!";
    }

    @GetMapping("/getallboardlist")
    public List<BoardDto> getallboardlist()
    {
        return boardService.getallboardlist();
    }

    @PutMapping("/boardupdate")
    public String boardUpdate(@RequestBody BoardDto boardDto)
    {
        boardService.boardUpdate(boardDto);

        return "Board Update Complete!";
    }

    @PutMapping("/boarddelete")
    public String boardDelete(@RequestBody BoardDto boardDto)
    {
        boardService.boardDelete(boardDto);

        return "Board Delete Complete!";
    }
}
```

</div>
</details>

@RequestMapping 어노테이션을 사용하여 게시판 기능에 관련된 ‘/board’에 대한 요청을 처리하는 Controller입니다. 각 메소드들은 글 작성, 글 조회, 글 수정, 글 삭제에 대한 기능들을 포함하고 있습니다.

또한 React와 Spring의 동시 사용으로 발생하는 CORS(Cross-Origin Resource Sharing) 문제를 해결하기 위해 @CrossOrigin 어노테이션을 사용하였습니다.

## 3-4. DTO 구성
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```java
package com.privproject.genshinimpectweb.Entity;
import lombok.Data;

@Data
public class BoardDto
{
    private int b_number_pk;
    private int m_number_fk;
    private String b_title;
    private String b_content;
    private String b_write_time;
    private String b_delete_state;
    private String b_attach_file_info;
}
```

</div>
</details>

DB 테이블 컬럼과 Mapping 하기 위한 Data Transfer Object의 구성들입니다.

## 3-5. DAO 구성
<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```java
package com.privproject.genshinimpectweb.Service;

import com.privproject.genshinimpectweb.Entity.BoardDto;

import java.util.List;

public interface BoardService
{
    void boardWrite(BoardDto boardDto);

    public List<BoardDto> getallboardlist();

    void boardUpdate(BoardDto boardDto);

    void boardDelete(BoardDto boardDto);
}
```

</div>
</details>

<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```java
package com.privproject.genshinimpectweb.Service;

import com.privproject.genshinimpectweb.Entity.BoardDto;
import com.privproject.genshinimpectweb.Entity.MemberDto;
import com.privproject.genshinimpectweb.Mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService
{
    @Autowired
    BoardMapper boardMapper;

    @Override
    public void boardWrite(BoardDto boardDto)
    {
        boardMapper.boardWrite(boardDto);
    }

    @Override
    public List<BoardDto> getallboardlist()
    {
        return boardMapper.getallboardlist();
    }

    @Override
    public void boardUpdate(BoardDto boardDto) {
        boardMapper.boardUpdate(boardDto);
    }

    @Override
    public void boardDelete(BoardDto boardDto)
    {
        boardMapper.boardDelete(boardDto);
    }
}
```

</div>
</details>

<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```java
package com.privproject.genshinimpectweb.Mapper;

import com.privproject.genshinimpectweb.Entity.BoardDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper
{
    void boardWrite(BoardDto boardDto);

    List<BoardDto> getallboardlist();

    void boardUpdate(BoardDto boardDto);

    void boardDelete(BoardDto boardDto);
}
```

</div>
</details>

<details>
<summary>코드 펼치기 / 접기</summary>
<div markdown="1">

```html
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.privproject.genshinimpectweb.Mapper.BoardMapper">
    <select id="getallboardlist" resultType="com.privproject.genshinimpectweb.Entity.BoardDto">
        SELECT *
        FROM board_tb
        WHERE b_delete_state = 'N'
    </select>

    <insert id="boardWrite" parameterType="com.privproject.genshinimpectweb.Entity.BoardDto">
        INSERT INTO board_tb(B_TITLE, B_CONTENT, B_WRITE_TIME, B_DELETE_STATE, B_ATTACH_FILE_INFO)
        VALUES (#{b_title}, #{b_content}, now(), 'N', '없음')
    </insert>

    <update id="boardUpdate" parameterType="com.privproject.genshinimpectweb.Entity.BoardDto">
        UPDATE board_tb
        SET B_TITLE = #{b_title}, B_CONTENT = #{b_content}, B_WRITE_TIME = now()
        WHERE B_NUMBER_PK = #{b_number_pk}
    </update>

    <update id="boardDelete" parameterType="com.privproject.genshinimpectweb.Entity.BoardDto">
        UPDATE board_tb
        SET B_DELETE_STATE = 'Y'
        WHERE B_NUMBER_PK = #{b_number_pk}
    </update>
</mapper>

```
</div>
</details>

백엔드 <-> DB 사이에서 데이터를 주고받는 기능을 담당하는 Data Access Object입니다. myBatis를 사용하여 DB에 SQL문을 전송하여 데이터를 호출하는 mapper.xml도 존재합니다.

## 4. 마무리
## 4-1. 소감
프로젝트 프론트엔드로 React를 선택한 뒤, 프로젝트에 사용할 시간이 여유롭지 않았기에 React를 체계적으로 배우지 못했습니다. 어떻게든 작동하는 결과물을 만들어보자는 심정으로 구글링과 유튜브 영상 등을 보고 리액트 프로젝트를 생성하고 SPA 구조를 구현한 뒤 스프링부트와 연동시킨다는 목표를 구현하는데 최선을 다했습니다.

결과적으로 잘 작동되는 웹 페이지를 완성하긴 했으나 프로젝트를 진행하면서 React에 대한 지식이 조금씩 늘어가며 프로젝트의 구조를 더 체계적으로 구성하거나 React Hook를 더 지혜롭게 사용하지 못했다는 생각이 들었습니다. 또한 
Redux같은 상태 관리 라이브러리에 대한 부분은 아예 생각도 하지 못한 점이 너무나도 아쉽습니다.

## 4-2. 앞으로 할 일
웹 프로그래머가 되기 위해 배워야할 것은 너무나도 무궁무진합니다. 공부에 정진하여 모자란 부분을 채워 다음 프로젝트에 반영하거나 이 프로젝트를 개선해야 할 것입니다.
