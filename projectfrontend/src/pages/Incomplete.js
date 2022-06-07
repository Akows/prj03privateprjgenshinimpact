import "../style/css/Incomplete.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Incomplete = () => {
        // react-slick 기본 설정
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
    


    return (
        <div id="IC-Background">
            <div id="IC-Content-Outer">
                <div id="IC-Content-Inner">

                    <div id="IC-Content">
                        <div id="IC-Content-MainContents">
                            아직 미완성된 페이지 입니다.
                        </div>          

                        <div id="IC-Content-ShowIMG">
                            
                        </div>     

                        <div>
                            <h2> Single Item</h2>
                                <Slider {...settings}>
                                    <div>
                                        <h3>1</h3>
                                    </div>
                                    <div>
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                    <div>
                                        <h3>4</h3>
                                    </div>
                                    <div>
                                        <h3>5</h3>
                                    </div>
                                    <div>
                                        <h3>6</h3>
                                    </div>
                                </Slider>
                        </div>  

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Incomplete;