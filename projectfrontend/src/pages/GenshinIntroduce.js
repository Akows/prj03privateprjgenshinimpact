import React, { useRef } from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";

import "../style/css/SlickCustomCSS/slick.css";
import "../style/css/SlickCustomCSS/slick-theme.css";

import "../style/css/GenshinIntroduce.css";
import "../style/css/Global.css";

import trailer from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/video/trailer.mp4";
import sildeimg1 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/gameInfo/silde1.png";
import sildeimg2 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/gameInfo/silde2.png";
import sildeimg3 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/gameInfo/silde3.png";
import sildeimg4 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/gameInfo/silde4.png";
import sildeimg5 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/gameInfo/silde5.png";
import sildeimg6 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/gameInfo/silde6.png";

import introimg1 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/gameInfo/silde2-1.png"; 
import introimg2 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/gameInfo/silde2-2.png"; 
import introimg3 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/gameInfo/silde2-3.png"; 
import introimg4 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/gameInfo/silde2-4.png"; 
import introimg5 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/gameInfo/silde2-5.png"; 

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

    // ???????????? ??????????????? ???, ????????? ?????? ??? ??? ????????? ???????????? ?????? ??????????????? ??????
    // useRef??? ?????? ????????? ???????????? useEffect??? ????????? ?????? ??????????????? ??????
    const pagestartpoint = useRef();
    const trailerpoint = useRef();
    const versioninfopoint = useRef();
    const gamefeaturepoint = useRef();
    const productlaunchpoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    // ????????? ?????? ???????????? ???????????? ?????? ??????.
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

    // ?????? ???????????? ???????????? ??????.
    const movehomepage = () => {
        window.open('https://genshin.hoyoverse.com/ko/');
    }

    // react-slick??? custom ????????? ??????
    // ????????? ????????? ????????? ???????????? ?????? ??????
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

    // react-slick ?????? ??????
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
                                                        <h2>2.7 ??????</h2>

                                                        <Slider {...settings}>
                                                            <img src={sildeimg1} alt="????????? ??????."/>
                                                            <img src={sildeimg2} alt="????????? ??????."/>
                                                            <img src={sildeimg3} alt="????????? ??????."/>
                                                            <img src={sildeimg4} alt="????????? ??????."/>
                                                            <img src={sildeimg5} alt="????????? ??????."/>
                                                            <img src={sildeimg6} alt="????????? ??????."/>
                                                        </Slider>
                                                    </div>
                                                </div>

                                                {/* react-slick ????????????????????? ???????????? ????????? div ????????? ????????? ?????? ?????? ?????? ??????. */}
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
                        <div id="EV-Content-MenuRemote-Movebtu-Textbox">????????????</div>
                    </div>
                    <div id="EV-Content-MenuRemote-Movebtu" onClick={moveTointroduceMondCastle}>
                        <div id="EV-Content-MenuRemote-Movebtu-Textbox">????????????</div>
                    </div>
                    <div id="EV-Content-MenuRemote-Movebtu" onClick={moveTointroduceMondPoint}>
                        <div id="EV-Content-MenuRemote-Movebtu-Textbox">????????????</div>
                    </div>
                </div>

            </div>

            
        </>
    )
}

export default GenshinIntroduce;
