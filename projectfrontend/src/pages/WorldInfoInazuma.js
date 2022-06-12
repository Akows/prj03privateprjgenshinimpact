import React, { useRef } from "react";

import "../style/css/WorldInfoInazuma.css";
import "../style/css/Global.css";

import inazumainfoimg1 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/Inazuma_01.jpg"; 
import inazumainfoimg2 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/Inazuma_02.jpg"; 
import inazumainfoimg3 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/Inazuma_03.jpg"; 
import inazumainfoimg4 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/Inazuma_04.jpg"; 
import inazumainfoimg5 from "D:/Coding Archive/Git Repo/PrivateProject/prj03privateprjgenshinimpact/projectfrontend/src/style/img/regionimg/Inazuma_05.jpg"; 

import InazumaBannerHorizontal from "../components/banner/InazumaBannerHorizontal";
import Sliderworldinfo from "../components/Sliderworldinfo";

const WorldInfoInazuma = () => {
    const imgset = [
        {
            img1: inazumainfoimg1,
            img2: inazumainfoimg2,
            img3: inazumainfoimg3,
            img4: inazumainfoimg4,
            img5: inazumainfoimg5
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
                            <div className='WIFI-IntroduceInazuma-Photoimg1'>
                                <p>이나즈마성</p>
                            </div>
                            <div className='WIFI-IntroduceInazuma-Photoimg2'>
                                <p>산호궁</p>
                            </div>
                        </div>
                        <div className='WIFI-IntroduceInazuma-Script'>
                            <p>티바트 대륙 극동에 위치한 봉쇄된 제도.</p>

                            <br/>

                            <p>끝없는 뇌우를 뚫고 벚꽃의 가호가 서린 열도에 들어서면</p>
                            <p>둘러싸인 사취, 우뚝 솟은 절벽 그리고 그윽한 산속에서</p>
                            <p>위대하신 나루카미 쇼군이 추구하는 영원을 확인할 수 있다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFI-IntroduceGod-ContentOuter WIFI-ContentOuter-SectionConfig' ref={introducegodpoint}>
                <div className='WIFI-IntroduceGod-ContentInner'>
                    <div className='WIFI-IntroduceGod-Background'>
                        <div className='WIFI-IntroduceGod-Script1'>
                            <p>「이 몸은 세상에서 가장 뛰어나고 존귀하나니」</p>
                            <p>「천하의 권력은 내가 쥐어야 할 것이다」</p>
                            <p>「내 백성들에게 하나의 꿈을 약속한 적 있다. 바로 천년만년 변하지 않는 『영원』이다」</p>
                        </div>
                        <div className='WIFI-IntroduceGod-Name'>
                            <p>「영원의 신, 바알」</p>
                        </div>

                        <div className='WIFI-IntroduceGod-Script2'>
                            <p>그 어떤 신보다도 냉철하고 잔혹하며, 무자비한 신.</p>
                            <p>자신이 세운 이나즈마에서 절대적인 지배자로 군림하고 있다.</p>
                            <p>「천리」에 가장 가까운 건 오직 「영원」뿐이라는 믿음으로 자신의 백성들을 고통 속에 몰아넣고 있다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='WIFI-IntroduceCity-ContentOuter WIFI-ContentOuter-SectionConfig' ref={introducecitypoint}>
                <div className='WIFI-IntroduceCity-ContentInner'>
                    <div className='WIFI-IntroduceCity-Script'>
                        <div className='WIFI-IntroduceCity-ScriptTitle'>
                            <p>「이나즈마성」</p> 
                        </div>

                        <br/>

                        <p>이나즈마의 지배자, 번개의 신 '라이덴 쇼군'이 거처하는 천수각.</p>

                        <br/>

                        <p>바알은 '라이덴 쇼군'이라는 이름으로 이나즈마를 잔혹하게 지배하고 있다.</p>
                        <p>이나즈마 천수각은 쇼군의 절대적인 권력을 상징하는 장소로</p>
                        <p>쇼군은 섬기는 수많은 부하들의 삼엄한 경비 속에 철저하게 지켜지고 있다.</p>

                        <br/>

                        <p>이나즈마 가장 높은 곳에 위치하여 번개의 신은 그녀가 통치하는 백성들을 한 눈에 볼 수 있다고 전해진다.</p>
                    </div>

                    <div className='WIFI-IntroduceCity-IMG'>
                        <div className='WIFI-IntroduceCity-image'/>
                    </div>
                </div>
            </div>
            <div className='WIFI-IntroduceGov-ContentOuter WIFI-ContentOuter-SectionConfig' ref={introducegovpoint}>
                <div className='WIFI-IntroduceGov-ContentInner'>
                    <div className='WIFI-IntroduceGov-IMG'>
                        <div className='WIFI-IntroduceGov-image1'/>
                        <div className='WIFI-IntroduceGov-image2'/>
                        <div className='WIFI-IntroduceGov-image3'/>
                    </div>

                    <div className='WIFI-IntroduceGov-Script'>
                        <div className='WIFI-IntroduceGov-ScriptTitle'>
                            <p>이나즈마 삼봉행</p> 
                        </div>

                        <br/>

                        <p>라이덴 쇼군 아래에서 이나즈마를 통치하는 3개의 권력집단.</p>

                        <br/>

                        <p>이나즈마의 명문가 히이라기 가문, 쿠죠 가문, 카미사토 가문은</p>
                        <p>쇼군의 명령을 받아 각기 간조 봉행, 텐료 봉행, 야시로 봉행이라는 기관을 운영하고 있다.</p>
                        <p>그 이름은 '삼봉행'.</p>

                        <br/>

                        <p>간조 봉행은 이나즈마의 경제를 총괄하며, 외부에서 유입되는 외국인들의 관리감독을 담당한다.</p>
                        <p>텐료 봉행은 이나즈마의 군사를 담당하며, 쇼군의 명령에 따라 내외부의 외적을 처리한다.</p>
                        <p>야시로 봉행은 이나즈마의 제사와 예술을 담당하며, 이나즈마의 문화를 담당하고 있다.</p>
                    </div>
                </div>
            </div>

            <div className='WIFI-IntroduceViewpoint-ContentOuter WIFI-ContentOuter-SectionConfig' ref={introduceviewpoint}>
                <div className='WIFI-IntroduceViewpoint-ContentInner'>
                    <div className='WIFI-IntroduceViewpoint-Title'>
                        <p>눈여겨볼 장소</p>
                    </div>
                    <div className='WIFI-IntroduceViewpoint-Slider'>
                        <Sliderworldinfo imgs={imgset}/>
                    </div>
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
