import * as S from './TitleSection.styled';

const TitleSection = () => {
  return (
    <S.TitleLayout>
      <S.Breadcrumb />
      <S.TitleWrapper>
        <S.Title>내 차 만들기</S.Title>
        <S.SubTitle>내가 타고 싶은 나만의 차를 만들어보세요.</S.SubTitle>
      </S.TitleWrapper>
    </S.TitleLayout>
  );
};

export default TitleSection;
