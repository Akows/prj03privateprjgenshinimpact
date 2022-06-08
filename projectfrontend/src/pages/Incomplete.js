import InazumaBannerHorizontal from "../components/banner/InazumaBannerHorizontal";
import LiyueBannerHorizontal from "../components/banner/LiyueBannerHorizontal";
import MondBannerHorizontal from "../components/banner/MondBannerHorizontal";
import "../style/css/Incomplete.css";

const Incomplete = () => {
    return (
        <div id="IC-Background">
            <div id="IC-Content-Outer">
                <div id="IC-Content-Inner">

                    <div id="IC-Content">
                        <div id="IC-Content-MainContents">

                        </div>          

                        <div id="IC-Content-ShowIMG">
                            
                        </div>     

                        <MondBannerHorizontal/>
                        <LiyueBannerHorizontal/>
                        <InazumaBannerHorizontal/>
                    </div>
                </div>
            </div>
        </div>


        
    )
}

export default Incomplete;