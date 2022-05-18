import * as React from 'react';
import { Link } from 'react-router-dom';
import "../style/css/Appbar.css";

const Appbar = () => {

    return (

        <nav>
            <ul id="main-menu">
                    <li id='ab-btn'>
                        <Link to="/">
                            Home
                        </Link> 
                    </li>

                    <li id='ab-btn'>
                        <Link to="/">
                            자유게시판
                        </Link>
                    </li>

                    <li id='ab-btn'>
                        <Link to="/">
                            이벤트
                        </Link>
                    </li>

                    <li id='ab-btn'>
                        <Link to="/">
                            캐릭터 소개
                        </Link>
                    </li>
                    <li id='ab-btn'>
                        <Link to="/">
                            티바트
                        </Link>
                    </li>

                    <li id='ab-btn'>
                        <Link to="/">
                            월드맵
                        </Link>
                    </li> 

                    <li id='ab-btn'>
                        <Link to="/">
                            Profile                     
                        </Link>

                        <ul id="sub-menu">

                            <li>
                                <Link to="/">
                                    로그인
                                </Link>
                            </li>

                            <li>                    
                                <Link to="/">
                                    회원가입
                                </Link>
                            </li>

                        </ul>
                    </li>

            </ul>
        </nav>
    );
}

export default Appbar;