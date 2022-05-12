import { useState } from "react";
import "../styles/MemberAdmin.css";

const MemberAdmin = () => {

    const url = "http://localhost:8090/member/getalluserlist";

    const [member, setMember] = useState({m_number_pk:null, m_id:null, m_name:null, m_email:null, m_grade:null, m_point:null});

    function getMemberList(){
        return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(member => {
            return member;
        })
        .catch(error => console.log(error));
    }

    function handleClick(){
        getMemberList().then(response => {
            console.log(response);
            setMember(response);
        })
    }

    return (
        <div id="memberadmin">
                <div>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>

                        <button onClick={handleClick}>Member</button>

                        <p>
                            Number: {member.m_number_pk}<br/>
                            ID: {member.m_id}<br/>
                            Name: {member.m_name}<br/>
                            Email: {member.m_email}<br/>
                            Grade: {member.m_grade}<br/>
                            Point: {member.m_point}<br/>
                        </p>
                </div>
        </div>
    );
}

export default MemberAdmin;