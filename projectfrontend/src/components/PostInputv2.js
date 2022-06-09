import "../style/css/componentsCSS/PostInputv2.css";

const PostInputv2 = (props) => {

    return (

        <div className='PIV2-Content-Contents'>
            <div className='PIV2-Content-ForumTitle'>
                <p>제목을 입력해주세요</p>
                <input defaultValue={props.title} placeholder='제목을 입력해주세요' onChange={(event) => props.setTitle(event.target.value)}/>
            </div>

            <div className="PIV2-Content-Line"/>

            <div className='PIV2-Content-ForumText'>
                <p>내용을 입력해주세요</p>
                <input defaultValue={props.content} placeholder='내용을 입력해주세요' onChange={(event) => props.setContent(event.target.value)}/>
            </div>
        </div>

    );
}
export default PostInputv2;