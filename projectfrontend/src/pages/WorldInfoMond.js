import React, { useRef } from "react";

import "../style/css/WorldInfoMond.css";
import "../style/css/Global.css";

import MondBannerHorizontal from "../components/banner/MondBannerHorizontal";

const WorldInfoMond = () => {
    
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
        <div className="WIFM-BackgroundArea WIFM-BackgroundIMG WIFM-Background-SectionConfig" ref={pagestartpoint}>

            <div className='WIFM-IntroduceMond-ContentOuter WIFM-ContentOuter-SectionConfig'>
                <div className='WIFM-IntroduceMond-ContentInner'>
                    <div className='WIFM-IntroduceMond-TitleBanner'>
                        <div className='WIFM-IntroduceMond-Banner'>
                            <MondBannerHorizontal/>
                        </div>
                    </div>

                    <div className='WIFM-IntroduceMond-PhotoAndScript'>
                        <div className='WIFM-IntroduceMond-Photo'>
                            몬드 사진
                        </div>
                        <div className='WIFM-IntroduceMond-Script'>
                            <p>몬드 설명</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFM-IntroduceGod-ContentOuter WIFM-ContentOuter-SectionConfig' ref={introducegodpoint}>
                <div className='WIFM-IntroduceGod-ContentInner'>

                </div>
            </div>

            <div className='WIFM-IntroduceCity-ContentOuter WIFM-ContentOuter-SectionConfig' ref={introducecitypoint}>
                <div className='WIFM-IntroduceCity-ContentInner'>

                </div>
            </div>
            <div className='WIFM-IntroduceGov-ContentOuter WIFM-ContentOuter-SectionConfig' ref={introducegovpoint}>
                <div className='WIFM-IntroduceGov-ContentInner'>

                </div>
            </div>

            <div className='WIFM-IntroduceViewpoint-ContentOuter WIFM-ContentOuter-SectionConfig' ref={introduceviewpoint}>
                <div className='WIFM-IntroduceViewpoint-ContentInner'>

                </div>
            </div>

            <div className='WIFM-Logo-ContentOuter WIFM-ContentOuter-SectionConfig'>
                <div className='WIFM-Logo-ContentInner'>
                    <div className="WIFM-Logo-ContentInner-MainLogo"/>
                    <div className="WIFM-Logo-ContentInner-Slogan"/>
                </div>
            </div>

            <div id='WIFM-Remotecontrol'>
                <div id="WIFM-Remotecontrol-Icon" onClick={moveTointromond}/>

                <div className="WIFM-Remotecontrol-Button" onClick={moveTointrogod}>
                    <div className="WIFM-Remotecontrol-Textbox">집정관</div>
                </div>
                <div className="WIFM-Remotecontrol-Button" onClick={moveTointrocity}>
                    <div className="WIFM-Remotecontrol-Textbox">몬드성</div>
                </div>
                <div className="WIFM-Remotecontrol-Button" onClick={moveTointrogov}>
                    <div className="WIFM-Remotecontrol-Textbox">기사단</div>
                </div>
                <div className="WIFM-Remotecontrol-Button" onClick={moveTointroview}>
                    <div className="WIFM-Remotecontrol-Textbox">관람</div>
                </div>
            </div>

        </div>
    )
}

export default WorldInfoMond;
