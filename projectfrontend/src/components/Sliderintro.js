import React, { useState, useEffect, useRef } from "react";
import styledComponents from "styled-components";

const Container = styledComponents.div`
    width: 59.6%;
    overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;
const Button = styledComponents.button`
    all: unset;
    margin-top: 20px;
    margin-right: 100px;
    margin-left: 100px;
    border: 1px solid white;
    padding: 0.5em 2em;
    color: white;
    border-radius: 10px;
    &:hover {
        transition: all 0.3s ease-in-out;
        background-color: gray;
        color: #fff;
    }
`;
const SliderContainer = styledComponents.div`
    width: 100%;
    display: flex; //이미지들을 가로로 나열합니다.
`;

const IMG = styledComponents.img`
    width: 100%;
    height: 45vh;
`;

const Sliderintro = (props) => {

    const TOTAL_SLIDES = 4;

    const [currentSlide, setCurrentSlide] = useState(0);

    const slideRef = useRef(null);

    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
            setCurrentSlide(0);
        } 
        else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } 
        else {
            setCurrentSlide(currentSlide - 1);
        }
    }

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
        }, [currentSlide]);

    return (
        <Container>
            {/* {currentSlide} */}
            <SliderContainer ref={slideRef}>
                <IMG src={props.imgs[0].img1} alt="데이터 없음."/>
                <IMG src={props.imgs[0].img2} alt="데이터 없음."/>
                <IMG src={props.imgs[0].img3} alt="데이터 없음."/>
                <IMG src={props.imgs[0].img4} alt="데이터 없음."/>
                <IMG src={props.imgs[0].img5} alt="데이터 없음."/>
            </SliderContainer>
            <Button onClick={prevSlide}>Prev</Button>
            <Button onClick={nextSlide}>Next</Button>
        </Container>
    )
}

export default Sliderintro;