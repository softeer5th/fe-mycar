import { useNavigate, useParams } from 'react-router';
import { CarModel } from '../../../../CarBuild.types';
import * as S from './CarModelItem.styled';

interface CarModelItemProps {
  carModel: CarModel;
}

const CarModelItem = ({ carModel }: CarModelItemProps) => {
  const navigate = useNavigate();
  const { id: carId } = useParams();

  const goToCarBuild = () => {
    // navigate(`/car-build/${carId}/${carModel.id}`);
    navigate(`/car-build/${carId}/${carModel.id}/success`);
  };

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
      <S.BuildButton onClick={goToCarBuild}>내 차 만들기</S.BuildButton>
    </S.CarModelItemLayout>
  );
};

export default CarModelItem;
