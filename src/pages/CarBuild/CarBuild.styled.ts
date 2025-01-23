import { Link } from 'react-router';
import styled from 'styled-components';

export const CarBuildLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  margin-bottom: 3.2rem;
`;

export const CarBuildHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 3.6rem;
  height: 7.8rem;

  padding: 0 3.6rem;
  background-color: ${({ theme }) => theme.colors.beige400};

  a {
    ${({ theme }) => theme.fonts.label.large};
    font-weight: bold;
  }

  span {
    ${({ theme }) => theme.fonts.label.sl};
  }
`;

export const InactiveLink = styled(Link)`
  pointer-events: none;
  color: ${({ theme }) => theme.colors.linkInactive};
`;

export const TabList = styled.ul`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray300};

  button {
    ${({ theme }) => theme.fonts.body.small};
    color: ${({ theme }) => theme.colors.gray400};
    width: 10.9rem;
    transition: color 0.5s, background-color 0.5s;
    padding: 1.2rem 1rem;

    &[data-state='active'] {
      background-color: ${({ theme }) => theme.colors.blue400};
      color: ${({ theme }) => theme.colors.white};
      border: 0.1rem solid ${({ theme }) => theme.colors.blue400};
    }
  }
`;

export const TabRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 0 3.6rem;
`;

export const TabHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const TabTitle = styled.span`
  ${({ theme }) => theme.fonts.subTitle}
`;

export const CarModelFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 3.6rem;
  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.fonts.label.small}
`;
