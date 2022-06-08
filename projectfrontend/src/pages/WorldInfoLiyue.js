import React, { useRef } from "react";

import "../style/css/WorldInfoLiyue.css";
import "../style/css/Global.css";
import LiyueBannerHorizontal from "../components/banner/LiyueBannerHorizontal";

const WorldInfoLiyue = () => {
    
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
    const moveTointroliyue = () => {
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
        <div className="WIFL-BackgroundArea WIFL-BackgroundIMG WIFL-Background-SectionConfig" ref={pagestartpoint}>

            <div className='WIFL-IntroduceLiyue-ContentOuter WIFL-ContentOuter-SectionConfig'>
                <div className='WIFL-IntroduceLiyue-ContentInner'>
                    <div className='WIFL-IntroduceLiyue-TitleBanner'>
                        <div className='WIFL-IntroduceLiyue-Banner'>
                            <LiyueBannerHorizontal/>
                        </div>
                    </div>

                    <div className='WIFL-IntroduceLiyue-PhotoAndScript'>
                        <div className='WIFL-IntroduceLiyue-Photo'>
                            리월 사진
                        </div>
                        <div className='WIFL-IntroduceLiyue-Script'>
                            <p>리월 설명</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFL-IntroduceGod-ContentOuter WIFL-ContentOuter-SectionConfig' ref={introducegodpoint}>
                <div className='WIFL-IntroduceGod-ContentInner'>

                </div>
            </div>

            <div className='WIFL-IntroduceCity-ContentOuter WIFL-ContentOuter-SectionConfig' ref={introducecitypoint}>
                <div className='WIFL-IntroduceCity-ContentInner'>

                </div>
            </div>
            <div className='WIFL-IntroduceGov-ContentOuter WIFL-ContentOuter-SectionConfig' ref={introducegovpoint}>
                <div className='WIFL-IntroduceGov-ContentInner'>

                </div>
            </div>

            <div className='WIFL-IntroduceViewpoint-ContentOuter WIFL-ContentOuter-SectionConfig' ref={introduceviewpoint}>
                <div className='WIFL-IntroduceViewpoint-ContentInner'>

                </div>
            </div>

            <div className='WIFL-Logo-ContentOuter WIFL-ContentOuter-SectionConfig'>
                <div className='WIFL-Logo-ContentInner'>

                </div>
            </div>

            <div id='WIFL-Remotecontrol'>
                <div id="WIFL-Remotecontrol-Icon" onClick={moveTointroliyue}/>

                <div className="WIFL-Remotecontrol-Button" onClick={moveTointrogod}>
                    <div className="WIFL-Remotecontrol-Textbox">집정관</div>
                </div>
                <div className="WIFL-Remotecontrol-Button" onClick={moveTointrocity}>
                    <div className="WIFL-Remotecontrol-Textbox">리월항</div>
                </div>
                <div className="WIFL-Remotecontrol-Button" onClick={moveTointrogov}>
                    <div className="WIFL-Remotecontrol-Textbox">칠성</div>
                </div>
                <div className="WIFL-Remotecontrol-Button" onClick={moveTointroview}>
                    <div className="WIFL-Remotecontrol-Textbox">관람</div>
                </div>
            </div>

        </div>
    )
}

export default WorldInfoLiyue;
