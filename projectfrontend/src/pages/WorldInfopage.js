import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../style/css/WorldInfopage.css";

const WorldInfopage = () => {
    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    return (
        <>
            <div id="WINF-Background" ref={pagestartpoint}>
                <div id='WINF-Content-outer'>
                    <div id='WINF-Content-ContentArea'>

                        <div id="WINF-Content-Bannarouter">
                            <div id="WINF-Content-Bannar1">
                                <Link to={"/worldinfo/mondstadt"}>
                                <div id="WINF-Content-Bannar1-Emblem"></div>
                                <div id="WINF-Content-Bannar1-HoverIMG"></div>
                                </Link>
                            </div>
                            <div id="WINF-Content-Bannar2">
                                <Link to={"/"}>
                                <div id="WINF-Content-Bannar2-Emblem"></div>
                                <div id="WINF-Content-Bannar2-HoverIMG"></div>
                                </Link>
                            </div>
                            <div id="WINF-Content-Bannar3">
                                <Link to={"/"}>
                                <div id="WINF-Content-Bannar3-Emblem"></div>
                                <div id="WINF-Content-Bannar3-HoverIMG"></div>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default WorldInfopage;