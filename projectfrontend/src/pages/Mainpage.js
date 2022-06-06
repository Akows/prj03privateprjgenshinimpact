import React, { useRef } from "react";
import ReactPlayer from "react-player";
import "../style/css/Mainpage.css";

import background from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/video/background.mp4";

const Mainpage = () => {
    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

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
            <div id="MG-Content-RWebBackground">
                <div id="MG-Content-RWebArea">
                    <div id="MG-Content-RWebArea-Logo">
                        
                    </div>
                    <div id="MG-Content-RWebArea-Paimon">
                        
                    </div>
                </div>
            </div>

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
