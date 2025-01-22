import type { PropsWithChildren } from "react";
import styled from "styled-components";

interface ButtonProps extends PropsWithChildren {
    
} 

const Button = ({children}: ButtonProps) => {
    return (
        <ButtonContainer>
            {children}
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button`
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.color['blue-dark']};
    color: ${props => props.theme.color['surface-default']};
    ${props => props.theme.typo.label};
`

export default Button;