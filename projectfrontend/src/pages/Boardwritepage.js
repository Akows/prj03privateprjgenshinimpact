import axios from 'axios';
import * as React from 'react';
import Boardinput from '../components/Boardinput';
import "../style/css/Boardwritepage.css";

const Boardwritepage = () => {

    // const [isUpdate, setisUpdate] = React.useState(false);

    const [b_title, setTitle] = React.useState('');
    const [b_content, setContent] = React.useState('');

    const onb_titleChange = (event) => {
        setTitle(event.currentTarget.value);
        console.log(b_title);
    };

    const onb_contentChange = (event) => {
        setContent(event.currentTarget.value);
        console.log(b_content);
    };

    const onSubmithandle = (event) => {
        event.preventDefault();

        const boardwritedata = {b_title: b_title, b_content: b_content};

        console.log(boardwritedata);

        axios.post('http://localhost:8090/board/write', boardwritedata)
        .then((Response) => {
            console.log(boardwritedata);
            console.log('New board Added!')
            window.location.reload();
            alert("글 작성이 완료되었습니다.");
        })
        .catch((error)=>{
            console.log(error);
        })

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

                        <h1>글 작성</h1>

                                <div id='b-writepage-writecontent'>
                                    <h2>{b_title}</h2>
                                    
                                    <div>
                                    {b_content}
                                    </div>
                                </div>

                                <div id='b-writepage-writeform'>
                                    <Boardinput
                                        valueb_title={b_title}
                                        valueb_content={b_content}
                                        handleb_titleChange={onb_titleChange}
                                        handleb_contentChange={onb_contentChange}
                                        handleonSubmit={onSubmithandle}
                                        isUpdatereq={'isUpdate'}
                                    />
                                </div>
                </div>
        </div>
    );
}
export default Boardwritepage;