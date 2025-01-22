import {styled} from "styled-components";


export const StepWrapper = styled.ul`
    padding: 0 50px;
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    background-color: #e4dcd3;
`

export const StepItem = styled.li`
    height: fit-content;
    margin: auto 0;
`

export const StepItemAnchor = styled.a<{first: boolean}>`
    padding: 3px;
    padding-right: ${(props) => (props.first ? '50px' : '0px')};
    border-right: ${(props) => (props.first ? '1px solid rgba(0,0,0,.3)' : 'none')};
    padding-left: ${(props) => (props.first ? '0px' : '50px')};
    font-size: 20px;
    line-height: 1;
    
`

export const StepTitle = styled.span`
    margin-right: 20px;
`
