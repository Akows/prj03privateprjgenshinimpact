
import { Link } from "react-router-dom";
import "../../style/css/BannerCSS/InazumaBannerVertical.css";

const InazumaBannerVertical = () => {
    return (
        <div id="IBannerVer-Outer">
            <Link to={"/worldinfo/inazuma"}>
            <div id="IBannerVer-Emblem"></div>
            <div id="IBannerVer-Text">
                이나즈마섬
                <div id="IBannerVer-HoverIMG"></div>
            </div>
            </Link>
        </div>
    )
};

export default InazumaBannerVertical;