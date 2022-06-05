import { Link } from "react-router-dom";
import "../style/css/WorldInfopage.css";

const WorldInfopage = () => {
    return (
        <>
            <div id="WINF-Background">
                <div id='WINF-Content-outer'>
                    <div id='WINF-Content-ContentArea'>

                        <div id="WINF-Content-Bannarouter">
                            <div id="WINF-Content-Bannar1">
                                <Link to={"/worldinfo/mondstadt"}>
                                <div id="WINF-Content-Bannar1-Emblem"></div>
                                <div id="WINF-Content-Bannar1-HoverIMG"></div>
                                </Link>
                            </div>
                            <div id="WINF-Content-Bannar2">
                                <Link to={"/"}>
                                <div id="WINF-Content-Bannar2-Emblem"></div>
                                <div id="WINF-Content-Bannar2-HoverIMG"></div>
                                </Link>
                            </div>
                            <div id="WINF-Content-Bannar3">
                                <Link to={"/"}>
                                <div id="WINF-Content-Bannar3-Emblem"></div>
                                <div id="WINF-Content-Bannar3-HoverIMG"></div>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default WorldInfopage;