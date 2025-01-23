import { useEffect, useState } from 'react';
import CarProductCard from '../components/card/car-product-card';
import { carProductRepository } from '../di';
import { CarProduct } from '../core/model';

const SelectCarModel = () => {
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

  const handleButtonClick = () => {};

  return (
    <div className="w-full min-w-[1340px] p-[50px]  overflow-hidden">
      <div className=" ml-[5px]  mb-[10px] text-[16px] leading-[30px] ">
        전체 모델
        <span className="text-[#007fa8]">({carProducts.length})</span>
      </div>
      <div className=" h-[594px] inline-block relative w-[1340px] mx-auto overflow-hidden ">
        <button
          className=" absolute left-0 top-[50%] mt-[-82px] w-11 h-11 bg-[#A0A4AA] text-white z-10"
          onClick={() => {
            setPreviousPointer(currentPointer);
            setCurrentPointer(
              (currentPointer - 1 + newCarProductsArray.length) %
                newCarProductsArray.length,
            );
          }}
        >
          {'<'}
        </button>
        <button
          className="absolute right-0 top-[50%] mt-[-82px] w-11 h-11 bg-[#A0A4AA] text-white z-10"
          onClick={() => {
            setPreviousPointer(currentPointer);
            setCurrentPointer(
              (currentPointer + 1) % newCarProductsArray.length,
            );
          }}
        >
          {'>'}
        </button>
        <div className="box-border overflow-hidden z-[1]">
          {newCarProductsArray.map((newCarProducts, idx) => (
            <CarProductBox
              idx={
                Math.abs(idx - currentPointer) >
                Math.floor(newCarProductsArray.length / 2)
                  ? idx - currentPointer > 0
                    ? idx - currentPointer - newCarProductsArray.length
                    : idx - currentPointer + newCarProductsArray.length
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
  );
};

type CarProductBoxProps = {
  idx: number;
  carProducts: CarProduct[];
  handleButtonClick: () => void;
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
            handleButtonClick={() => handleButtonClick()}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectCarModel;
