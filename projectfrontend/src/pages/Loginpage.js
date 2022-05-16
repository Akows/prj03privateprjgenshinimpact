import React from "react";
import "../styles/Loginpage.css";

const Loginpage = () => {

    const [m_id, setM_id] = React.useState('');
    const [m_password, setM_password] = React.useState('');

    const clickEvent = (e) => {
        e.preventDefault();

        const inputData = {m_id, m_password};

        console.log(inputData);
    }

    /*
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
    }

	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])
    */

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