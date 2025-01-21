import styled from 'styled-components';

interface HeaderProps {
  currentCarModel: string;
  currentStep: number;
}

export function Header({ currentCarModel, currentStep }: HeaderProps) {
  return (
    <StyledHeader>
      <HeaderTop>
        <h1>HYUNDAI</h1>
        <h2> | {currentCarModel}</h2>
      </HeaderTop>
      <HeaderBottom>
        <button>model 선택</button>
        <button>내차 만들기</button>
      </HeaderBottom>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100vw; // 너비
  background-color: #e4dcd3; // 배경색
  position: fixed; // 고정
  top: 0; // 위
  left: 0; // 왼쪽
  height: 139px; // 높이
`;

const HeaderTop = styled.div`
  display: flex; // 플렉스
  gap: 16px;
  align-items: center; // 가운데 정렬
  padding: 0 24px; // 패딩
  height: 50%; // 높이
`;

const HeaderBottom = styled.div`
  display: flex; // 플렉스
  gap: 16px;
  align-items: center; // 가운데 정렬
  padding: 0 8px; // 패딩
  height: 50%; // 높이
`;
