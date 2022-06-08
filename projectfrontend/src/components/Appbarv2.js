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
                    <div id='AB-Content-Inner-Pagemenuarea-Button-box' className='Pagemenuarea-Button-box4'>
                        <Link to="/testzone">
                            테스트존
                        </Link>
                    </div>
                </div>
            </div>

            {/* 프로필-로그인 메뉴 구역, 로그인 기능 구현 이후 사용예정 */}
            {/* <div id='AB-Content-Inner-Usermenuarea'>
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
            </div> */}

            {/* 반응형 웹 전용 메뉴 구역 */}
            {/* 다른 CSS와 충돌이 발생하여 해결까지 임시보류 */}
            {/* <div id='AB-Content-Inner-ResponsiveWebMenuarea'>
                <div id='AB-Content-Inner-ResponsiveWebMenuarea-Button'>
                    <li id='AB-Content-Inner-ResponsiveWebMenuarea-Button-box-li'>
                        <div id='AB-Content-Inner-ResponsiveWebMenuarea-Button-box'>
                            <Link to="/">
                                ==
                            </Link> 
                        </div>

                        <ul id="AB-Content-Inner-ResponsiveWebMenuarea-Button-box-li-ul">
                            <li>                   
                                <div id='AB-Content-Inner-ResponsiveWebMenuarea-Button-box'> 
                                    <Link to="/incomplete">
                                        원신
                                    </Link>
                                </div>
                            </li>
                            <li>               
                                <div id='AB-Content-Inner-ResponsiveWebMenuarea-Button-box'>     
                                    <Link to="/worldinfo">
                                        티바트
                                    </Link>
                                </div>
                            </li>
                            <li>               
                                <div id='AB-Content-Inner-ResponsiveWebMenuarea-Button-box'>     
                                    <Link to="/incomplete">
                                        이벤트
                                    </Link>
                                </div>
                            </li>
                            <li>               
                                <div id='AB-Content-Inner-ResponsiveWebMenuarea-Button-box'>     
                                    <Link to="/generalforum">
                                        자유게시판
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </li>
                </div>
            </div> */}
            
        </div>
    );
}

export default Appbarv2;