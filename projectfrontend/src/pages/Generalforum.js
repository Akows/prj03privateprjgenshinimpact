import axios from "axios";
import { useState } from "react";

const Generalforum = () => {

    // 자유게시판의 최상단.
    // 이 곳에서 게시물 데이터를 모두 불러받아 출력하고, 적절한 컴포넌트의 매개변수로 넘겨져 기능 구현에 사용될 것임.

    // 서버에서 호출된 JSON 형식의 게시물 데이터들을 받을 state을 선언.
    const [postdata, setPostdata] = useState([]);

    // 서버에서 게시물 데이터들을 호출하여 postdata state에 set.
    React.useEffect(() => {
        axios.get("http://localhost:8090/board/getallboardlist")
                .then(response => {
                    setBoarddata(response.data);
                });
    }, []);

    // 페이징 기능을 구현을 위해 필요한 state와, 변수 및 함수들.
    // 현재 페이지 - 페이지 당 표시할 게시물 갯수 state를 선언.
    const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지는 1.
    const [postsPerPage, setPostsPerPage] = React.useState(10); // 페이지 당 표시할 게시물의 갯수는 10.

    // 











}

export default Generalforum;