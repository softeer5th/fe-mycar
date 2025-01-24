import { styled } from "styled-components";

export const CardWrapper = styled.article`
  flex: 1;
  padding: 30px;
  height: 100%;
  outline: red;
  background-color: #f6f3f2;
  border: 3px solid #f6f3f2;
  position: relative;
`;
export const CarTrimTitle = styled.h4`
  font-size: 24px;
  word-break: keep-all;
`;

export const CarTrimPrice = styled.span`
  margin-top: 8px;
  font-size: 22px;
  position: relative;
  display: block;
`;

export const CarTrimBadge = styled.i`
  position: absolute;
  left: 0;
  bottom: -30px;
  background: #e63312;
  color: #fff;
  padding: 4px 5px 2px;
  font-size: 11px;
  font-style: normal;
`;

export const CarImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const CarImageButton = styled.button`
  margin-top: 50px;
`;
export const CarImg = styled.img`
  object-fit: contain;
    width: 100%;
`;

// 여기에는 2WD 같은거 박스
export const CarTrimDetailTextWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

export const CarTrimDetail = styled.b`
  letter-spacing: -0.4px;
  color: #666;
  display: -webkit-box;
  height: 16px;
  font-size: 16px;
  line-height: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const CarTrimDetailButton = styled.button`
  color: #002c5f;
  font-size: 14px;
  font-weight: 500;
`;

export const CarTrimDetailsWrapper = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
`;
export const CarTrimDetailImgWrapper = styled.li`
  padding: 0px 10px;
`;



export const CarTrimDetailImg = styled.img`
object-fit: contain;
    width: 100%;
`;

export const CreateMyCarButton = styled.button`
  position: absolute;
  bottom: 30px;
  display: flex;
  width: calc(100% - 60px);
  height: 50px;
  background-color: #002c5f;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;
