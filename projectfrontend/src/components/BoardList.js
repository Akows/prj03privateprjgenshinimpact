import React from "react";
import { Link } from "react-router-dom";

const BoardList = ({data}) => {
    return (
        <>
            {data.map(datas => {
                return (
                    <tbody key={datas.b_number_pk}>
                        <tr>
                            <td>{datas.b_number_pk}</td>

                            <td>
                                <Link to={"/"}>
                                    {datas.b_title}
                                </Link>
                            </td>
                            
                            <td>{datas.b_write_time}</td>
                        </tr>
                    </tbody>
                );
            })}
        </>
    );
}

export default BoardList;