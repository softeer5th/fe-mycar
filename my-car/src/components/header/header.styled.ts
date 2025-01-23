import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100vw;
  background-color: #e4dcd3;
  position: fixed;
  top: 0;
  left: 0;
  height: 139px;
`;

export const HeaderTop = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 0 24px;
  height: 50%;
`;

export const HeaderBottom = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  padding: 0 8px 0 40px;
  height: 50%;
`;

export const HeaderButton = styled.button<{ $isActive?: boolean }>`
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bold;

  &::after {
    content: '';
    display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
    position: absolute;
    bottom: 0;
    left: 90px;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 69px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const CarSelectModal = styled.div`
  position: fixed;
  top: 69px;
  height: 300px;
  width: 100vw;
  background-color: #fff;
  z-index: 3;
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
`;

export const Tabbar = styled.div`
  display: flex;
`;

export const CarSelectModalTabbar = styled.div<{ $isSelected: boolean }>`
  width: 140px;
  height: 40px;
  background-color: ${(props) => (props.$isSelected ? '#fff' : '#444')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.$isSelected ? '#444' : '#fff')};
  cursor: pointer;
  transition: all 0.2s ease;
`;

export const TabbarItemContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const TabbarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  justify-content: center;
  height: 70%;
  width: 240px;
  &: hover {
    background-color: #f6f3f2;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
