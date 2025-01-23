import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  padding: 0px 50px;
  margin-top: 10px;
  padding-top: 50px;

  .slick-dots {
    top: -40px;
  }
  .slick-dots button:before {
    font-size: 15px;
    color: #007fa8;
  }
  .slick-dots li:not(.slick-active) button:before {
    color: #dddddd;
    opacity: 1;
  }

  .slick-dots li button:hover:before {
    opacity: 0.7; /* hover 상태에서 색상 */
  }
  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    background-color: grey;
    width: 44px;
    height: 44px;
    margin-top: -82px;
    background-color: rgba(31, 45, 61, 0.23);
  }
  .slick-prev:before {
    content: "<";
  }
  .slick-next:before {
    content: ">";
  }
`;
