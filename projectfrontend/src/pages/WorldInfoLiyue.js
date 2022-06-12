import React, { useRef } from "react";

import "../style/css/WorldInfoLiyue.css";
import "../style/css/Global.css";

import liyueinfoimg1 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/liyue_01.jpg"; 
import liyueinfoimg2 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/liyue_02.jpg"; 
import liyueinfoimg3 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/liyue_03.jpg"; 
import liyueinfoimg4 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/liyue_04.jpg"; 
import liyueinfoimg5 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/liyue_05.jpg"; 

import LiyueBannerHorizontal from "../components/banner/LiyueBannerHorizontal";
import Sliderworldinfo from "../components/Sliderworldinfo";

const WorldInfoLiyue = () => {
    const imgset = [
        {
            img1: liyueinfoimg1,
            img2: liyueinfoimg2,
            img3: liyueinfoimg3,
            img4: liyueinfoimg4,
            img5: liyueinfoimg5
        }
    ];

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
                            <div className='WIFL-IntroduceLiyue-Photoimg1'>
                                <p>리월항</p>
                            </div>
                            <div className='WIFL-IntroduceLiyue-Photoimg2'>
                                <p>망서객잔</p>
                            </div>
                        </div>
                        <div className='WIFL-IntroduceLiyue-Script'>
                            <p>티바트 대륙 동쪽에 위치한 풍요로운 항구 도시.</p>

                            <br/>

                            <p>우뚝 솟아있는 산기슭과 석림, 생기 넘치는 강가와 드넓은 평원이</p>
                            <p>만든 리월의 다양한 지형은 계절마다 다채로운 풍경을 보여준다.</p>
                            <p>산과 돌이 이뤄낸 장관 속엔 얼마나 많은 바위 신의</p>
                            <p>오랜 선물들이 사람들을 기다리고 있을까?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFL-IntroduceGod-ContentOuter WIFL-ContentOuter-SectionConfig' ref={introducegodpoint}>
                <div className='WIFL-IntroduceGod-ContentInner'>
                    <div className='WIFL-IntroduceGod-Background'>
                        <div className='WIFL-IntroduceGod-Script1'>
                            <p>「대지에서 유통되고 있는 은전은 전부 나의 피와 살이다」</p>
                            <p>「난 이 방법으로 인간들의 땀과 지혜, 미래에 대한 보증을 선 것이다」</p>
                            <p>「이는 중생에 대한 내 믿음이다. 이 믿음을 저버린다면 나의 피를 더럽히는 짓이다」</p>
                        </div>
                        <div className='WIFL-IntroduceGod-Name'>
                            <p>「계약의 신, 모락스」</p>
                        </div>

                        <div className='WIFL-IntroduceGod-Script2'>
                            <p>리월을 수호하는 선인이 시조이자 최초의 선인.</p>
                            <p>티바트의 일곱 집정관 중 가장 나이가 많고, 가장 오래 지배자의 자리에 있는 신.</p>
                            <p>계약과 상업의 신으로써 리월을 티바트 제일가는 경제 중심지로 발전시켰다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFL-IntroduceCity-ContentOuter WIFL-ContentOuter-SectionConfig' ref={introducecitypoint}>
                <div className='WIFL-IntroduceCity-ContentInner'>
                    <div className='WIFL-IntroduceCity-Script'>
                        <div className='WIFL-IntroduceCity-ScriptTitle'>
                            <p>「리월항」</p> 
                        </div>

                        <br/>

                        <p>3700년 역사의, 티바트에서 가장 오래된 도시이자 상업적 번영을 이룬 도시.</p>

                        <br/>

                        <p>바위의 신 모락스는 리월 지역의 마신들을 몰아내고 리월항을 세웠다.</p>
                        <p>계약과 상업의 신이기도 한 모락스는 자신의 이념을 토대로 도시를 만들었고.</p>
                        <p>세밀한 법률과 통치규범을 통해 도시를 발전시켜나갔다.</p>

                        <br/>

                        <p>리월의 경제는 티바트 대륙에서 제일 가는 수준으로</p>
                        <p>리월항의 화폐인 '모라'는 티바트 어디에서나 통용되어 널리 사용되고 있을 정도이다</p>
                        <p>리월 사람들은 모락스를 숭배하며 '암왕제군'이라는 명칭으로 그를 부르고 있다.</p>
                    </div>

                    <div className='WIFL-IntroduceCity-IMG'>
                        <div className='WIFL-IntroduceCity-image'/>
                    </div>
                </div>
            </div>
            <div className='WIFL-IntroduceGov-ContentOuter WIFL-ContentOuter-SectionConfig' ref={introducegovpoint}>
                <div className='WIFL-IntroduceGov-ContentInner'>
                    <div className='WIFL-IntroduceGov-IMG'>
                        <div className='WIFL-IntroduceGov-image'/>
                    </div>

                    <div className='WIFL-IntroduceGov-Script'>
                        <div className='WIFL-IntroduceGov-ScriptTitle'>
                            <p>리월 칠성</p> 
                        </div>

                        <br/>

                        <p>모락스 바로 아래에서 리월을 다스리는 7명의 사람들.</p>

                        <br/>

                        <p>모락스는 자신과 선인들이 일방적으로 리월 사람들을 지배하고 싶은 마음은 없었다.</p>
                        <p>따라서 리월에서 가장 뛰어난 7명을 선발하여 지배자의 역할을 나누어 하도록 하였다.</p>
                        <p>그 이름은 '리월 칠성'.</p>

                        <br/>

                        <p>모락스와 선인들은 리월이 큰 문제가 생겼을 때 직접 나설 뿐</p>
                        <p>평상시에는 리월 칠성이 리월항을 직접 다스리도록 하고 있다.</p>
                        <p>또한 리월 칠성 아래에 8개 부처를 두어 이들을 보조하도록 하였다.</p>
                    </div>
                </div>
            </div>

            <div className='WIFL-IntroduceViewpoint-ContentOuter WIFL-ContentOuter-SectionConfig' ref={introduceviewpoint}>
                <div className='WIFL-IntroduceViewpoint-ContentInner'>
                    <div className='WIFL-IntroduceViewpoint-Title'>
                        <p>눈여겨볼 장소</p>
                    </div>
                    <div className='WIFL-IntroduceViewpoint-Slider'>
                        <Sliderworldinfo imgs={imgset}/>
                    </div>
                </div>
            </div>

            <div className='WIFL-Logo-ContentOuter WIFL-ContentOuter-SectionConfig'>
                <div className='WIFL-Logo-ContentInner'>
                    <div className="WIFL-Logo-ContentInner-MainLogo"/>
                    <div className="WIFL-Logo-ContentInner-Slogan"/>
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
