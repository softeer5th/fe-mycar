import { CarModel } from '../../../../CarBuild.types';
import * as S from './CarModelItem.styled';

interface CarModelItemProps {
  carModel: CarModel;
}

const CarModelItem = ({ carModel }: CarModelItemProps) => {
  return (
    <S.CarModelItemLayout>
      <S.ItemHeader>
        <S.ModelTitle>{carModel.model}</S.ModelTitle>
        <S.ModelPrice>{carModel.price.toLocaleString()}원</S.ModelPrice>
        {carModel.isBest ? <S.BestBadge>Best</S.BestBadge> : null}
      </S.ItemHeader>
      <img src={carModel.imgSrc} />
      <S.DescriptionContainer>
        <S.Description>{carModel.description}</S.Description>
        <button>상세품목 {'>'}</button>
      </S.DescriptionContainer>
      <S.OptionList>
        {carModel.options.defaultOptions.map((defaultOption) => (
          <li key={defaultOption}>
            <img src={defaultOption} />
          </li>
        ))}
      </S.OptionList>
      <S.BuildButton>내 차 만들기</S.BuildButton>
    </S.CarModelItemLayout>
  );
};

export default CarModelItem;
