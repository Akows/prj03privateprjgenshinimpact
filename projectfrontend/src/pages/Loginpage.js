// import axios from "axios";
import React from "react";
import "../style/css/Loginpage.css";

const Loginpage = () => {

    const [m_id, setM_id] = React.useState('');
    const [m_password, setM_password] = React.useState('');

    // const inputData = {m_id, m_password};

    const clickEvent = (e) => { 
        e.preventDefault();

        window.location.reload();
        alert("입력한 ID : " + m_id);
        alert("입력한 PWD : " + m_password);
        alert("로그인 기능은 구현되지 않았습니다. ㅠㅠ");

        // 스프링 시큐리티 사용시 리액트-스프링부트 사이 CORS 문제가 발생함.
        // 기존 해결 방법이 무력화되며, 구글링으로 찾아본 여러가지 수단이 모두 실패로 돌아감.
        // 시간이 촉박하므로 아쉽지만 로그인 기능 구현은 후순위로 보류함.

        // axios.post("/member/connecttest", inputData)
        // .then(function(response) {
        //     console.log(response);
        // })
        // .catch(function(error) {
        //     console.log(error);
        // });
    }

    return (

        <div id="m-loginpage-background">
                <div id='m-loginpage-content-outer'>

                        <h1>로그인</h1>

                                <div id='m-loginpage-joinform'>
                                    <form>
                                        <div id='m-loginpage-inputform'>

                                            <h2>회원정보</h2>

                                            <div id='m-loginpage-textinput'>
                                                <h5 id='m-loginpage-inputguide'>아이디</h5>
                                                <input value={m_id} placeholder='ID를 입력해주세요' onChange={(e) => setM_id(e.target.value)}/>
                                            </div>

                                            <br/>
                                            <br/>
                                            <hr/>

                                            <div id='m-loginpage-textinput'>
                                                <h5 id='m-loginpage-inputguide'>비밀번호</h5>
                                                <input value={m_password} placeholder='PWD를 입력해주세요'  onChange={(e) => setM_password(e.target.value)}/>
                                            </div>

                                            <br/>
                                            <br/>
                                            <hr/>
                                        </div>

                                        <br/>

                                        <div id='m-joinpage-submitbtu'>
                                            <button id='submitbutton' onClick={clickEvent}>로그인</button>
                                        </div>
                                    </form>
                                </div>

                                <div id='m-joinpage-imgshow'>

                                </div>


                </div>
        </div>

    );
}
export default Loginpage;