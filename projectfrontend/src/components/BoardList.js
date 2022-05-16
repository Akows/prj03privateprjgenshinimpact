import React from "react";

const BoardList = ({data}) => {
    return (
        <>
            {data.map(datas => {
                return (
                    <tbody key={datas.b_number_pk}>
                        <tr>
                            <td>{datas.b_number_pk}</td>
                            <td>{datas.b_title}</td>
                            <td>{datas.b_content}</td>
                            <td>{datas.b_write_time}</td>
                        </tr>
                    </tbody>
                );
            })}
        </>
    );
}

export default BoardList;