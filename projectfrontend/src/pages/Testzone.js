
import React, { useRef } from "react";

import "../style/css/Testzone.css";
import "../style/css/Global.css";

const Testzone = () => {

    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    return (
        <div className="TZ-BackgroundArea TZ-BackgroundIMG TZ-Background-SectionConfig" ref={pagestartpoint}>

            <div className='TZ-Content-Outer-Main TZ-ContentOuter-SectionConfig'>

                <div className='TZ-Content-Title'>
                    <div className='TZ-Content-TitleBanner'>
                        <div className='TZ-Content-TitleBannerTEXT'>
                            <p>자유게시판</p>
                        </div>
                    </div>
                </div>

                <div className='TZ-Content-List'>
                    <div className='TZ-Content-ListTable'>
                        
                    </div>
                </div>

                <div className='TZ-Content-Button'>
                    <div className='TZ-Content-PagingButton'>
                        
                    </div>

                    <div className='TZ-Content-WriteButton'>
                        
                    </div>
                </div>

            </div> 

        </div>
    )
}

export default Testzone;