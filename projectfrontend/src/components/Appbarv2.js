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
                    <div id='AB-Content-Inner-Pagemenuarea-Button-box'>
                        <Link to="/generalforum">
                            자유게시판
                        </Link>
                    </div>
                    <div id='AB-Content-Inner-Pagemenuarea-Button-box'>
                        <Link to="/incomplete">
                            이벤트
                        </Link>
                    </div>
                    <div id='AB-Content-Inner-Pagemenuarea-Button-box'>
                        <Link to="/incomplete">
                            캐릭터 소개
                        </Link>
                    </div>
                    <div id='AB-Content-Inner-Pagemenuarea-Button-box'>
                        <Link to="/worldinfo">
                            티바트
                        </Link>
                    </div>
                    <div id='AB-Content-Inner-Pagemenuarea-Button-box'>
                        <a href='https://act.hoyolab.com/ys/app/interactive-map/index.html' target='_blank' rel="noopener noreferrer"> 
                            월드맵
                        </a> 
                    </div>
                </div>
            </div>

            <div id='AB-Content-Inner-Usermenu'>
                <div id='AB-Content-Inner-Usermenu-Button'>
                    <li id='AB-Content-Inner-Usermenu-Button-box-li'>
                        <div id='AB-Content-Inner-Usermenu-Button-box'>
                            <Link to="/">
                                프로필
                            </Link> 
                        </div>

                        <ul id="AB-Content-Inner-Usermenu-Button-box-li-ul">
                            <li>
                                <div id='AB-Content-Inner-Usermenu-Button-box'>
                                    <Link to="/login">
                                        로그인
                                    </Link>
                                </div>
                            </li>

                            <li>                   
                                <div id='AB-Content-Inner-Usermenu-Button-box'> 
                                    <Link to="/memberjoin">
                                        회원가입
                                    </Link>
                                </div>
                            </li>

                            <li>               
                                <div id='AB-Content-Inner-Usermenu-Button-box'>     
                                    <Link to="/memberadmin/memberlist">
                                        회원목록
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </li>
                    
                </div>
            </div>
        </div>
        


    );
}

export default Appbarv2;