import { Link } from "react-router-dom";
import "../style/css/BannerLiyue.css";

const BannerLiyue = () => {
    return (
        <div className='mainpage-content-banner'>
            <div className="banner2">
                <Link to={"/worldinfo"}>Liyue</Link> <br/>
                <Link to={"/worldinfo"}>璃月</Link>
            </div>
        </div>   
    )
};

export default BannerLiyue;