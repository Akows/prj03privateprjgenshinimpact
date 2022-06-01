import * as React from 'react';
import { Link } from 'react-router-dom';
import "../style/css/componentsCSS/Appbar.css";

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
                        <Link to="/generalforum">
                            자유게시판
                        </Link>
                    </li>

                    <li id='ab-btn'>
                        <Link to="/incomplete">
                            event
                        </Link>
                    </li>

                    <li id='ab-btn'>
                        <Link to="/incomplete">
                            캐릭터 소개
                        </Link>
                    </li>
                    <li id='ab-btn'>
                        <Link to="/worldinfo">
                            티바트
                        </Link>
                    </li>

                    <li id='ab-btn'>
                        <a href='https://act.hoyolab.com/ys/app/interactive-map/index.html?lang=ko-kr#/map/2?shown_types=5&center=82.00,-1169.00&zoom=-2.00' target='_blank' rel="noopener noreferrer"> 
                            월드맵
                        </a> 
                    </li> 

                    <li id='ab-btn'>
                        <Link to="/incomplete">
                            Profile                     
                        </Link>

                        <ul id="sub-menu">

                            <li>
                                <Link to="/login">
                                    로그인
                                </Link>
                            </li>

                            <li>                    
                                <Link to="/memberjoin">
                                    회원가입
                                </Link>
                            </li>

                            <li>                    
                                <Link to="/memberadmin/memberlist">
                                    회원목록
                                </Link>
                            </li>

                        </ul>
                    </li>

            </ul>
        </nav>
    );
}

export default Appbar;