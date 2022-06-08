
import { Link } from "react-router-dom";
import "../../style/css/BannerCSS/LiyueBannerVertical.css";

const LiyueBannerVertical = () => {
    return (
        <div id="LBannerVer-Outer">
            <Link to={"/worldinfo/mondstadt"}>
            <div id="LBannerVer-Emblem"></div>
            <div id="LBannerVer-Text">
                리월항
                <div id="LBannerVer-HoverIMG"></div>
            </div>
            </Link>
        </div>
    )
};

export default LiyueBannerVertical;