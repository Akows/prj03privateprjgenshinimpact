import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import "../style/css/Generalforum.css";
import Pagination from '../components/Pagination';
import BoardList from '../components/BoardList';

const Generalforum = () => {

    // 자유게시판의 최상단.
    // 이 곳에서 게시물 데이터를 모두 불러받아 출력하고, 적절한 컴포넌트의 매개변수로 넘겨져 기능 구현에 사용될 것임.

    // **
    // 여기부터는 리액트 스크립트
    // **

    // 서버에서 호출된 JSON 형식의 게시물 데이터들을 받을 state을 선언.
    const [postdata, setPostdata] = React.useState([]);

    // 서버에서 게시물 데이터들을 호출하여 postdata state에 set.
    React.useEffect(() => {
        axios.get("http://localhost:8090/board/getallboardlist")
                .then(response => {
                    setPostdata(response.data);
                });
    }, []);

    // 페이징 기능을 구현을 위해 필요한 state와, 변수 및 함수들.
    // 현재 페이지 - 페이지 당 표시할 게시물 갯수 state를 선언.
    const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지는 1.
    const [postsPerPage, setPostsPerPage] = React.useState(10); // 한 페이지에서 출력할 게시물의 갯수는 10.

    //no-unused-vars 경고 무시를 위한 더미 코드.
    console.log(setPostsPerPage); 

    // 기능 구현을 위해 필요한 index의 첫 위치와 마지막 위치를 계산하는 수식과 결과값을 담을 변수.
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    //
    const currentPosts = (param) => {
        let currentPosts = 0;
        currentPosts = param.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }



    // function currentPosts(tmp) {
    //     let currentPosts = 0;
    //     currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    //     return currentPosts;
    // }

    // **
    // 여기부터는 리액트 프론트
    // **

    return (
        <div id="GF-Background">
            <div id="GF-Content-Outer">
                <div id="GF-Content-Inner">

                    <div id="GF-Content-Title">
                        자유게시판
                    </div>

                    <div id="GF-Content-PostList">
                        <div id="GF-Content-PostList-List">
                            <table id="GF-Content-PostList-List-Table">
                                <thead>
                                    <tr>
                                        <th>
                                            <h3>Number</h3>
                                        </th>
                                        <th>
                                            <h3>Title</h3>
                                        </th>
                                        <th>
                                            <h3>Write Time</h3>
                                        </th>
                                        <th>

                                        </th>
                                    </tr>
                                </thead>

                                <BoardList data={currentPosts(postdata)}/>

                            </table> 
                        </div>
                    </div>

                    <div id="GF-Content-tools">

                        <div className="Buttonarea GF-Content-tools-PostPaging">
                            <Pagination 
                                postsPerPage={postsPerPage} 
                                totalPosts={postdata.length} 
                                paginate={setCurrentPage}
                            />
                        </div>

                        <div className="Buttonarea GF-Content-tools-PostWrite">
                            <Link to="/board/boardwrite">
                                <button id='GF-Content-tools-PostWrite-WriteButton'>
                                    WRITE
                                </button>
                            </Link>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Generalforum;