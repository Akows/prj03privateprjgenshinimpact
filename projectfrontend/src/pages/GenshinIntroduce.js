import "../style/css/GenshinIntroduce.css";

const GenshinIntroduce = () => {

    const movehomepage = () => {
        window.open('https://genshin.hoyoverse.com/ko/');
    }

    return (
        <>
            <div className="EV-BackgroundArea EV-BackgroundIMG1">
                
                <div id='EV-Content-Outer-Main'>
                    <div id="EV-Content-ContentAreaInnerorizontal">
                        <div id='EV-Content-Outer-Main-Logo'>
                            <div id='EV-Content-Outer-Main-Logoimg'/>
                        </div>

                        <div id='EV-Content-Outer-Main-Title'>
                            <div id='EV-Content-Outer-Main-Titlebtn' onClick={movehomepage}/>
                            <div id='EV-Content-Outer-Main-Titleimg'/>                           
                        </div>
                    </div>
                </div>

                <div id='EV-Content-Outer-Contents'>
                    <div id='EV-Content-Outer-Content-Container'>

                        <div id="EV-Content-Outer-Content-Contents">
                            ddddㅇㅇ
                        </div>


                        <div id='EV-Content-Outer-Content-MenuRemote'>
                        페이지 이동 리모콘 위치
                        </div>
                        
                    </div>



                </div>


            </div>
        </>
    )
}

export default GenshinIntroduce;
