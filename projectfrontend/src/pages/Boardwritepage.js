import * as React from 'react';
import "../styles/Boardwritepage.css";

const Boardwritepage = () => {

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const handleClick = (e) => {
        e.preventDefault();

        const boardwritedata = {title, content};

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
        <div id="boardwritepage">

            <div id='boardwritepageouter'>
                <h1>글 작성</h1>

                <div id='writeformarea'>
                    <form id='writeform'>

                        <div id='inputarea'>
                            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>

                        <div id='inputarea'>
                            <input value={content} onChange={(e) => setContent(e.target.value)}/>
                        </div>

                        <br/>

                        <button id='submitbutton' onClick={handleClick}>글 작성</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Boardwritepage;