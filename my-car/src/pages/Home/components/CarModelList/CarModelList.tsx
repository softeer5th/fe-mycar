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
import {CarModelItemListType, CarModelItemType} from "../../Home.tsx";
import {useNavigate} from "react-router-dom";


export default function CarModelList({carModelItemList}: {carModelItemList: CarModelItemListType}) {


    return (
        <CarModelGrid>
            {
                carModelItemList.carList.map((carModelItem: CarModelItemType) => {
                    return (
                        <CarModelListItem key={carModelItem.carId} carModelItem={carModelItem}/>
                    )
                })
            }
        </CarModelGrid>
    )
}


function CarModelListItem({carModelItem}: {carModelItem: CarModelItemType}) {
    const {carId, src, carName, price, badge} = carModelItem;
    const navigate = useNavigate();


    return (
        <CarModel>
            <button onClick={() => navigate(`/model?carId=${carId}`)}>
                <CarImgWrapper>
                    <CarImg src={src}></CarImg>
                </CarImgWrapper>

                <CarText>
                    <CarName>{carName}</CarName>
                    <CarAmount>{price}</CarAmount>
                    <CarBadge>{badge}</CarBadge>
                </CarText>
            </button>
        </CarModel>
    )
}