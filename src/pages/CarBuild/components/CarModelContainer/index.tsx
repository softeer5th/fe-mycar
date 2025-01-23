import { useEffect, useState } from 'react';
import CarModelList from './CarModelList';
import useTabContext from '../../../../hooks/useTabContext';
import { CarModel } from '../../CarBuild.types';
import * as S from './CarModelContainer.styled';

const CarModelContainer = ({ engineType }: { engineType: string }) => {
  const [carModelList, setCarModelList] = useState<CarModel[]>([]);
  const { selectedTab } = useTabContext();
  const [currentIdx, setCurrentIdx] = useState(0);

  const startIdx = 0;
  const carModelPerPage = 4;
  const maxIdx = Math.ceil(carModelList.length / carModelPerPage) - 1;

  const handleClickPrevButton = () => {
    setCurrentIdx((prev) => (prev === startIdx ? maxIdx : prev - 1));
  };

  const handleClickNextButton = () => {
    setCurrentIdx((prev) => (prev === maxIdx ? startIdx : prev + 1));
  };

  useEffect(() => {
    const fetchCarModelList = async (engineType: string) => {
      const res = await fetch(`/car/model?engine=${engineType}`);
      const result = await res.json();
      setCarModelList(result);
    };

    if (selectedTab === engineType) {
      fetchCarModelList(engineType);
    }
  }, [selectedTab, engineType]);

  return (
    <>
      <div>
        <span>모델 비교</span>
        <span>|</span>
        <span>전체 모델 ({carModelList.length})</span>
      </div>
      <S.CarModelCarousel>
        <S.CarouselPrevButton onClick={handleClickPrevButton}>{'<'}</S.CarouselPrevButton>
        <S.CarouselNextButton onClick={handleClickNextButton}>{'>'}</S.CarouselNextButton>
        <CarModelList carModelList={carModelList} currentIdx={currentIdx} />
      </S.CarModelCarousel>
    </>
  );
};

export default CarModelContainer;
