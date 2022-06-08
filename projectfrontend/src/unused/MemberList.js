import React from "react";

const MemberList = ({data}) => {
    return (
        <>
            {data.map(datas => {
                return (
                    <tbody key={datas.m_number_pk}>
                        <tr>
                            <td>{datas.m_number_pk}</td>
                            <td>{datas.m_id}</td>
                            <td>{datas.m_password}</td>
                            <td>{datas.m_name}</td>
                            <td>{datas.m_email}</td>
                            <td>{datas.m_grade}</td>
                            <td>{datas.m_point}</td>
                            <td>{datas.m_delete_state}</td>
                        </tr>
                    </tbody>
                );
            })}
        </>
    );
}

export default MemberList;