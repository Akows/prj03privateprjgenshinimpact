import React from "react";
import "../styles/MemberAdmin.css";

const MemberAdmin = () => {

    const [memberdata, setMemberdata] = React.useState('');

    React.useEffect(() => {
        fetch("http://localhost:8090/member/getalluserlist")
        .then(res => res.json())
        .then((result) => {
            setMemberdata(result);
        }
    )}, [])

    return (
        <div id="memberadmin">
                <div>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>

                    {memberdata && <textarea rows={10} value={JSON.stringify(memberdata, null, 2)} readOnly={true}></textarea>}

                    
                </div>
        </div>
    );
}

export default MemberAdmin;