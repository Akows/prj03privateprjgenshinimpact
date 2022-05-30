import React from "react";
import { Link } from "react-router-dom";
import "../style/css/List.css";

const List = ({data}) => {

    // DB 데이터의 목록을 출력하는 
    // 이 곳에서 게시물 데이터를 모두 불러받아 출력하고, 적절한 컴포넌트의 매개변수로 넘겨져 기능 구현에 사용될 것임.

    // **
    // 여기부터는 리액트 스크립트
    // **

    return (
        <>
            {data.map(datas => {
                return (
                    <tbody key={datas.b_number_pk}>
                        <tr>
                            <td id="showboardnumber">{datas.b_number_pk}</td>

                            <td>
                                <Link id="viewboard" to={`/generalforum/view/${datas.b_number_pk}`} state={{  b_number_pk: datas.b_number_pk,
                                                                                        b_title: datas.b_title,
                                                                                        b_content: datas.b_content,
                                                                                        b_write_time : datas.b_write_time,
                                                                                        isUpdatereq : false}} >
                                    {datas.b_title}
                                </Link>
                            </td>

                            <td id="showboardtime">{datas.b_write_time}</td>
                        </tr>
                    </tbody>
                );
            })}
        </>
    );
}

export default List;