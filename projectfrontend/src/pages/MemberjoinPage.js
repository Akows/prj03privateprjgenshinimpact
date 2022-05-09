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
            <h1>회원 가입 화면입니다.</h1>
            <p>회원 가입 화면입니다.</p>
            <p>회원 가입 화면입니다.</p>

            <form>
                <input value={id} onChange={(e) => setId(e.target.value)}/>
                <input value={pwd} onChange={(e) => setPwd(e.target.value)}/>
                <button onClick={handleClick}>가입</button>
            </form>
            
        </div>
    );
}
export default MemberjoinPage;