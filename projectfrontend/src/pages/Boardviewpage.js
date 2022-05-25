import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../style/css/Boardviewpage.css";

const Boardviewpage = (data) => {

    const loc = useLocation();
    const navigate = useNavigate();

    // const searchnumber = loc.state.b_number_pk;

    // const [boarddata, setBoarddata] = React.useState([]);

    // React.useEffect(() => {
    //     axios.post("http://localhost:8090/board/getboardbynumber", searchnumber) 
    //             .then(response => {
    //                 console.log(response.data);
    //                 setBoarddata(response.data);
    //             });
    // }, []);

    const backtolist = (event) => { 
        event.preventDefault();

        navigate(`/board`);
    }

    return (
        <div id="b-writepage-background">
                <div id='b-writepage-content-outer'>

                        <h1>작성글 보기</h1>

                                <div id='b-writepage-writecontent'>
                                    <h2>{loc.state.b_title}</h2>

                                    <hr/>

                                    <p>{loc.state.b_number_pk}</p> <p>{loc.state.b_write_time}</p>
                                    
                                    <div>
                                    {loc.state.b_content}
                                    </div>

                                    <button onClick={backtolist}>뒤로 가기</button>
                                </div>
                </div>
        </div>
    );
}
export default Boardviewpage;