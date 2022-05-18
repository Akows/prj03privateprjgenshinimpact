import * as React from 'react';

import "../style/css/Footer.css";

import gamelogo from "../style/img/emblem/genshinimpectlogo.png";
import playgrade from "../style/img/ect/gameratingresult.png";
import companylogo from "../style/img/emblem/hovoverselogo.png";
import discordicon from "../style/img/emblem/discordicon3030.png";
import facebookicon from "../style/img/emblem/facebookicon3030.png";
import youtubeicon from "../style/img/emblem/youtubeicon3030.png";

const Footer = () => {
    return (
        <div>
            <footer id='footerarea'>

                <div id='pagelinkarea'>
                    <span className='iconbutton'>
                        <a href='https://discord.com/invite/genshinimpact' target='_blank' rel="noopener noreferrer"> 
                            <img src={discordicon} alt="img error!"/> 
                        </a>
                    </span>

                    <span className='iconbutton'>
                        <a href='https://www.facebook.com/Genshinimpact' target='_blank' rel="noopener noreferrer">
                            <img src={facebookicon} alt="img error!"/> 
                        </a>
                    </span>

                    <span className='iconbutton'>
                        <a href='https://www.youtube.com/c/GenshinImpact' target='_blank' rel="noopener noreferrer"> 
                            <img src={youtubeicon} alt="img error!"/> 
                        </a>                        
                    </span>
                </div>

                <div id='contentarea'>
                    <div id='gamelogoarea'>
                        <img src={gamelogo} alt='img error!'/>
                    </div>

                    <div id='generalconditionsarea'>
                        <span className='linkbutton'>
                            <a className='link' href='https://genshin.hoyoverse.com/ko/company/privacy' target='_blank' rel="noopener noreferrer"> 
                                개인정보처리방침
                            </a>   
                        </span>

                        <span className='linkbutton'>
                            <a className='link' href='https://genshin.hoyoverse.com/ko/company/terms' target='_blank' rel="noopener noreferrer"> 
                                이용약관
                            </a> 
                        </span>

                        <span className='linkbutton'>
                            <a className='link' href='https://www.hoyoverse.com/ko-kr/about-us?utm_source=genshin&utm_medium=footer' target='_blank' rel="noopener noreferrer"> 
                                About Us
                            </a> 
                        </span>

                        <span className='linkbutton'>
                            <a className='link' href='https://genshin.hoyoverse.com/ko/company/fund' target='_blank' rel="noopener noreferrer"> 
                            개인정보 수집 및 이용
                            </a> 
                        </span>

                        <span className='linkbutton'>
                            <a className='link' href='mailto:genshincs_kr@hoyoverse.com' target='_blank' rel="noopener noreferrer"> 
                                고객센터
                            </a> 
                        </span>
                    </div>

                    <div id='playgradearea'>
                        <img src={playgrade} alt='img error!' width="210" height="70"/>
                    </div>

                    <div id='playrightarea'>
                        "PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.
                        <br/>
                        Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. All other trademarks are the property of their respective owners.
                    </div>

                    <div id='companylogoarea'>
                        <img src={companylogo} alt='img error!' width="320" height="60"/>
                    </div>

                    <div id='companyrightarea'>
                        Copyright © COGNOSPHERE. All Rights Reserved.
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default Footer;