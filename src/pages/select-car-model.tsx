import CarProductCard from '../components/card/car-product-card';

const SelectCarModel = () => {
  const productCount = 10;

  const handleButtonClick = () => {};

  return (
    <div className="w-full p-[50px]">
      <div className=" ml-[5px]  mb-[10px] text-[16px] leading-[30px] ">
        전체 모델
        <span className="text-[#007fa8]">({productCount})</span>
      </div>
      <div className=" min-w-[1340px]">
        <div className="flex gap-[30px] w-[1340px]">
          <CarProductCard handleButtonClick={() => handleButtonClick()} />
        </div>
      </div>
    </div>
  );
};

export default SelectCarModel;
