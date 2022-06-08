import React, { useRef } from "react";

import InazumaBannerVertical from "../components/banner/InazumaBannerVertical";
import LiyueBannerVertical from "../components/banner/LiyueBannerVertical";
import MondBannerVertical from "../components/banner/MondBannerVertical";

import "../style/css/WorldInfopage.css";
import "../style/css/Global.css";

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
                            <MondBannerVertical/>
                            <LiyueBannerVertical/>
                            <InazumaBannerVertical/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorldInfopage;