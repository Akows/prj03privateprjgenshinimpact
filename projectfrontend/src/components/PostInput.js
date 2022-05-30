import "../style/css/PostInput.css";

const PostInput = (props) => {

    return (
        <form>
            <div id='PI-Content-ShowSubTitle'>
                <div id="PI-Content-ShowSubTitle-SubTitleArea">
                    게시글 상세보기
                </div>
            </div>

            <div id='PI-Content-InputTitle'>
                <div id="PI-Content-InputTitle-Script">
                    <div id="PI-Content-InputTitle-Script-ShowScript">
                        게시글 제목
                    </div>
                </div>
                <div id="PI-Content-InputTitle-InputArea">
                    <input defaultValue={props.title} placeholder='제목을 입력해주세요' onChange={(event) => props.setTitle(event.target.value)}/>
                </div>                
            </div>

            <div id='PI-Content-InputContent'>
                <div id="PI-Content-InputContent-Script">
                    <div id="PI-Content-InputContent-Script-ShowScript">
                        게시글 내용
                    </div>
                </div>
                <div id="PI-Content-InputContent-InputArea">
                    <input defaultValue={props.content} placeholder='내용을 입력해주세요' onChange={(event) => props.setContent(event.target.value)}/>
                </div>            
            </div>
        </form>
    );
}
export default PostInput;