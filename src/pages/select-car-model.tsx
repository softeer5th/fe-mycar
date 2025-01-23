import { useEffect, useState } from 'react';
import CarProductCard from '../components/card/car-product-card';
import { carProductRepository } from '../di';
import { CarProduct } from '../core/model';

const SelectCarModel = () => {
  const [carProducts, setCarProducts] = useState<CarProduct[]>([]);
  const [curruntPointer, setCurrentPointer] = useState(0);

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
    <div className="w-full min-w-[1340px] p-[50px]">
      <div className=" ml-[5px]  mb-[10px] text-[16px] leading-[30px] ">
        전체 모델
        <span className="text-[#007fa8]">({carProducts.length})</span>
      </div>
      <div className=" min-w-[1340px] h-[594px] relative w-full overflow-hidden">
        <button className=" absolute left-0 top-[50%] mt-[-82px] w-11 h-11 bg-[#A0A4AA] text-white">
          {'<'}
        </button>
        <button className="absolute right-[10px] top-[50%] mt-[-82px] w-11 h-11 bg-[#A0A4AA] text-white">
          {'>'}
        </button>
        <div>
          {newCarProductsArray.map((newCarProducts, idx) => (
            <CarProductBox
              idx={idx - curruntPointer}
              carProducts={newCarProducts}
              handleButtonClick={handleButtonClick}
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
};

const CarProductBox = ({
  idx,
  carProducts,
  handleButtonClick,
}: CarProductBoxProps) => {
  return (
    <div
      className={` absolute top-0 left-0 w-full h-full inline-block overflow-hidden transition translate-x-[${idx * 1340}px]  z-4`}
    >
      <div className="flex gap-[30px]">
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
