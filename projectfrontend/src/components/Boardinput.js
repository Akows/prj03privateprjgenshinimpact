
import "../style/css/Boardinput.css";

const Boardinput = (props) => {
    return (
        <form>
            <div id='b-writepage-inputform'>

                <h2>작성정보</h2>

                <div id='b-writepage-textinput'>
                    <h5 id='b-writepage-inputguide'>글제목</h5>
                    <input defaultValue={props.valueb_title} placeholder='제목을 입력해주세요' onChange={props.handleb_titleChange}/>
                </div>

                <br/>
                <br/>
                <hr/>

                <div id='b-writepage-textinput2'>
                    <h5 id='b-writepage-inputguide'>글내용</h5>
                    <input defaultValue={props.valueb_content} placeholder='내용을 입력해주세요' onChange={props.handleb_contentChange}/>
                </div>

                <br/>
                <br/>
                <hr/>
            </div>

            <br/>

            <div id='b-writepage-submitbtu'>
                <button id='submitbutton' onClick={props.handleonSubmit}>
                    {props.isUpdatereq ? "글 수정" : "글 등록"}
                </button>
            </div>
        </form>
    );
}
export default Boardinput;