import * as React from 'react';
import "../styles/MemberjoinPage.css";

const MemberjoinPage = () => {

    const [m_id, setM_id] = React.useState('');
    const [m_password, setM_password] = React.useState('');
    const [m_name, setM_name] = React.useState('');
    const [m_email, setM_email] = React.useState('');

    const handleClick = (e) => {
        e.preventDefault();

        const inputData = {m_id, m_password, m_name, m_email};

        fetch(
            "http://localhost:8090/member/signup", {
            method:"POST",
            headers:{"Content-type": "application/json"},
            body:JSON.stringify(inputData)
        }).then(() => {
            console.log('New Member Added!')
            window.location.reload();
            alert("회원가입이 완료되었습니다.");
        })
    }

    return (
        <div id="m-joinpage-background">
                <div id='m-joinpage-content-outer'>

                        <h1>회원가입</h1>

                                <div id='m-joinpage-joinform'>
                                    <form>
                                        <div id='m-joinpage-inputform'>

                                            <h2>회원정보</h2>

                                            <div id='m-joinpage-textinput'>
                                                <h5 id='m-joinpage-inputguide'>아이디</h5>
                                                <input value={m_id} placeholder='사용할 ID를 입력해주세요' onChange={(e) => setM_id(e.target.value)}/>
                                            </div>

                                            <br/>
                                            <br/>
                                            <hr/>

                                            <div id='m-joinpage-textinput'>
                                                <h5 id='m-joinpage-inputguide'>비밀번호</h5>
                                                <input value={m_password} placeholder='사용할 PWD를 입력해주세요'  onChange={(e) => setM_password(e.target.value)}/>
                                            </div>

                                            <br/>
                                            <br/>
                                            <hr/>

                                            <div id='m-joinpage-textinput'>
                                                <h5 id='m-joinpage-inputguide'>이름(닉네임)</h5>
                                                <input value={m_name} placeholder='사용할 NAME를 입력해주세요'  onChange={(e) => setM_name(e.target.value)}/>
                                            </div>

                                            <br/>
                                            <br/>
                                            <hr/>

                                            <div id='m-joinpage-textinput'>
                                                <h5 id='m-joinpage-inputguide'>이메일 주소</h5>
                                                <input value={m_email} placeholder='사용할 EMAIL를 입력해주세요'  onChange={(e) => setM_email(e.target.value)}/>
                                            </div>

                                            <br/>
                                            <br/>
                                            <hr/>
                                        </div>

                                        <br/>

                                        <div id='m-joinpage-submitbtu'>
                                            <button id='submitbutton' onClick={handleClick}>가입</button>
                                        </div>
                                    </form>
                                </div>

                                <div id='m-imgshow'>

                                </div>


                </div>
        </div>
    );
}
export default MemberjoinPage;