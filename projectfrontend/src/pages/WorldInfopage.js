import IntroduceInazuma from "../components/IntroduceInazuma";
import IntroduceLiyue from "../components/IntroduceLiyue";
import IntroduceMondstadt from "../components/IntroduceMondstadt";
import "../style/css/WorldInfopage.css";

const WorldInfopage = () => {
    return (
        <>
            <div className="winf-backgroundMondstadt">
                <IntroduceMondstadt/>
            </div>

            <div className="winf-backgroundLiyue">
                <IntroduceLiyue/>
            </div>

            <div className="winf-backgroundInazuma">
                <IntroduceInazuma/>
            </div>
        </>
    );
}

export default WorldInfopage;