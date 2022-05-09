import * as React from 'react';
import "../styles/Footer.css";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import gamelogo from "../styles/img/GIKR_1587984241_9146.png";
import playgrade from "../styles/img/1c815dcb772be24409961e7d94e729c9_3752895997708255975.png";
import companylogo from "../styles/img/eaa64d81ae6a7318a6afb91cbffd83a4_118924438105936743.png";

import discordicon from "../styles/img/icons8-discord-30.png";
import facebookicon from "../styles/img/icons8-facebook-30.png";
import youtubeicon from "../styles/img/icons8-youtube-30.png";

const Footer = () => {
    return (
        <div>
            <footer id='footerarea'>

                <div id='pagelinkarea'>
                    <span className='iconbutton'>
                        <NavLink to={"/"}>
                        <img src={discordicon} alt="img error!"/>
                        </NavLink>
                    </span>

                    <span className='iconbutton'>
                        <NavLink to={"/"}>
                            <img src={facebookicon} alt="img error!"/>
                        </NavLink>
                    </span>

                    <span className='iconbutton'>
                        <NavLink to={"/"}>
                            <img src={youtubeicon} alt="img error!"/>
                        </NavLink>
                    </span>
                </div>

                <div id='contentarea'>
                    <div id='gamelogoarea'>
                        <img src={gamelogo} alt='img error!'/>
                    </div>

                    <div id='generalconditionsarea'>
                        <span className='linkbutton'>
                            <Link className='link' to="/">개인정보처리방침</Link>
                        </span>

                        <span className='linkbutton'>
                            <Link className='link' to="/">이용약관</Link>
                        </span>

                        <span className='linkbutton'>
                            <Link className='link' to="/">About Us</Link>
                        </span>

                        <span className='linkbutton'>
                            <Link className='link' to="/">개인정보 수집 및 이용</Link>
                        </span>

                        <span className='linkbutton'>
                            <Link className='link' to="/">고객센터</Link>
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