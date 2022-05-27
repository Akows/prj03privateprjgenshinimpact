import axios from 'axios';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../style/css/Boardviewpage.css";

const Boardviewpage = (data) => {

    const loc = useLocation();
    const navigate = useNavigate();

    const bnumberpk = loc.state.b_number_pk;

    // const [boarddata, setBoarddata] = React.useState([]);

    const boarddelete = (event) => {
        event.preventDefault();

        axios({
            url: 'http://localhost:8090/board/boarddelete',
            method: 'put',
            data: { 
                b_number_pk: bnumberpk
            }
        })
        .then((Response) => {
            console.log('Board Delete Added!')
            window.location.reload();
            alert("글이 삭제되었습니다.");
            navigate(-1);
        })
        .catch((error)=>{
            console.log(error);
        })

        // axios.put('http://localhost:8090/board/boarddelete', loc.state.b_number_pk, {
        //     headers: {
        //         "Content-type": "application/json",
        //     },
        //     data:{
        //         "b_number_pk": loc.state.b_number_pk
        //     }
        // })
        // .then((Response) => {
        //     console.log('Board Delete Added!')
        //     window.location.reload();
        //     alert("글이 삭제되었습니다.");
        // })
        // .catch((error)=>{
        //     console.log(error);
        // })
    }

    const boardupdate = (event) => { 
        event.preventDefault();

        

        navigate(-1);
    }

    const backtolist = (event) => { 
        event.preventDefault();
        navigate(-1);
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
                                    <button onClick={boardupdate}>글 수정</button>
                                    <button onClick={boarddelete}>글 삭제</button>
                                </div>
                </div>
        </div>
    );
}
export default Boardviewpage;