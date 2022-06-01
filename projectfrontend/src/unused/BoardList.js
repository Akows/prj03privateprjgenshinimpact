import React from "react";
import { Link } from "react-router-dom";
// import "../style/css/BoardList.css";

const BoardList = ({data}) => {

    return (
        <>
            {data.map(datas => {
                return (
                    <tbody key={datas.b_number_pk}>
                        <tr>
                            <td id="showboardnumber">{datas.b_number_pk}</td>

                            <td>
                                <Link id="viewboard" to={`/board/view/${datas.b_number_pk}`} state={{  b_number_pk: datas.b_number_pk,
                                                                                        b_title: datas.b_title,
                                                                                        b_content: datas.b_content,
                                                                                        b_write_time : datas.b_write_time,
                                                                                        isUpdatereq : false}} >
                                    {datas.b_title}
                                </Link>
                            </td>

                            <td id="showboardtime">{datas.b_write_time}</td>

                            <td id="showboardtime"> 
                                <Link id="updataboard" to={`/board/boardwrite`} state={{  b_number_pk: datas.b_number_pk,
                                                                                        b_title: datas.b_title,
                                                                                        b_content: datas.b_content,
                                                                                        b_write_time : datas.b_write_time,
                                                                                        isUpdatereq : true}} >
                                    글 수정하기
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                );
            })}
        </>
    );
}

export default BoardList;