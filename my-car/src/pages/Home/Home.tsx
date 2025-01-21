import {
  CarAmount,
  CarBadge,
  CarImg,
  CarImgWrapper,
  CarModel,
  CarModelList,
  CarName,
  CarText,
  Detail,
  ModelCompare,
  PageTitle,
  TabMenuButton,
  TabMenuIconList,
  TabMenuIconWrapper,
  TabMenuName,
  TabMenuWrapper,
  Title,
} from "./style";
import { PageTitleWrapper } from "./style";
export default function Home() {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle>
          <Title>내 차 만들기</Title>
          <Detail>내가 타고 싶은 나만의 차를 만들어보세요.</Detail>
        </PageTitle>
      </PageTitleWrapper>

      <TabMenuWrapper>
        <TabMenuName>모델 선택</TabMenuName>
        <TabMenuIconWrapper>
          <TabMenuIconList>
            <TabMenuButton>
              <span>수소/전기차</span>
            </TabMenuButton>
          </TabMenuIconList>
          <TabMenuIconList>
            <TabMenuButton>
              <span>N</span>
            </TabMenuButton>
          </TabMenuIconList>
          <TabMenuIconList>
            <TabMenuButton>
              <span>승용</span>
            </TabMenuButton>
          </TabMenuIconList>
          <TabMenuIconList>
            <TabMenuButton>
              <span>SUV</span>
            </TabMenuButton>
          </TabMenuIconList>
          <TabMenuIconList>
            <TabMenuButton>
              <span>MPV</span>
            </TabMenuButton>
          </TabMenuIconList>
          <TabMenuIconList>
            <TabMenuButton>
              <span>소형트럭&택시</span>
            </TabMenuButton>
          </TabMenuIconList>
          <TabMenuIconList>
            <TabMenuButton>
              <span>트럭</span>
            </TabMenuButton>
          </TabMenuIconList>
          <TabMenuIconList>
            <TabMenuButton>
              <span>버스</span>
            </TabMenuButton>
          </TabMenuIconList>
        </TabMenuIconWrapper>
        <ModelCompare>모델 비교</ModelCompare>
      </TabMenuWrapper>
      <div style={{ borderBottom: "1px solid #e5e5e5" }}></div>

      <CarModelList>
        <CarModel>
          <CarImgWrapper>
            <CarImg src="https://www.hyundai.com/contents/repn-car/side-45/kona-electric-24my-45side.png"></CarImg>
          </CarImgWrapper>

          <CarText>
            <CarName>캐스퍼 일렉트릭</CarName>
            <CarAmount>2,999만원~</CarAmount>
            <CarBadge>캐스퍼 온라인 바로가기</CarBadge>
          </CarText>
        </CarModel>
        <CarModel>
          <CarImgWrapper>
            <CarImg src="https://www.hyundai.com/contents/repn-car/side-45/kona-electric-24my-45side.png"></CarImg>
          </CarImgWrapper>

          <CarText>
            <CarName>캐스퍼 일렉트릭</CarName>
            <CarAmount>2,999만원~</CarAmount>
            <CarBadge>캐스퍼 온라인 바로가기</CarBadge>
          </CarText>
        </CarModel>
        <CarModel>
          <CarImgWrapper>
            <CarImg src="https://www.hyundai.com/contents/repn-car/side-45/kona-electric-24my-45side.png"></CarImg>
          </CarImgWrapper>

          <CarText>
            <CarName>캐스퍼 일렉트릭</CarName>
            <CarAmount>2,999만원~</CarAmount>
            <CarBadge>캐스퍼 온라인 바로가기</CarBadge>
          </CarText>
        </CarModel>
        <CarModel>
          <CarImgWrapper>
            <CarImg src="https://www.hyundai.com/contents/repn-car/side-45/kona-electric-24my-45side.png"></CarImg>
          </CarImgWrapper>

          <CarText>
            <CarName>캐스퍼 일렉트릭</CarName>
            <CarAmount>2,999만원~</CarAmount>
            <CarBadge>캐스퍼 온라인 바로가기</CarBadge>
          </CarText>
        </CarModel>
      </CarModelList>
    </>
  );
}
