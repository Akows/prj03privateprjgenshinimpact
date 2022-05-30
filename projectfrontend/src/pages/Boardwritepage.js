import axios from 'axios';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Boardinput from '../components/Boardinput';
import "../style/css/Boardwritepage.css";

const Boardwritepage = (props) => {

    const [isUpdate, setisUpdate] = React.useState(false);
    const [b_title, setTitle] = React.useState('');
    const [b_content, setContent] = React.useState('');

    const navigate = useNavigate();
    const loc = useLocation();

    const bnumber = loc.state.b_number_pk;
    const btitle = loc.state.b_title;
    const bcontent = loc.state.b_content;
    const isupdate = loc.state.isUpdatereq;

    React.useEffect(() => {
        if (bnumber !== '')
        {
            setisUpdate(isupdate);
            setTitle(btitle);
            setContent(bcontent);
        }
    }, [bnumber, isupdate, btitle, bcontent]);

    const onb_titleChange = (event) => {
        setTitle(event.currentTarget.value);
        console.log(b_title);
    };

    const onb_contentChange = (event) => {
        setContent(event.currentTarget.value);
        console.log(b_content);
    };

    const titleInput = React.useRef();

    const resethandle = (event) => {
        event.preventDefault();

        setTitle(null);
        setContent(null);
    }

    const onSubmithandle = (event) => {
        event.preventDefault();

        const boardwritedata = {b_title: b_title, b_content: b_content};

        if (b_title === "" || b_content === "") {
            window.location.reload();
            alert("제목 혹은 내용을 모두 입력하여야합니다.");
        }

        if (isupdate === true) {
            axios({
                url: 'http://localhost:8090/board/boardupdate',
                method: 'put',
                data: { 
                    b_number_pk: bnumber,
                    b_title: btitle,
                    b_content: bcontent
                }
            })
            .then((Response) => {
                console.log('Update board Complete!')
                alert("글 수정이 완료되었습니다.");
                navigate('/board');
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        else {
            axios.post('http://localhost:8090/board/write', boardwritedata)
            .then((Response) => {
                console.log(boardwritedata);
                console.log('New board Added!')
                alert("글 작성이 완료되었습니다.");
                navigate(-1);
                window.location.reload();
            })
            .catch((error)=>{
                console.log(error);
            })
        }

        // fetch(
        //     "http://localhost:8090/board/write", {
        //     method:"POST",
        //     headers:{"Content-type": "application/json"},
        //     body:JSON.stringify(boardwritedata)
        // }).then(() => {
        //     console.log('New Board Contents Added!')
        // })
    }

    return (
        <div id="b-writepage-background">
                <div id='b-writepage-content-outer'>

                                {/* <div id='b-writepage-writecontent'>
                                    <h2>{b_title}</h2>
                                    
                                    <div>
                                    {b_content}
                                    </div>
                                </div> */}

                                {bnumber !== '' && 
                                    <>
                                        <h1>글 수정</h1>

                                        <div id='b-writepage-writeform'>
                                            <Boardinput
                                                valueb_title={b_title}
                                                valueb_content={b_content}
                                                handleb_titleChange={onb_titleChange}
                                                handleb_contentChange={onb_contentChange}
                                                handleonSubmit={onSubmithandle}
                                                handleReset={resethandle}
                                                isUpdatereq={isUpdate}
                                                titleInput={titleInput}
                                            />
                                        </div>
                                    </>
                                }

                                {bnumber === '' && 
                                    <>
                                        <h1>글 작성</h1>

                                        <div id='b-writepage-writeform'>
                                            <Boardinput
                                                valueb_title={b_title}
                                                valueb_content={b_content}
                                                handleb_titleChange={onb_titleChange}
                                                handleb_contentChange={onb_contentChange}
                                                handleonSubmit={onSubmithandle}
                                                handleReset={resethandle}
                                                isUpdatereq={false}
                                                titleInput={titleInput}
                                            />
                                        </div>
                                    </>
                                }


                </div>
        </div>
    );
}
export default Boardwritepage;