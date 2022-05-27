import { Link } from "react-router-dom";
import "../style/css/IntroduceMondstadt.css";


const IntroduceMondstadt = () => {
    return (
        <div className="winf-content-outer">

            <div className="winf-content-container">

                    <div className="winf-content-title contentsbox">
                        <h1> Mondstadt </h1>
                        <h3> 몬드 </h3>
                    </div>

                    <div className="winf-content-emblem contentsbox">

                    </div>

                    <br/>
                    <br/>

                    <div className="winf-content-archonintroduce contentsbox">
                        「바람의 방향은 항상 바뀌는 거니까」<br/><br/>
                        「언젠가는, 더 빛나는 곳으로 향할 날이 올거야」<br/><br/>
                        「이제부터는 내 축복과 함께 더 자유롭게 날아봐」<br/><br/>
                        - 바람의 신 바르바토스 
                    </div>

                    <br/>
                    <br/>

                    <div className="winf-content-cityintroduce contentsbox">
                        티바트 대륙 북동쪽에 위치한 자유의 도시. <br/><br/>
                        산과 드넓은 평원 사이로 민들레 향기를 가득 머금은 자유의 바람이 시드르 호수 위로 불며 <br/><br/>
                        호수 중앙의 섬에 위치한 몬드성에 바람 신 바르바토스의 축복과 은혜를 가져다준다.
                    </div>

                    <br/>
                    <br/>

                    <div className="winf-content-detailbtncontainer">
                        <div className="winf-content-detailbtn">
                            <Link to={"/"}>몬드성</Link>
                        </div>
                        <div className="winf-content-detailbtn">
                            <Link to={"/"}>바르바토스</Link>
                        </div>
                        <div className="winf-content-detailbtn">
                            <Link to={"/"}>페보니우스 기사단</Link>
                        </div>
                        <div className="winf-content-detailbtn">
                            <Link to={"/"}>가볼만한 곳</Link>
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default IntroduceMondstadt;


