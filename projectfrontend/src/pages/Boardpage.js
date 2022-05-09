import * as React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Boardpage.css";

const Boardpage = () => {

    const [board, setBoard] = React.useState('');

    React.useEffect(() => {
        fetch("http://localhost:8090/board/getallboard")
        .then(res => res.json())
        .then((result) => {
            setBoard(result);
        }
    )}, [])

    return (
        <div id="boardpage">

            <div id='boardouter'>
                <h1>자유게시판</h1>

                <div id='boardarea'>
                    <table id='boardtableouter'>
                        <thead>
                            <tr>
                                <th>글번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성시간</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                {board&&board.map(member => (
                                        <tr key={board.membernumber}>
                                            <td>{board.membernumber}</td>
                                            <td>{board.title}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                ))}
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td colSpan={'3'}></td>
                                <td><button id='boardwritebutton'><Link to="/boardwritepage">글 쓰기</Link></button> </td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Boardpage;