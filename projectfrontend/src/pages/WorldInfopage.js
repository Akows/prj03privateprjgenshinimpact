import IntroduceInazuma from "../components/IntroduceInazuma";
import IntroduceLiyue from "../components/IntroduceLiyue";
import IntroduceMondstadt from "../components/IntroduceMondstadt";
import "../style/css/WorldInfopage.css";

const WorldInfopage = () => {
    return (
        <>
            <div className="winf-backgroundMondstadt">
                <a name="intromondstadt" href="#!" hidden/>
                <IntroduceMondstadt/>
            </div>

            <div className="winf-backgroundLiyue">
                <a name="introLiyue" href="#!" hidden/>
                <IntroduceLiyue/>
            </div>

            <div className="winf-backgroundInazuma">
                <a name="introInazuma" href="#!" hidden/>
                <IntroduceInazuma/>
            </div>
        </>
    );
}

export default WorldInfopage;