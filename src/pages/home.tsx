import { useNavigate } from 'react-router';
import SelectButton from '../components/button/select-button';
import CarModelCard from '../components/card/car-model-card';
import { CarModel, CarType } from '../core/model';
import { carModelRepository, carTypeRepository } from '../di';
import { useEffect, useState } from 'react';

const Home = () => {
  const [carTypes, setCarTypes] = useState<CarType[]>([]);
  const [carModelList, setCarModelList] = useState<CarModel[]>([]);
  const [isSelected, setIsSelected] = useState<CarType['carTypeCode']>('');
  useEffect(() => {
    async function fetchData() {
      const newCarTypes = await carTypeRepository.getCarTypes();
      setIsSelected(newCarTypes[0].carTypeCode);
      setCarTypes(newCarTypes);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const newCarModelList = await carModelRepository.getCarModels(isSelected);
      setCarModelList(newCarModelList);
    }
    fetchData();
  }, [isSelected]);

  const navigate = useNavigate();

  const handleCarModelCardClick = (carCode: CarModel['carCode']) => {
    // navigate('/');
  };

  return (
    <div>
      <div className="w-full h-[270px] bg-[#e4dcd3] flex items-center">
        <div className="w-full h-[270px] bg-[#f1ede9] mx-[60px] flex flex-col items-center pt-20 ">
          <h1 className=" text-black  text-[58px] font-bold leading-[51px]">
            내 차 만들기
          </h1>
          <p className=" text-black  text-[16px] font-medium mt-10 leading-normal">
            내가 타고 싶은 나만의 차를 만들어보세요.
          </p>
        </div>
      </div>
      <div className="px-6 h-[70px] flex items-center max-w-[1120px] mx-auto">
        <h3 className="text-xl leading-[34px] flex-grow mr-auto font-bold">
          모델 선택
        </h3>
        <ul className=" flex items-center">
          {carTypes.map((carType) => (
            <li className="mx-[25px]" key={carType.carTypeCode}>
              <SelectButton
                onSelectClick={() => setIsSelected(carType.carTypeCode)}
                text={carType.carTypeName}
                isActive={carType.carTypeCode === isSelected}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-[#e5e5e5] w-full ">
        <ul className=" py-[60px] grid grid-cols-4 gap-x-[10px] gap-y-[80px] max-w-[1120px] mx-auto my-0">
          {carModelList.map((carModel) => (
            <li key={carModel.carCode}>
              <CarModelCard
                onCarModelCardClick={() =>
                  handleCarModelCardClick(carModel.carCode)
                }
                carModelName={carModel.carName}
                carModelPrice={carModel.carPrice}
                carImageUrl={carModel.carImgPath}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
