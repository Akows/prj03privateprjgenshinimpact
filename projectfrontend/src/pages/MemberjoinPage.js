import * as React from 'react';
import "../styles/MemberjoinPage.css";

const MemberjoinPage = () => {

    const [id, setId] = React.useState('');
    const [pwd, setPwd] = React.useState('');

    const handleClick = (e) => {
        e.preventDefault();

        const member = {id, pwd};

        fetch(
            "http://localhost:8090/member/signup", {
            method:"POST",
            headers:{"Content-type": "application/json"},
            body:JSON.stringify(member)
        }).then(() => {
            console.log('New Member Added!')
        })
    }

    return (
        <div id="memberjoinpage">

            <div id='joinformouter'>
                <h1>회원가입</h1>

                <div id='loginformarea'>
                    <form id='loginform'>

                        <div id='inputarea'>
                            <input value={id} placeholder='사용할 ID를 입력해주세요' onChange={(e) => setId(e.target.value)}/>
                        </div>

                        <div id='inputarea'>
                            <input value={pwd} placeholder='사용할 PWD를 입력해주세요'  onChange={(e) => setPwd(e.target.value)}/>
                        </div>

                        <br/>

                        <button id='submitbutton' onClick={handleClick}>가입</button>
                    </form>
                </div>

                <div id='imgshowarea'>

                </div>

            </div>
        </div>
    );
}
export default MemberjoinPage;