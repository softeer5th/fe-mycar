import { useEffect, useState } from 'react';
import CarProductCard from '../components/card/car-product-card';
import { carProductRepository } from '../di';
import { CarProduct } from '../core/model';
import { useLocation, useNavigate } from 'react-router';

const SelectCarModel = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [carProducts, setCarProducts] = useState<CarProduct[]>([]);
  const [currentPointer, setCurrentPointer] = useState(0);
  const [previousPointer, setPreviousPointer] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const newCarProducts = await carProductRepository.getCarProducts('CE02');
      setCarProducts(newCarProducts);
    }
    fetchData();
  }, []);

  const newCarProductsArray = Array.from(
    { length: Math.ceil(carProducts.length / 4) },
    (_, i) => carProducts.slice(i * 4, i * 4 + 4),
  );
  const newCarArrayLength = newCarProductsArray.length;
  const handleButtonClick = (carModelCode: string) => {
    navigate(`${pathname}/making/${carModelCode}`);
  };

  return (
    <div className="w-full min-w-[1340px] p-[50px]  overflow-hidden">
      <div className=" ml-[5px]  mb-[10px] text-[16px] leading-[30px] ">
        전체 모델
        <span className="text-[#007fa8]">({carProducts.length})</span>
      </div>
      <div className="relative w-[1340px]">
        <ul className=" flex absolute top-[-40px] justify-center items-center w-full h-[37px] z-10 ">
          {Array.from({ length: newCarArrayLength }, (_, i) => (
            <li key={i} className={' mr-1 py-3 px-1 '}>
              <button
                onClick={() => {
                  setPreviousPointer(currentPointer);
                  setCurrentPointer(i);
                }}
                className={`${i === currentPointer ? 'bg-[#007fa8]' : 'bg-[#ddd] '} w-3 h-3 rounded-md overflow-hidden `}
              ></button>
            </li>
          ))}
        </ul>
        <div className=" h-[594px] inline-block relative w-[1340px] mx-auto overflow-hidden ">
          <button
            className=" absolute left-0 top-[50%] mt-[-82px] w-11 h-11 bg-[#A0A4AA] text-white z-10"
            onClick={() => {
              setPreviousPointer(currentPointer);
              setCurrentPointer(
                (currentPointer - 1 + newCarArrayLength) % newCarArrayLength,
              );
            }}
          >
            {'<'}
          </button>
          <button
            className="absolute right-0 top-[50%] mt-[-82px] w-11 h-11 bg-[#A0A4AA] text-white z-10"
            onClick={() => {
              setPreviousPointer(currentPointer);
              setCurrentPointer((currentPointer + 1) % newCarArrayLength);
            }}
          >
            {'>'}
          </button>
          <div className="box-border overflow-hidden z-[1]">
            {newCarProductsArray.map((newCarProducts, idx) => (
              <CarProductBox
                idx={
                  Math.abs(idx - currentPointer) >
                  Math.floor(newCarArrayLength / 2)
                    ? idx - currentPointer > 0
                      ? idx - currentPointer - newCarArrayLength
                      : idx - currentPointer + newCarArrayLength
                    : idx - currentPointer
                }
                carProducts={newCarProducts}
                handleButtonClick={handleButtonClick}
                isAnimating={idx === currentPointer || idx === previousPointer}
                isActive={idx === currentPointer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type CarProductBoxProps = {
  idx: number;
  carProducts: CarProduct[];
  handleButtonClick: (props: string) => void;
  isAnimating?: boolean;
  isActive?: boolean;
};

const CarProductBox = ({
  idx,
  carProducts,
  handleButtonClick,
  isAnimating = false,
  isActive = false,
}: CarProductBoxProps) => {
  const translateX = 1340 * idx;
  const zIndex = idx === 0 ? 2 : 0;
  const animation =
    isAnimating || isActive ? 'transition-transform duration-1000 ease' : '';
  return (
    <div
      className={`absolute top-0 left-0 w-[1340px] h-full inline-block overflow-hidden transform translate-x-[${translateX}px] z-[${zIndex}] ${animation} `}
    >
      <div className="flex h-full gap-[30px]">
        {carProducts.map((carProduct) => (
          <CarProductCard
            carProduct={carProduct}
            handleButtonClick={() =>
              handleButtonClick(carProduct.saleModelCode)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default SelectCarModel;
