import type  { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ButtonProps extends PropsWithChildren {} 

const Button = ({ children }: ButtonProps) => (
  <ButtonContainer>
    {children}
  </ButtonContainer>
);

const ButtonContainer = styled.button`
    width: 100%;
    height: 50px;
    color: ${(props) => props.theme.color['surface-default']};
    background-color: ${(props) => props.theme.color['blue-dark']};

    ${(props) => props.theme.typo.label};
`;

export default Button;