import * as React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Appbar.css";

const Appbar = () => {
    return (

        <div>
            <header>
                <div className="navarea">
                    <div className="navtitlearea">
                        <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
                            Genshin Impect
                        </Link>
                    </div>

                    <div className="navmenuarea">
                        <div className="navmenuareaouter">
                            <div className="navbutton navbutton2">
                                <Link to="/boardpage" style={{ textDecoration: 'none', color: 'white'}}>
                                    자유게시판
                                </Link>
                            </div>

                            <div className="navbutton navbutton2">
                                <Link to="/charactersinfopage" style={{ textDecoration: 'none', color: 'white' }}>
                                    캐릭터 소개
                                </Link>
                            </div>

                            <div className="navbutton navbutton2">
                                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                                    월드 정보
                                </Link>
                            </div>

                            <div className="navbutton navbutton2">
                                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                                    월드 지도
                                </Link>
                            </div>

                            <div className="navbutton navbutton2">
                                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                                    이벤트
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="navprofilearea">
                        <div className="navbutton">
                            <Link to="/mypage" style={{ textDecoration: 'none', color: 'white'}}>
                                마이페이지
                            </Link>
                        </div>

                        <div className="navbutton">
                            <Link to="/MemberjoinPage" style={{ textDecoration: 'none', color: 'white'}}>
                                회원가입
                            </Link>
                        </div>
                    </div>

                </div>
            </header>
        </div>

    );
}

export default Appbar;