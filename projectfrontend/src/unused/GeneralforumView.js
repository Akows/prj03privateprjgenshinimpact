import axios from 'axios';
import * as React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import "../style/css/GeneralforumView.css";

const GeneralforumView = () => {
    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = React.useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    // 자유게시판의 게시물 상세보기.
    // Generalforum에서 게시물 데이터를 전달받아 내용을 출력.
    // 또한 이 곳에서 삭제와 수정 페이지로 데이터를 넘겨 기능을 구현하게 됨.

    // **
    // 여기부터는 리액트 스크립트
    // **

    // Generalforum에서 게시물 데이터를 가지고 오기위해 useLocation을 사용.
    const location = useLocation();

    // useLocation으로 가져온 데이터를 변수에 삽입.
    const postnumber = location.state.b_number_pk;
    const posttitle = location.state.b_title;
    const postwritetime = location.state.b_write_time;
    const postcontent = location.state.b_content;

    // 기능 작동 이후 페이지 이동을 위해 useNavigate을 사용.
    const navigate = useNavigate();

    // 게시글 삭제 기능
    const PostDelete = (event) => {
        event.preventDefault();

        axios({
            url: 'http://localhost:8090/board/boarddelete',
            method: 'put',
            data: { 
                b_number_pk: postnumber
            }
        })
        .then((Response) => {
            window.location.reload();
            alert("글이 삭제되었습니다.");
            navigate('/generalforum');
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    // 뒤로가기 기능
    const Backword = (event) => { 
        event.preventDefault();
        navigate(-1);
    }

    // **
    // 여기부터는 리액트 프론트
    // **

    return (
        <div id="GFV-Background" ref={pagestartpoint}>
            <div id="GFV-Content-Outer">
                <div id="GFV-Content-Inner">

                    <div id="GFV-Content-Title">
                        게시글 상세보기
                    </div>

                    <div id="GFV-Content-PostTitle">

                        <div className="Infoarea GFV-Content-PostTitle-Title">
                            <div id='GFV-Content-PostTitle-TitleArea'>
                                {posttitle}
                            </div>
                        </div>
                        <div className="Infoarea GFV-Content-PostTitle-Writetime">
                            <div id='GFV-Content-PostTitle-WriteTimeArea'>
                                {postwritetime}
                            </div>
                        </div>
                        <div className="Infoarea GFV-Content-PostTitle-Backward">
                            <button id='GFV-Content-PostTitle-BackwardButton' onClick={Backword}>
                                Backword
                            </button>
                        </div>

                    </div>

                    <div id="GFV-Content-PostContents">
                        <div id='GFV-Content-PostTitle-ContentArea'>
                            {postcontent}
                        </div>
                    </div>

                    <div id="GFV-Content-Tools">

                        <div className="GFVButtonarea GFV-Content-Tools">
                            <Link to={'/generalforum/writeoredit'} state={{ isModify: true,
                                                                            number: postnumber,
                                                                            title: posttitle,
                                                                            content: postcontent
                                                                            }}>
                            <button id='GFV-Content-Tools-Edit-EditButton'>
                                Edit
                            </button>
                            </Link>
                        </div>

                        <div className="GFVButtonarea GFV-Content-Tools">
                            <button id='GFV-Content-Tools-Delete-DeleteButton' onClick={PostDelete}>
                                Delete
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralforumView;