import {Detail, PageTitle, PageTitleWrapper, Title} from "./HomeBanner.styled.ts";


export default function HomeBanner() {


    return (
        <PageTitleWrapper>
            <PageTitle>
                <Title>내 차 만들기</Title>
                <Detail>내가 타고 싶은 나만의 차를 만들어보세요.</Detail>
            </PageTitle>
        </PageTitleWrapper>
    )
}