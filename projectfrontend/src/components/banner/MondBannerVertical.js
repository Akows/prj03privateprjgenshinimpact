
import { Link } from "react-router-dom";
import "../../style/css/BannerCSS/MondBannerVertical.css";

const MondBannerVertical = () => {
    return (
        <div id="MBannerVer-Outer">
            <Link to={"/worldinfo/mondstadt"}>
            <div id="MBannerVer-Emblem"></div>
            <div id="MBannerVer-Text">
                몬드성
                <div id="MBannerVer-HoverIMG"></div>
            </div>
            </Link>
        </div>
    )
};

export default MondBannerVertical;