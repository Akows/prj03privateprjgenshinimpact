import React from "react";
import axios from "axios";
import "../styles/MemberAdmin.css";

const MemberAdmin = () => {

    const [memberdata, setMemberdata] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:8090/member/getalluserlist")
                .then(response => {
                    console.log(response)
                    setMemberdata(response.data);
                });
            }, []);

{/* 
    React.useEffect(() => {
        fetch("http://localhost:8090/member/getalluserlist")
        .then(res => res.json())
        .then((result) => {
            setMemberdata(result);
        }
    )}, [])
*/}

    const memberlisttitle = () => {
        return (
            <tr>
                <td>NUMBER</td>
                <td>ID</td>
                <td>PASSWORD</td>
                <td>NAME</td>
                <td>E-MAIL</td>
                <td>GRADE</td>
                <td>POINT</td>
            </tr>
        )
    }

    const memberdataarray = memberdata.map((item, index) => {
        return (
            <table key={index}>
                <tr>
                    <td>{item.m_number_pk}</td>
                    <td>{item.m_id}</td>
                    <td>{item.m_password}</td>
                    <td>{item.m_name}</td>
                    <td>{item.m_email}</td>
                    <td>{item.m_grade}</td>
                    <td>{item.m_point}</td>
                </tr>
            </table>
        );
    });

    return (
        <div id="memberadmin">
                <div>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>

                    {/* JSON 형식으로 DB에서 불러온 데이터들을 변환없이 그대로 화면에 호출하는 코드.
                        {memberdata && <textarea rows={10} value={JSON.stringify(memberdata, null, 2)} readOnly={true}></textarea>}                   
                    */}

                        <div>
                            {memberlisttitle}
                        </div>



                    {memberdata && 

                        <div>
                            {memberdataarray}
                        </div>
                    }
                    
                </div>
        </div>
    );
}

export default MemberAdmin;