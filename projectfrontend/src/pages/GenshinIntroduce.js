import React, { useRef } from "react";
import ReactPlayer from "react-player";
import "../style/css/GenshinIntroduce.css";

import trailer from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/video/trailer.mp4";

const GenshinIntroduce = () => {
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
                                                <div id="EV-Content-Outer-Content-VI-Leftbtn">
                                                    
                                                </div>
                                                <div id="EV-Content-Outer-Content-VI-Silde">
                                                    
                                                </div>
                                                <div id="EV-Content-Outer-Content-VI-Silde">
                                                
                                                </div>
                                                <div id="EV-Content-Outer-Content-VI-Silde">
                                                
                                                </div>
                                                <div id="EV-Content-Outer-Content-VI-Silde">
                                                    
                                                </div>
                                                <div id="EV-Content-Outer-Content-VI-Silde">
                                                
                                                </div>
                                                <div id="EV-Content-Outer-Content-VI-Silde">
                                                
                                                </div>
                                                <div id="EV-Content-Outer-Content-VI-Rightbtn">
                                                
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div id="EV-Content-Outer-Content-GameFeature" ref={gamefeaturepoint}>
                                <div id="EV-Content-ContentAreaInnerverticality">
                                    <div id="EV-Content-Outer-Content-GFtitle">

                                    </div>

                                    <div id="EV-Content-Outer-Content-GF">

                                    </div>
                                </div>
                            </div>

                            <div id="EV-Content-Outer-Content-Productlaunch" ref={productlaunchpoint}>
                                <div id="EV-Content-ContentAreaInnerverticality">
                                    <div id="EV-Content-Outer-Content-PI">
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
            </div>
        </>
    )
}

export default GenshinIntroduce;
