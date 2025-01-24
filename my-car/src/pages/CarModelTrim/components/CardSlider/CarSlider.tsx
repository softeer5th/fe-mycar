import {useEffect, useState} from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderWrapper } from "./CarSlider.styled";
import CardModelCardItemsWrapperComponent from "../CarModelCardItemsWrapper/CarModelCardItemsWrapper";
const StyledSlider = styled(Slider)`
  .slick-dots li.slick-active button:before {
    color: #3498db; /* 활성 점 색상 */
  }
`;

export default function CarSlider() {
  const [carTrimCardCount, setCarTrimCardCount] = useState<number>();


  useEffect(() => {
    // ResizeObserver 생성
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // 요소의 크기 정보 추출
        const { width } = entry.contentRect;
        if (width <= 1024) {
          setCarTrimCardCount(2)
        }
        else {
          setCarTrimCardCount(4)
        }
      }
    });

    // 관찰할 요소 선택
    const element = document.body;
    resizeObserver.observe(element);

    // clean-up 함수
    return () => {
      resizeObserver.disconnect(); // 컴포넌트 언마운트 시 리소스 정리
    };
  }, []);



  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    draggable: false,    // 마우스를 통한 드래그 비활성화
    swipe: false,        // 터치 스와이프 비활성화
  };

  return (
    <SliderWrapper>
      <StyledSlider {...settings}>
        <CardModelCardItemsWrapperComponent></CardModelCardItemsWrapperComponent>
        <CardModelCardItemsWrapperComponent></CardModelCardItemsWrapperComponent>
      </StyledSlider>
    </SliderWrapper>
  );
}
