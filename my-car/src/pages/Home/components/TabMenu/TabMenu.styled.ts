import {styled} from "styled-components";

export const TapMenuWrapper = styled.div`
  max-width: 1120px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  @media (max-width: 1024px) {
    padding: 0 24px;
  }
`;

export const TapMenuName = styled.h3`
  margin-right: 50px;
  flex: 1;
  font-size: 20px;
  line-height: 34px;
`;

export const ModelCompare = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TabMenuIconWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;

export const TabMenuIconList = styled.li`
  margin: 0px 25px;
  :first-child {
    margin-left: 0px;
  }
  :last-child {
    margin-right: 0px;
  }
`;

export const TabMenuButton = styled.button<{isSelected: boolean}>`
  letter-spacing: 0.016px;
  color: ${(props) => props.isSelected ? ' #007fa8': '#666'};
  line-height: 1;
  font-weight: 500;
`;