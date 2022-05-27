import { Link } from "react-router-dom";
import "../style/css/BannerMondstadt.css";

const BannerMondstadt = () => {
    return (
        <div className='mainpage-content-banner'>
            <div className="banner1">
                <Link to={"/worldinfo"}>Mondstadt</Link> <br/>
                <Link to={"/worldinfo"}>Mondstadt</Link>
            </div>
        </div>
    )
};

export default BannerMondstadt;