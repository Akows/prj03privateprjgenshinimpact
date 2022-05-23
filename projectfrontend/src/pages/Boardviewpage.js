import * as React from 'react';
import "../style/css/Boardviewpage.css";

const Boardwritepage = () => {

    const [b_title, setTitle] = React.useState('');
    const [b_content, setContent] = React.useState('');

    const boardwritedata = {b_title, b_content};

    const handleClick = (e) => {
        e.preventDefault();

        fetch(
            "http://localhost:8090/board/write", {
            method:"POST",
            headers:{"Content-type": "application/json"},
            body:JSON.stringify(boardwritedata)
        }).then(() => {
            console.log('New Board Contents Added!')
        })
    }

    return (
        <div id="b-writepage-background">
                <div id='b-writepage-content-outer'>

                        <h1>글 작성</h1>

                                <div id='b-writepage-writeform'>
                                    <form>
                                        <div id='b-writepage-inputform'>

                                            <h2>회원정보</h2>

                                            <div id='b-writepage-textinput'>
                                                <h5 id='b-writepage-inputguide'>글제목</h5>
                                                <input value={b_title} placeholder='제목을 입력해주세요' onChange={(e) => setTitle(e.target.value)}/>
                                            </div>

                                            <br/>
                                            <br/>
                                            <hr/>

                                            <div id='b-writepage-textinput'>
                                                <h5 id='b-writepage-inputguide'>글내용</h5>
                                                <input value={b_content} placeholder='내용을 입력해주세요'  onChange={(e) => setContent(e.target.value)}/>
                                            </div>

                                            <br/>
                                            <br/>
                                            <hr/>
                                        </div>

                                        <br/>

                                        <div id='b-writepage-submitbtu'>
                                            <button id='submitbutton' onClick={handleClick}>글 작성</button>
                                        </div>
                                    </form>
                                </div>

                                <div id='b-writepage-imgshow'>

                                </div>


                </div>
        </div>
    );
}
export default Boardviewpage;