import styled from 'styled-components';

interface BannerProps {
  title: string;
  subTitle: string;
}

const Banner = ({ title, subTitle }: BannerProps) =>(
  <OuterContainer>
    <InnerContainer>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </InnerContainer>
  </OuterContainer>
);

const OuterContainer = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.color['surface-dark']};
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: center;
    height: 270px;
    margin: 0 60px;
    background-color: ${(props) => props.theme.color['surface-alt']};
`;

const Title = styled.div`
  ${(props) => props.theme.typo.heading1}
`;

const SubTitle = styled.div`
  ${(props) => props.theme.typo.heading2}
`;

export default Banner;