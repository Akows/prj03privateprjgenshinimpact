import { Link } from "react-router-dom";
import "../style/css/BannerInazuma.css";

const BannerInazuma = () => {
    return (
        <div className='mainpage-content-banner'>
            <div className="banner3">
                <Link to={"/worldinfo"}>Inazuma</Link> <br/>
                <Link to={"/worldinfo"}>いなずま</Link>
            </div>
        </div> 
    )
};

export default BannerInazuma;