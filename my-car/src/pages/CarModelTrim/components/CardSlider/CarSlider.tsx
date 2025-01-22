import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderWrapper } from "./CarSlider.styled";
import { CardModelCardItemsWrapper } from "../CarModelCardItemsWrapper/CarModelCardItemsWrapper.styled";
import CardModelCardItemsWrapperComponent from "../CarModelCardItemsWrapper/CarModelCardItemsWrapper";
const StyledSlider = styled(Slider)`
  .slick-dots li.slick-active button:before {
    color: #3498db; /* 활성 점 색상 */
  }
`;

export default function CarSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SliderWrapper>
      <StyledSlider {...settings}>
        <CardModelCardItemsWrapperComponent></CardModelCardItemsWrapperComponent>
        <CardModelCardItemsWrapperComponent></CardModelCardItemsWrapperComponent>
        <CardModelCardItemsWrapperComponent></CardModelCardItemsWrapperComponent>
        <CardModelCardItemsWrapperComponent></CardModelCardItemsWrapperComponent>
      </StyledSlider>
    </SliderWrapper>
  );
}
