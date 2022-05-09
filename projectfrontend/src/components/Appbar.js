import * as React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Appbar.css";

const Appbar = () => {
    return (
        <div id="appbar">

            <div id='logoarea'>
                <span id='appbarbutton'>
                    <Link to="/">홈</Link>
                </span>
            </div>

            <div id='menuarea'>
                <span id='appbarbutton'>
                    <Link to="/charactersinfopage">캐릭터 소개</Link>
                </span>
                <span id='appbarbutton'>
                    <Link to="/">캐릭터 육성 정보</Link>
                </span>
                <span id='appbarbutton'>
                    <Link to="/">자유게시판</Link>
                </span>
            </div>

            <div id='loginarea'>
                <span id='appbarbutton'>
                    <Link to="/Loginpage">로그인</Link>
                </span>
                <span id='appbarbutton'>
                    <Link to="/MemberjoinPage">회원가입</Link>
                </span>
            </div>
        </div>
    );
}

export default Appbar;