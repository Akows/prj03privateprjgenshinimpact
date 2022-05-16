import axios from 'axios';
import * as React from 'react';
import BoardList from '../components/BoardList';
import "../styles/Boardpage.css";

const Boardpage = () => {

    const [boarddata, setBoarddata] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:8090/board/getallboardlist")
                .then(response => {
                    console.log(response.data);
                    setBoarddata(response.data);
                });
    }, []);

    return (
        <div id="boardpagebackground">
                <div id='boardpageouter'>
                        <div id='boardpageinner'>

                            <br/><br/><br/>

                            <h1>자유게시판</h1>

                            <br/>

                            <table>
                                <thead>
                                    <tr>
                                        <th>글 번호</th>
                                        <th>제목</th>
                                        <th>내용</th>
                                        <th>작성시간</th>
                                    </tr>
                                </thead>

                                <BoardList data={boarddata}/>

                            </table>

                            <button>button</button>
                </div>
            </div>
        </div>
    );
};

export default Boardpage;