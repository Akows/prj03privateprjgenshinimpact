import React, { useRef } from "react";
import BannerInazuma from "../components/BannerInazuma";
import BannerLiyue from "../components/BannerLiyue";
import BannerMondstadt from "../components/BannerMondstadt";
import "../style/css/Mainpage.css";

const Mainpage = () => {
    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    return (
        <div ref={pagestartpoint}>
            <div className="mainpage-background-1">
                    <div className='mainpage-content-outer'>

                            <div className='mainpage-content-title'>
                                {/* <h1>Genshin Impect</h1> */}
                            </div>

                            <div className='mainpage-content-iframe'>
                                {/* <iframe width="860" height="515" src="https://www.youtube.com/embed/yytFBFzJLmU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/> */}
                            </div>

                            <div className='mainpage-content-introduce'>

                                <h2>
                                《원신》은 게임 개발사 미호요가 개발한 오픈 월드 어드벤처 게임입니다. <br/>
                                
                                이 원소의 힘으로 가득 찬 판타지 대륙 「티바트」에는 어떤 이야기들이 모험가들을 기다리고 있을까요? <br/>
                                
                                귀여운 페이몬과 함께 이 광활한 대지로 모험을 떠나보세요!
                                </h2>

                            </div>
                    </div>
            </div>

            <div className="mainpage-background-2">

                <div className='mainpage-content-outer'>

                    <div className='mainpage-content-contentsarea'>

                        <BannerMondstadt/>
                        <BannerLiyue/>
                        <BannerInazuma/>

                    </div>

                </div>

            </div>

            <div className="mainpage-background-3">
                
                <div className='mainpage-content-outer'>

                    <div className='mainpage-content-contentsarea'>
                        <h1>contents</h1>
                    </div>

                </div>

            </div>

            <div className="mainpage-background-4">
                <div className='mainpage-content-outer'>

                    <div className='mainpage-content-contentsarea'>
                        <h1>contents</h1>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Mainpage;
