import React, { useRef } from "react";

import "../style/css/WorldInfoMond.css";
import "../style/css/Global.css";

import mondinfoimg1 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/mond_01.jpg"; 
import mondinfoimg2 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/mond_02.jpg"; 
import mondinfoimg3 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/mond_03.jpg"; 
import mondinfoimg4 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/mond_04.jpg"; 
import mondinfoimg5 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/mond_05.jpg"; 

import MondBannerHorizontal from "../components/banner/MondBannerHorizontal";
import Sliderworldinfo from "../components/Sliderworldinfo";

const WorldInfoMond = () => {
    const imgset = [
        {
            img1: mondinfoimg1,
            img2: mondinfoimg2,
            img3: mondinfoimg3,
            img4: mondinfoimg4,
            img5: mondinfoimg5
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
                            <div className='WIFM-IntroduceMond-Photoimg1'>
                                <p>몬드성</p>
                            </div>
                            <div className='WIFM-IntroduceMond-Photoimg2'>
                                <p>다운 와이너리</p>
                            </div>
                        </div>
                        <div className='WIFM-IntroduceMond-Script'>
                            <p>티바트 대륙 북동쪽에 위치한 바람과 자유의 도시.</p>

                            <br/>

                            <p>산과 드넓은 평원 사이로</p>
                            <p>민들레 향기를 가득 머금은 자유의 바람이</p>
                            <p>시드르 호수 위로 불며 호수 중앙의 섬에 위치한 몬드성에</p>
                            <p>바람 신 바르바토스의 축복과 은혜를 가져다준다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFM-IntroduceGod-ContentOuter WIFM-ContentOuter-SectionConfig' ref={introducegodpoint}>
                <div className='WIFM-IntroduceGod-ContentInner'>
                    <div className='WIFM-IntroduceGod-Background'>
                        <div className='WIFM-IntroduceGod-Script1'>
                            <p>「바람의 방향은 항상 바뀌는 거니까」</p>
                            <p>「언젠가는, 더 빛나는 곳으로 향할 날이 올거야」</p>
                            <p>「이제부터는 내 축복과 함께 더 자유롭게 날아봐」</p>
                        </div>
                        <div className='WIFM-IntroduceGod-Name'>
                            <p>「자유의 신, 바르바토스」</p>
                        </div>

                        <div className='WIFM-IntroduceGod-Script2'>
                            <p>수천년 전, 열풍의 마신 데카라비안을 축출하고 자유의 도시 '몬드'를 세운 바람과 자유의 신.</p>
                            <p>1600여년 간 몬드를 다스리다 홀연 자취를 감추었다.</p>
                            <p>1000여년 이상 모습을 드러내지 않았으나 몬드 사람들은 언젠가 바르바토스가 자신들 곁으로 돌아올 것이라 굳게 믿고있다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFM-IntroduceCity-ContentOuter WIFM-ContentOuter-SectionConfig' ref={introducecitypoint}>
                <div className='WIFM-IntroduceCity-ContentInner'>

                    <div className='WIFM-IntroduceCity-Script'>

                        <p>「몬드성」</p> 

                        <br/>

                        <p>「음유시인과 예술가들 사이에서 '자유의 도시', '목가의 성', '북쪽의 명관'이라고 몬드의 중심지.</p>

                        <br/>

                        <p>바르바토스가 자취를 감춘 뒤 타락한 귀족들이 권력을 독점하고 사람들을 노예로 부렸다.</p>
                        <p>어느 날 몬드에 강대한 마룡이 나타났는데, 귀족들은 몬드 사람들을 노예로 만들어 </p>
                        <p>마룡에게 제물로 바치며 자신들의 안전만을 지켜나갔다.</p>

                        <p>바네사라는 이름의 여성 노예가 음유시인의 모습으로 나타난 바르바토스의 도움을 얻어</p>
                        <p>마룡을 무찌르고 타락한 귀족들을 몰아냄으로써 몬드는 다시 자유를 되찾을 수 있었다.</p>

                        <p>이후 몬드 사람들은 하르파스툼 축제와 윈드블룸 축제로 당시의 사건을 기리고 있다.</p>

                    </div>

                    <div className='WIFM-IntroduceCity-IMG'>
                        
                    </div>

                </div>
            </div>
            <div className='WIFM-IntroduceGov-ContentOuter WIFM-ContentOuter-SectionConfig' ref={introducegovpoint}>
                <div className='WIFM-IntroduceGov-ContentInner'>

                </div>
            </div>

            <div className='WIFM-IntroduceViewpoint-ContentOuter WIFM-ContentOuter-SectionConfig' ref={introduceviewpoint}>
                <div className='WIFM-IntroduceViewpoint-ContentInner'>
                    <div className='WIFM-IntroduceViewpoint-Title'>
                        <p>눈여겨볼 장소</p>
                    </div>
                    <div className='WIFM-IntroduceViewpoint-Slider'>
                        <Sliderworldinfo imgs={imgset}/>
                    </div>
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
