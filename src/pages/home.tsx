import { useNavigate } from 'react-router';
import SelectButton from '../components/button/select-button';
import CarModelCard from '../components/card/car-model-card';
import { CarType, Product } from '../core/model';

const Home = () => {
  const navigate = useNavigate();
  const carTypes: CarType[] = [
    {
      carTypeCode: 'E',
      carTypeName: '수소 / 전기차',
    },
    {
      carTypeCode: 'N',
      carTypeName: 'N',
    },
    {
      carTypeCode: 'P',
      carTypeName: '승용',
    },
    {
      carTypeCode: 'R',
      carTypeName: 'SUV',
    },
    {
      carTypeCode: 'S',
      carTypeName: 'MPV',
    },
    {
      carTypeCode: 'L',
      carTypeName: '소형트럭&택시',
    },
    {
      carTypeCode: 'T',
      carTypeName: '트럭',
    },
    {
      carTypeCode: 'B',
      carTypeName: '버스',
    },
  ];

  const carModelList: Product[] = [
    {
      carTypeCode: 'E',
      carCode: 'AX03',
      carName: '캐스퍼 일렉트릭',
      carPrice: 29900000,
      carImgPath: '/contents/repn-car/side-45/casper_ev_45side.png',
    },
    {
      carTypeCode: 'E',
      carCode: 'FE04',
      carName: '넥쏘',
      carPrice: 69500000,
      carImgPath: '/contents/repn-car/side-45/nexo-24my-45side.png',
    },
    {
      carTypeCode: 'E',
      carCode: 'SX11',
      carName: '코나 Electric',
      carPrice: 41420000,
      carImgPath: '/contents/repn-car/side-45/kona-electric-24my-45side.png',
    },
    {
      carTypeCode: 'E',
      carCode: 'CE02',
      carName: '아이오닉 6',
      carPrice: 46950000,
      carImgPath: '/contents/repn-car/side-45/ioniq6-24my-45side.png',
    },
    {
      carTypeCode: 'E',
      carCode: 'NE04',
      carName: '더 뉴 아이오닉 5',
      carPrice: 47000000,
      carImgPath: '/contents/repn-car/side-45/the-new-ioniq5-24pe-45side.png',
    },
    {
      carTypeCode: 'E',
      carCode: 'TS02',
      carName: 'ST1 내장탑차',
      carPrice: 59800000,
      carImgPath: '/contents/repn-car/side-45/st1-24lc-45side.png',
    },
  ];
  const handleCarModelCardClick = (carCode: Product['carCode']) => {
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
          {carTypes.map((carType, index) => (
            <li className="mx-[25px]" key={index}>
              <SelectButton text={carType.carTypeName} isActive={true} />
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-[#e5e5e5] w-full ">
        <ul className=" py-[60px] grid grid-cols-4 gap-x-[10px] gap-y-[80px] max-w-[1120px] mx-auto my-0">
          {carModelList.map((carModel, index) => (
            <li key={index}>
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
