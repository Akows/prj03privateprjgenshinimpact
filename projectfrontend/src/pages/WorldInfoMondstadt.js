import { useRef } from "react";
import "../style/css/WorldInfoMondstadt.css";

const WorldInfoMondstadt = () => {

    const introduceBarbatos = useRef();
    const introduceKnightsofFavonius = useRef();
    const introduceMondCastle = useRef();
    const introduceMondPoint = useRef();

    const moveToGodIntroduce = () => {
        introduceBarbatos.current.scrollIntoView({behavior: 'smooth'});
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
            <div className="WINFM-BackgroundArea WINFM-BackgroundIMG1">
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
                    
                        <div id='WINFM-Content-ContentAreaInnerverticality'>


                        </div>

                    </div>
                </div>
            </div>

            <div className="WINFM-BackgroundArea WINFM-BackgroundIMG3" ref={introduceKnightsofFavonius}>
                <div id='WINFM-Content-outer'>
                    <div id='WINFM-Content-ContentArea'>
                        정부조직? 군대?
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
        </>
    )
}

export default WorldInfoMondstadt;