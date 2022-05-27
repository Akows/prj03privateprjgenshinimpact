import axios from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';
import BoardList from '../components/BoardList';
import Pagination from '../components/Pagination';
import "../style/css/Boardpage.css";

const Boardpage = () => {

    const [boarddata, setBoarddata] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:8090/board/getallboardlist")
                .then(response => {
                    console.log(response.data);
                    setBoarddata(response.data);
                });
    }, []);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage, setPostsPerPage] = React.useState(10);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    function currentPosts(tmp) {
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }

    return (
        <div id="boardpagebackground">
                <div id='boardpageouter'>
                        <div id='boardpageinner'>

                            <h1>자유게시판</h1>

                            {boarddata === "" && <p>게시글 데이터가 존재하지 않습니다.</p>} 

                            {boarddata !== "" && 
                                <>
                                    <div id='bp-boardpage-boardlist' className='bp-boardpage-contentsarea'>
                                        <table id='boardtable'>
                                            <thead>
                                                <tr>
                                                    <th>글 번호</th>
                                                    <th>제목</th>
                                                    <th>작성시간</th>
                                                </tr>
                                            </thead>

                                            <BoardList data={currentPosts(boarddata)}/>
                                        </table> 
                                    </div>

                                    <div id='bp-boardpage-boardpage' className='bp-boardpage-contentsarea'>
                                        <Pagination postsPerPage={postsPerPage} totalPosts={boarddata.length} paginate={setCurrentPage}></Pagination>
                                    </div>

                                </>
                            } 

                            <br></br>

                            <div id='bp-boardpage-writebtn' className='bp-boardpage-contentsarea'>
                                    <Link to="/board/boardwrite">
                                        글쓰기
                                    </Link>
                            </div>

                </div>
            </div>
        </div>
    );
};

export default Boardpage;