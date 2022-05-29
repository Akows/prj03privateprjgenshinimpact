
import "../style/css/Boardinput.css";

const Boardinput = (props) => {
    return (
        <form>
            <div id='b-inputpage-inputform'>

                <h2>작성정보</h2>

                <div id='b-inputpage-textinput'>
                    <h5 id='b-inputpage-inputguide'>글제목</h5>
                    <input ref={props.titleInput} id="b-inputpage-titlearea" defaultValue={props.valueb_title} placeholder='제목을 입력해주세요' onChange={props.handleb_titleChange}/>
                </div>

                <br/>
                <br/>
                <hr/>

                <div id='b-inputpage-textinput2'>
                    <h5 id='b-inputpage-inputguide'>글내용</h5>
                    <input id="b-inputpage-contentarea" defaultValue={props.valueb_content} placeholder='내용을 입력해주세요' onChange={props.handleb_contentChange}/>
                </div>

                <br/>
                <br/>
                <hr/>
            </div>

            <br/>

            <div id='b-inputpage-submitbtu'>
                <button id='submitbutton' onClick={props.handleonSubmit}>
                    {props.isUpdatereq ? "글 수정" : "글 등록"}
                </button>
            </div>

            <button onClick={props.handleReset}>
                초기화
            </button>
        </form>
    );
}
export default Boardinput;