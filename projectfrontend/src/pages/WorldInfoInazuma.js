import React, { useRef } from "react";

import "../style/css/WorldInfoInazuma.css";
import "../style/css/Global.css";
import InazumaBannerHorizontal from "../components/banner/InazumaBannerHorizontal";

const WorldInfoInazuma = () => {
    
    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();
    const introducegodpoint = useRef();
    const introducecitypoint = useRef();
    const introducegovpoint = useRef();
    const introduceviewpoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    // 페이지 특정 지점으로 이동하는 기능 코드.
    const moveTointromond = () => {
        pagestartpoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointrogod = () => {
        introducegodpoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointrocity = () => {
        introducecitypoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointrogov = () => {
        introducegovpoint.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointroview = () => {
        introduceviewpoint.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="WIFI-BackgroundArea WIFI-BackgroundIMG WIFI-Background-SectionConfig" ref={pagestartpoint}>

            <div className='WIFI-IntroduceInazuma-ContentOuter WIFI-ContentOuter-SectionConfig'>
                <div className='WIFI-IntroduceInazuma-ContentInner'>
                    <div className='WIFI-IntroduceInazuma-TitleBanner'>
                        <div className='WIFI-IntroduceInazuma-Banner'>
                            <InazumaBannerHorizontal/>
                        </div>
                    </div>

                    <div className='WIFI-IntroduceInazuma-PhotoAndScript'>
                        <div className='WIFI-IntroduceInazuma-Photo'>
                            이나즈마 사진
                        </div>
                        <div className='WIFI-IntroduceInazuma-Script'>
                            <p>이나즈마 설명</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFI-IntroduceGod-ContentOuter WIFI-ContentOuter-SectionConfig' ref={introducegodpoint}>
                <div className='WIFI-IntroduceGod-ContentInner'>

                </div>
            </div>

            <div className='WIFI-IntroduceCity-ContentOuter WIFI-ContentOuter-SectionConfig' ref={introducecitypoint}>
                <div className='WIFI-IntroduceCity-ContentInner'>

                </div>
            </div>
            <div className='WIFI-IntroduceGov-ContentOuter WIFI-ContentOuter-SectionConfig' ref={introducegovpoint}>
                <div className='WIFI-IntroduceGov-ContentInner'>

                </div>
            </div>

            <div className='WIFI-IntroduceViewpoint-ContentOuter WIFI-ContentOuter-SectionConfig' ref={introduceviewpoint}>
                <div className='WIFI-IntroduceViewpoint-ContentInner'>

                </div>
            </div>

            <div className='WIFI-Logo-ContentOuter WIFI-ContentOuter-SectionConfig'>
                <div className='WIFI-Logo-ContentInner'>
                    <div className="WIFI-Logo-ContentInner-MainLogo"/>
                    <div className="WIFI-Logo-ContentInner-Slogan"/>
                </div>
            </div>

            <div id='WIFI-Remotecontrol'>
                <div id="WIFI-Remotecontrol-Icon" onClick={moveTointromond}/>

                <div className="WIFI-Remotecontrol-Button" onClick={moveTointrogod}>
                    <div className="WIFI-Remotecontrol-Textbox">집정관</div>
                </div>
                <div className="WIFI-Remotecontrol-Button" onClick={moveTointrocity}>
                    <div className="WIFI-Remotecontrol-Textbox">이나즈마</div>
                </div>
                <div className="WIFI-Remotecontrol-Button" onClick={moveTointrogov}>
                    <div className="WIFI-Remotecontrol-Textbox">삼봉행</div>
                </div>
                <div className="WIFI-Remotecontrol-Button" onClick={moveTointroview}>
                    <div className="WIFI-Remotecontrol-Textbox">관람</div>
                </div>
            </div>

        </div>
    )
}

export default WorldInfoInazuma;
