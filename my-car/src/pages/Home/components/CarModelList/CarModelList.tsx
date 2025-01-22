import {
    CarAmount,
    CarBadge,
    CarImg,
    CarImgWrapper,
    CarModel,
    CarModelGrid,
    CarName,
    CarText
} from "./CarModelList.styled.ts";
import {useEffect, useState} from "react";
import {carModelSelectionType} from "../../Home.tsx";

type CarModelItemType = {
    src: string,
    name: string,
    amount: string,
    badge: string,
}

export default function CarModelList({carModelSelection}: {carModelSelection: carModelSelectionType}) {
    const [carModelItems, setCarModelItems] = useState<CarModelItemType[]>([
        {
            src: "https://www.hyundai.com/contents/repn-car/side-45/kona-electric-24my-45side.png",
            name: "캐스퍼 일렉트릭1",
            amount: "2,999만원~",
            badge: "캐스퍼 온라인 바로가기",
        },
        {
            src: "https://www.hyundai.com/contents/repn-car/side-45/kona-electric-24my-45side.png",
            name: "캐스퍼 일렉트릭2",
            amount: "2,999만원~",
            badge: "캐스퍼 온라인 바로가기",
        },
        {
            src: "https://www.hyundai.com/contents/repn-car/side-45/kona-electric-24my-45side.png",
            name: "캐스퍼 일렉트릭3",
            amount: "2,999만원~",
            badge: "캐스퍼 온라인 바로가기",
        },
        {
            src: "https://www.hyundai.com/contents/repn-car/side-45/kona-electric-24my-45side.png",
            name: "캐스퍼 일렉트릭4",
            amount: "2,999만원~",
            badge: "캐스퍼 온라인 바로가기",
        },
        {
            src: "https://www.hyundai.com/contents/repn-car/side-45/kona-electric-24my-45side.png",
            name: "캐스퍼 일렉트릭5",
            amount: "2,999만원~",
            badge: "캐스퍼 온라인 바로가기",
        },

    ]);

    useEffect(() => {
        /*
        fetch().then
         */
    }, [carModelSelection]);


    return (
        <CarModelGrid>
            {
                carModelItems.map((carModelItem) => {
                    const {src, name, amount, badge} = carModelItem;
                    return (
                        <CarModelListItem key={name} src={src} name={name} amount={amount} badge={badge}/>
                    )
                })
            }
        </CarModelGrid>
    )
}


function CarModelListItem({src, name, amount, badge}: {src: string; name: string; amount: string, badge: string}) {
    return (
        <CarModel>
            <CarImgWrapper>
                <CarImg src={src}></CarImg>
            </CarImgWrapper>

            <CarText>
                <CarName>{name}</CarName>
                <CarAmount>{amount}</CarAmount>
                <CarBadge>{badge}</CarBadge>
            </CarText>
        </CarModel>
    )
}