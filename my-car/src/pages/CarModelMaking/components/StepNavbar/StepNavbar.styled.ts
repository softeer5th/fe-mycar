import { styled } from "styled-components";

export const StepWrapper = styled.ul`
  padding: 0 50px;
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  background-color: #e4dcd3;
`;

export const StepItem = styled.li`
  height: fit-content;
  margin: auto 0;
  position: relative;
`;

export const StepItemAnchor = styled.a<{ first: boolean }>`
  padding: 3px;
  padding-right: ${(props) => (props.first ? "24px" : "0px")};
  border-right: ${(props) =>
    props.first ? "1px solid rgba(0,0,0,0.3)" : "none"};
  padding-left: ${(props) => (props.first ? "0px" : "24px")};
  color: ${(props) => (props.first ? "rgba(0,0,0,.5)" : "black")};
  font-size: 20px;

  line-height: 1;
  ${(props) =>
    props.first
      ? ""
      : '&:after {\n        position: absolute;\n        z-index: 5;\n        content: "";\n        left:125px;\n        bottom: -29px;\n        display: block;\n        width: 1px;\n        height: 1px;\n        border-bottom: 10px solid #fff;\n        border-right: 10px solid transparent;\n        border-left: 10px solid transparent;\n    }'}
`;

export const StepTitle = styled.span`
  margin-right: 20px;
  font-size: inherit;
`;
