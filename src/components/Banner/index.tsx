import styled from "styled-components";

interface BannerProps {
    title: string;
    subTitle: string;
}

const Banner = ({title, subTitle}: BannerProps) =>{
    return (
        <OuterContainer>
            <InnerContainer>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </InnerContainer>
        </OuterContainer>
    )
}

const OuterContainer = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.color["surface-dark"]};
`;

const InnerContainer = styled.div`
    height: 270px;
    margin: 0px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    background-color: ${(props) => props.theme.color["surface-alt"]};
`;

const Title = styled.div`
  ${(props) => props.theme.typo.heading1}
`;

const SubTitle = styled.div`
  ${(props) => props.theme.typo.heading2}
`;

export default Banner;