import styled from 'styled-components';

export const TitleLayout = styled.section`
  height: 36rem;
  background-color: ${({ theme }) => theme.colors.beige400};
  display: flex;
  flex-direction: column;
`;

export const Breadcrumb = styled.div`
  flex-basis: 25%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  flex-basis: 75%;
  margin: 0 6rem;
  background-color: ${({ theme }) => theme.colors.beige300};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.title};
`;

export const SubTitle = styled.h2`
  ${({ theme }) => theme.fonts.subTitle};
`;
