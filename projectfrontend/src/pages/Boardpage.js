import * as React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Boardpage.css";

const Boardpage = () => {
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td colspan={'3'}></td>
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