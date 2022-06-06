import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import "../style/css/WorldInfoMondstadt.css";

const WorldInfoMondstadt = () => {
    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();
    const introduceBarbatos = useRef();
    const introduceKnightsofFavonius = useRef();
    const introduceMondCastle = useRef();
    const introduceMondPoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    // 페이지 새로고침을 위한 useLocation.
    const location = useLocation();

    // 페이지 특정 지점으로 이동하는 기능 코드.
    const moveToStart = () => {
        pagestartpoint.current.scrollIntoView({behavior: 'smooth'});
    };

    const moveToGodIntroduce = () => {
        introduceBarbatos.current.scrollIntoView({behavior: 'smooth'});
        location.reload();
    };
    const moveTointroduceKnightsofFavonius = () => {
        introduceKnightsofFavonius.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointroduceMondCastle = () => {
        introduceMondCastle.current.scrollIntoView({behavior: 'smooth'});
    };
    const moveTointroduceMondPoint = () => {
        introduceMondPoint.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <>
            <div className="WINFM-BackgroundArea WINFM-BackgroundIMG1" ref={pagestartpoint}>
                <div id='WINFM-Content-outer'>
                    <div id='WINFM-Content-ContentArea'>

                        <div id='WINFM-Content-ContentAreaInnerverticality'>
                            <div id="WINFM-Content-ContentArea-IntroTitle">
                                <p>Mondstadt</p> 
                                <p>몬드성</p>
                            </div>

                            <div id="WINFM-Content-ContentArea-IntroLogo">
                                <div id="WINFM-Content-ContentArea-MondstadtLogo"/>
                            </div>

                            <div id="WINFM-Content-ContentArea-IntroScript">
                                <p>티바트 대륙 북동쪽에 위치한 자유의 도시.</p> 
                                <p>산과 드넓은 평원 사이로 민들레 향기를 가득 머금은 자유의 바람이 시드르 호수 위로 불며</p> 
                                <p>호수 중앙의 섬에 위치한 몬드성에 바람 신 바르바토스의 축복과 은혜를 가져다준다.</p> 
                            </div>

                            <div id="WINFM-Content-ContentArea-IntroMoveBtu">
                                <div id="WINFM-Content-ContentArea-MoveGod">
                                    <p>집정관</p>
                                    <div id="WINFM-Content-ContentArea-MoveGodIMG" onClick={moveToGodIntroduce}/>
                                </div>
                                <div id="WINFM-Content-ContentArea-MoveKnights">
                                    <p>페보니우스 기사단</p>
                                    <div id="WINFM-Content-ContentArea-MoveKnightsIMG" onClick={moveTointroduceKnightsofFavonius}/>
                                </div>
                                <div id="WINFM-Content-ContentArea-MoveMondCastle">
                                    <p>몬드성</p>
                                    <div id="WINFM-Content-ContentArea-MoveMondCastleIMG" onClick={moveTointroduceMondCastle}/>
                                </div>
                                <div id="WINFM-Content-ContentArea-MovePoint">
                                    <p>주요 지점</p>
                                    <div id="WINFM-Content-ContentArea-MovePointIMG" onClick={moveTointroduceMondPoint}/>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="WINFM-BackgroundArea WINFM-BackgroundIMG2" ref={introduceBarbatos}>
                <div id='WINFM-Content-outer'>
                    <div id='WINFM-Content-ContentArea'>
                    
                        <div id='WINFM-Content-ContentAreaInnerorizontal'>

                            <div id="WINFM-Content-ContentArea-IntroBarbatosIMGArea">
                                <div id="WINFM-Content-ContentArea-IntroBarbatosIMG"/>
                            </div>

                            <div id="WINFM-Content-ContentArea-IntroBarbatosScriptArea">
                                <div id="WINFM-Content-ContentArea-IntroBarbatosScriptTitle">
                                    <p>바르바토스, 자유의 신</p>
                                    <p>Barbatos, The God of Freedom</p>
                                </div>
                                <div id="WINFM-Content-ContentArea-IntroBarbatosScriptIntro">
                                    <br/>
                                    <hr/>
                                    <br/>

                                    <p>오래 전 몬드 지역을 강압적으로 지배하던 폭군 데카라비안,</p>
                                    <p>바르바토스는 열풍의 마신을 축출하고 자유의 나라 몬드를 세웠다</p>
                                    <p>이후 1600여년 간 몬드를 다스렸으나 어느 날 돌연 종적을 감추었다</p>
                                    <p>현재에 이르기까지 1000년 동안 세상에 모습을 드러내지 않았으나</p>
                                    <p>몬드 사람들은 언젠가 바르바토스가 돌아올 것이라 굳게 믿고 있다</p>

                                    <br/>
                                    <hr/>
                                    <br/>

                                    <p>「바람의 방향은 항상 바뀌는 거니까」</p>
                                    <p>「언젠가는, 더 빛나는 곳으로 향할 날이 올거야」</p>
                                    <p>「이제부터는 내 축복과 함께 더 자유롭게 날아봐」</p>

                                </div>
                                <div id="WINFM-Content-ContentArea-IntroBarbatosScriptblank">

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="WINFM-BackgroundArea WINFM-BackgroundIMG3" ref={introduceKnightsofFavonius}>
                <div id='WINFM-Content-outer'>
                    <div id='WINFM-Content-ContentArea'>

                        <div id='WINFM-Content-ContentAreaInnerorizontal' className="FavoniusArea">

                            <div id='WINFM-Content-ContentArea-FavoniusArea1'>
                                <div id='WINFM-Content-ContentArea-FavoniusArea1-Script'>
                                    <p>페보니우스 기사단</p>
                                    <p>Knights of Favonius</p>

                                    <div id='WINFM-Content-ContentArea-FavoniusArea1-Script-Emblem'/>
                                </div>
                                <div id='WINFM-Content-ContentArea-FavoniusArea1-IMG'>
                                    
                                </div>
                            </div>

                            <div id='WINFM-Content-ContentArea-FavoniusArea2'>
                                <div id='WINFM-Content-ContentArea-FavoniusArea2-Script'>
                                    <p>1000년 전, '민들레 기사' 바네사가 세운 몬드의 정규 기사단</p>
                                    <p>'사자의 이빨' 바네사는 자신의 부족을 지키기 위해 몬드의 노예 검투사로 사투를 이어왔다.</p>

                                    <p>귀족의 압제에 고통받는 민중을 보다 못한 그녀는 동료들과 혁명을 일으켜 부패한 귀족들을 몰아내었다.</p>
                                        
                                    <p>새로운 몬드는 세운 그녀는 질서를 유지하기 위해 페보니우스 기사단을 창립하였다.</p>

                                    <p>초대 기사단장으로 취임한 바네사는 몬드의 자유를 대표하는 영웅으로 칭송받으며 시민들을 지키다가 죽었다.</p>

                                    <p>바네사는 사후 자신의 위업이 신들에게 인정받아 셀레스티아에 도달하여 새로운 신이 되었다고 한다.</p>

                                    <p>몬드 시민 사이에서는 바네사가 매의 모습으로 다시 나타나 자신들을 언제나 지켜보고 있다고 믿고있다.</p>
                                </div>
                                <div id='WINFM-Content-ContentArea-FavoniusArea2-IMG'>
                                    
                                </div>
                            </div>

                            <div id='WINFM-Content-ContentArea-FavoniusArea3'>
                                <div id='WINFM-Content-ContentArea-FavoniusArea3-Script'>
                                    
                                </div>
                                <div id='WINFM-Content-ContentArea-FavoniusArea3-IMG'>

                                </div>
                            </div>

                            <div id='WINFM-Content-ContentArea-FavoniusArea4'>
                                <div id='WINFM-Content-ContentArea-FavoniusArea4-Script'>
                                    
                                </div>
                                <div id='WINFM-Content-ContentArea-FavoniusArea4-IMG'>
                                    
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="WINFM-BackgroundArea WINFM-BackgroundIMG4" ref={introduceMondCastle}>
                <div id='WINFM-Content-outer'>
                    <div id='WINFM-Content-ContentArea'>
                        몬드 성
                    </div>
                </div>
            </div>

            <div className="WINFM-BackgroundArea WINFM-BackgroundIMG5" ref={introduceMondPoint}>
                <div id='WINFM-Content-outer'>
                    <div id='WINFM-Content-ContentArea'>
                        주요 거점
                    </div>
                </div>
            </div>

            <div id='WINFM-Menu-Remote'>
                <div id="WINFM-Menu-Remote-Icon" onClick={moveToStart}/>

                <div id="WINFM-Menu-Remote-Movebtu" onClick={moveToGodIntroduce}>
                    <div id="WINFM-Menu-Remote-Movebtu-Textbox">신</div>
                </div>
                <div id="WINFM-Menu-Remote-Movebtu" onClick={moveTointroduceKnightsofFavonius}>
                    <div id="WINFM-Menu-Remote-Movebtu-Textbox">기사단</div>
                </div>
                <div id="WINFM-Menu-Remote-Movebtu" onClick={moveTointroduceMondCastle}>
                    <div id="WINFM-Menu-Remote-Movebtu-Textbox">몬드성</div>
                </div>
                <div id="WINFM-Menu-Remote-Movebtu" onClick={moveTointroduceMondPoint}>
                    <div id="WINFM-Menu-Remote-Movebtu-Textbox">거점</div>
                </div>
            </div>
        </>
    )
}

export default WorldInfoMondstadt;