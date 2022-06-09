import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import "../unused/Generalforum.css";
import "../style/css/Global.css";

import Pagination from '../components/Pagination';

const Generalforum = () => {
    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = React.useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    // 자유게시판의 최상단.
    // 이 곳에서 게시물 데이터를 모두 불러받아 출력하고, 하위 페이지 혹은 컴포넌트의 매개변수로 넘겨져 기능 구현에 사용될 것임.

    // **
    // 여기부터는 리액트 스크립트
    // **

    // 서버에서 호출된 JSON 형식의 게시물 데이터들을 받을 state을 선언.
    const [postdata, setPostdata] = React.useState(['', '', '', '', '', '', '', '', '', '']);

    // 서버에서 게시물 데이터들을 호출하여 postdata state에 set.
    React.useEffect(() => {
        axios.get("http://localhost:8090/board/getallboardlist")
                .then(response => {
                    setPostdata(response.data);
                    console.log(response.data);
                });
    }, []);

    // 페이징 기능을 구현을 위해 필요한 state와, 변수 및 함수들.
    // 현재 페이지 - 페이지 당 표시할 게시물 갯수 state를 선언.
    const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지는 1.
    const [postsPerPage, setPostsPerPage] = React.useState(10); // 한 페이지에서 출력할 게시물의 갯수는 10.

    //no-unused-vars 경고 무시를 위한 더미 코드.
    console.log(setPostsPerPage); 

    // 기능 구현을 위해 필요한 index의 첫 위치와 마지막 위치를 계산하는 수식과 결과값을 담을 변수.
    const indexOfLast = currentPage * postsPerPage; // 1 x 10 =  10
    const indexOfFirst = indexOfLast - postsPerPage; // 10 - 10 = 0

    //게시글 데이터의 JSON 배열을 매개변수로 받아 전체 데이터의 길이를 계산.
    const currentPosts = (param) => {
        let currentPosts = 0;
        currentPosts = param.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }

    // **
    // 여기부터는 리액트 프론트
    // **

    return (
        <div className="GF-BackgroundArea GF-BackgroundIMG GF-Background-SectionConfig" ref={pagestartpoint}>
            <div className='GF-ForumView-ContentOuter GF-Pagetitle-SectionConfig'>
                <div className='GF-ForumView-ContentInner'>
                    <div className='GF-Pagetitle-Title'>
                        <div className='GF-Pagetitle-TitleBanner'>
                            <div className='GF-Pagetitle-TitleBannerText'> 
                                <p>자유게시판</p> 
                            </div>
                        </div>
                    </div>

                    <div className='GF-Pagetitle-List'>
                        <div className='GF-Pagetitle-ListTable'>
                            <table className='GF-Forumlist-Listtable-Table'>
                                <thead className='GF-Forumlist-Listtable-Thead'>
                                    <tr>
                                        <th className='GF-Forumlist-Listtable-ShowNumber'>
                                            <h3>글 번호</h3>
                                        </th>
                                        <th className='GF-Forumlist-Listtable-ShowTitle'>
                                            <h3>글 제목</h3>
                                        </th>
                                        <th className='GF-Forumlist-Listtable-ShowWriteTime'>
                                            <h3>작성 시간</h3>
                                        </th>
                                    </tr>
                                </thead>

                                {/* map 함수로 DB에서 받아온 데이터들을 적절한 형식으로 모두 출력. */}
                                {/* currentPosts 함수를 이용하여 전체 데이터들의 갯수도 계산한다. */}
                                {currentPosts(postdata).map(datas => {
                                    return (
                                        <tbody key={datas.b_number_pk} className='GF-Forumlist-Listtable-tbody'>
                                            <tr>
                                                <td className='GF-Forumlist-Listtable-ShowNumber'>
                                                    {datas.b_number_pk}
                                                </td>

                                                <td className='GF-Forumlist-Listtable-ShowTitle'>
                                                    <Link to={`/generalforum/view/${datas.b_number_pk}`} 
                                                        state={{b_number_pk: datas.b_number_pk,
                                                                b_title: datas.b_title,
                                                                b_content: datas.b_content,
                                                                b_write_time : datas.b_write_time,
                                                                isModify : false}}
                                                    >
                                                        <p>{datas.b_title}</p>
                                                    </Link>
                                                </td>

                                                <td className='GF-Forumlist-Listtable-ShowWriteTime'>
                                                    {datas.b_write_time}
                                                </td>
                                            </tr>
                                        </tbody>
                                    );
                                })}
                            </table>
                        </div>
                    </div>

                    <div className='GF-Pagetitle-Button'>
                        <div className='GF-Pagetitle-Button-Paging'>
                            <div className='GF-Pagetitle-Button-PagingButton'>
                                <Pagination 
                                    postsPerPage={postsPerPage} 
                                    totalPosts={postdata.length} 
                                    paginate={setCurrentPage}
                                />
                            </div>
                        </div>

                        <div className='GF-Pagetitle-Button-Write'>
                            <Link to="/generalforum/writeoredit" 
                                state={{isModify : false,
                                        number: '',
                                        title: '',
                                        content: ''
                                        }}>
                                <div className='GF-Pagetitle-Button-WriteButton'>
                                    <div className='GF-Pagetitle-Button-WriteButtonText'>
                                        <p>글쓰기</p>
                                    </div>
                                    <div className='GF-Pagetitle-Button-WriteButtonHoverIMG'/>
                                </div>
                            </Link>
                        </div>

                    </div>



                    








                </div>
            </div>
        </div>
    )
}

export default Generalforum;