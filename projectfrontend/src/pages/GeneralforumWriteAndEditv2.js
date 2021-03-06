import axios from "axios";
import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostInputv2 from "../components/PostInputv2";
import "../style/css/GeneralforumWriteAndEditv2.css";

const GeneralforumWriteAndEditv2 = () => {
    // 페이지를 이동하였을 때, 페이지 가장 맨 위 위치로 스크롤을 자동 위치시키는 기능
    // useRef로 이동 지점을 설정하고 useEffect로 함수가 자동 실행되도록 설정
    const pagestartpoint = useRef();

    React.useEffect(() => {
        pagestartpoint.current.scrollIntoView();
    }, [pagestartpoint]);

    // 자유게시판 글 작성 페이지.
    // Generalforum에서 받아온 게시글 데이터로 수정을 하거나, 글을 작성하여 DB에 저장.

    // **
    // 여기부터는 리액트 스크립트
    // **

    // 기능 작동 이후 페이지 이동을 위해 useNavigate을 사용.
    const navigate = useNavigate();

    // 게시글 제목, 게시글 내용을 제어하는 state.
    // 하나의 input 컴포넌트로 게시글 작성-수정 기능을 구현하기 위해 isModify state를 사용함.
    const [b_title, setTitle] = React.useState('');
    const [b_content, setContent] = React.useState('');
    const [isModify, setIsModify] = React.useState(false);
    // const [isWorkEnd, setIsWorkEnd] = React.useState(false);

    // GeneralforumView에서 보낸 게시물 데이터를 받아오기 위해 useLocation을 사용.
    const location = useLocation();

    // useLocation으로 가져온 데이터를 변수에 삽입.
    // submit 함수를 작동시키는 부분이 컴포넌트로 내려갈 경우, location.state에 문제가 생겨 에러를 일으키니 주의.
    const postnumber = location.state.number;
    const posttitle = location.state.title;
    const postcontent = location.state.content;
    const postismodify = location.state.isModify;

    // localStorage.setItem("number", JSON.stringify(postnumber));
    // localStorage.setItem("title", JSON.stringify(posttitle));
    // localStorage.setItem("content", JSON.stringify(postcontent));
    // localStorage.setItem("ismodify", JSON.stringify(postismodify));

    // const savednumber = localStorage.getItem("number");
    // const savedtitle = localStorage.getItem("title");
    // const savedcontent = localStorage.getItem("content");
    // const savedismodify = localStorage.getItem("ismodify");

    // 게시글을 작성할 것인지, 수정할 것인지를 isModify state를 기준으로 검증.
    // 게시글 수정(isModify가 true일 경우)에는 게시글 값을 받아와서 input 컴포넌트로 넘기기 위해 데이터 변수를 set함수들로 삽입.
    React.useEffect(() => {
        if (postismodify === true)
        {
            setTitle(posttitle);
            setContent(postcontent);
            setIsModify(postismodify);
        }
    }, [postismodify, posttitle, postcontent]);

    // 게시글 작성-수정 기능 코드.
    // isModify 여부를 판별하여 게시글 작성 혹은 수정 기능이 작동됨.
    const submiteventhandler = (event) => {
        event.preventDefault();

        // 작성 혹은 수정된 게시글 데이터를 JSON 형식으로 하나의 변수에 삽입.
        const postdata = {b_title: b_title, b_content: b_content};

        console.log(b_title);
        console.log(b_content);

        // 게시글의 제목이나 내용이 비어있을 경우 경고창이 뜨고 작성-수정 기능이 동작하지 않음.
        if (b_title === "" || b_content === "") {
            alert("제목 혹은 내용을 모두 입력하여야합니다.");
            window.location.reload();
        }
        // isModify가 true이면 수정 기능 작동.
        else if (isModify === true) {
            axios({
                url: 'http://localhost:8090/board/boardupdate',
                method: 'put',
                data: { 
                    b_number_pk: postnumber,
                    b_title: b_title,
                    b_content: b_content
                }
            })
            .then((Response) => {
                alert("글 수정이 완료되었습니다.");
                navigate(`/generalforum`);
                window.location.reload();
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        // 아닌 경우에는 작성 기능 작동.
        else {
            axios.post('http://localhost:8090/board/write', postdata)
            .then((Response) => {
                alert("글 작성이 완료되었습니다.");
                navigate('/generalforum');
                window.location.reload();
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }

    // 현재 시스템 시간을 가져오는 코드
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1

    let date = today.getDate(); 
    const time = year + '-' + month + '-' + date;


    // **
    // 여기부터는 리액트 프론트
    // **

    return (
        <>
            {/* 매개변수 쓰임새.
                title / content : 게시글 수정 시 기존 데이터를 받아와 출력해주는데 사용.
                submitevent : submit 이벤트가 작성된 함수를 작동시키는데 사용.
                isModify : 게시글 작성-수정 여부를 판별하는 기준 변수.
                setTitle / setContent : 게시글 작성-수정 시 입력받은 데이터를 받아와 set함수에 사용.
            */}

            {isModify === false &&
                <div className="GFWAEV2-BackgroundArea GFWAEV2-BackgroundIMG GFWAEV2-Background-SectionConfig" ref={pagestartpoint}>
                    <div className='GFWAEV2-Content-Outer-Main GFWAEV2-ContentOuter-SectionConfig'>
                        <div className='GFWAEV2-Content-TitleAndContents'>

                            <PostInputv2
                                submitevent={submiteventhandler}
                                isModify={isModify}
                                setTitle={setTitle}
                                setContent={setContent}
                            />

                            <div className='GFWAEV2-Content-Title'>
                                <div className='GFWAEV2-Content-Time'>
                                    <p>{time}</p>
                                </div>
                                <div className='GFWAEV2-Content-Button'>

                                    <div className='GFWAEV2-Content-SubmitBtn' onClick={submiteventhandler}>
                                        <p className="btntext">등록</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            }

            {isModify === true &&
                <div className="GFWAEV2-BackgroundArea GFWAEV2-BackgroundIMG GFWAEV2-Background-SectionConfig" ref={pagestartpoint}>
                    <div className='GFWAEV2-Content-Outer-Main GFWAEV2-ContentOuter-SectionConfig'>
                        <div className='GFWAEV2-Content-TitleAndContents'>

                            <PostInputv2
                                title={b_title}
                                content={b_content}
                                submitevent={submiteventhandler}
                                isModify={isModify}
                                setTitle={setTitle}
                                setContent={setContent}
                            />

                            <div className='GFWAEV2-Content-Title'>
                                <div className='GFWAEV2-Content-Time'>
                                    <p>{time}</p>
                                </div>
                                <div className='GFWAEV2-Content-Button'>

                                    <div className='GFWAEV2-Content-SubmitBtn' onClick={submiteventhandler}>
                                        <p className="btntext">수정</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            }
        </>
    )
}

export default GeneralforumWriteAndEditv2;