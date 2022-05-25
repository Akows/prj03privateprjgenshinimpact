import React from "react";
import axios from "axios";
import "../style/css/MemberAdmin.css";
import MemberList from "../components/MemberList";

const MemberAdmin = () => {

    const [memberdata, setMemberdata] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:8090/member/getalluserlist")
                .then(response => {
                    setMemberdata(response.data);
                });
            }, []);

    /*  
        Axios가 아닌 fetch를 사용했을 때 코드
        React.useEffect(() => {
            fetch("http://localhost:8090/member/getalluserlist")
            .then(res => res.json())
            .then((result) => {
                setMemberdata(result);
            }
        )}, [])
    */

    return (
        <div id="memberadminpage">
                <div id="memberadminpagecontentsareaouter">
                        <div id="memberadminpagecontentsarea">

                            <br/><br/><br/>

                            {/* JSON 형식으로 DB에서 불러온 데이터들을 변환없이 그대로 화면에 호출하는 코드.
                                {memberdata && <textarea rows={10} value={JSON.stringify(memberdata, null, 2)} readOnly={true}></textarea>}                   
                            */}

                            <h1>MemberList</h1>

                            <br/>

                            {memberdata === undefined && <p>회원 데이터가 존재하지 않습니다.</p>} 

                            {memberdata !== undefined &&                             
                                <table>
                                <thead>
                                    <tr>
                                        <th>NUMBER</th>
                                        <th>ID</th>
                                        <th>PASSWORD</th>
                                        <th>NAME</th>
                                        <th>E-MAIL</th>
                                        <th>GRADE</th>
                                        <th>POINT</th>
                                        <th>ACTIVESTATE</th>
                                    </tr>
                                </thead>

                                <MemberList data={memberdata}/>

                                </table>
                            } 



                        </div>
                </div>
        </div>
    );
}

export default MemberAdmin;