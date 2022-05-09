import * as React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Appbar.css";

const Appbar = () => {
    return (

        <div>
            <header>
                <nav className="navarea">

                    <span className="navtitlearea">
                        <Link to="/">Genshin Impect</Link>
                    </span>

                    <div className="navmenuarea">
                        <div className="navbutton">
                            <Link to="/charactersinfopage">캐릭터 소개</Link>
                        </div>

                        <div className="navbutton">
                            <Link to="/">캐릭터 육성 정보</Link>
                        </div>

                        <div className="navbutton">
                            <Link to="/">자유게시판</Link>
                        </div>

                    </div>

                    <div className="navmenuarea">
                        <Link to="/Loginpage">로그인</Link>
                        <Link to="/MemberjoinPage">회원가입</Link>
                    </div>

                </nav>
            </header>
        </div>

    );
}

export default Appbar;