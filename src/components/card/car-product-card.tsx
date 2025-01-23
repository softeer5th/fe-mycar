import { CarProduct } from '../../core/model';
import { numberToWon } from '../../utils/numberToWon';
import PrimaryButton from '../button/primary-button';

export type CarProductCardProps = {
  handleButtonClick: () => void;
  carProduct: CarProduct;
};

const CarProductCard = ({
  carProduct,
  handleButtonClick,
}: CarProductCardProps) => {
  return (
    <div className=" w-[25%] h-full bg-[#f6f3f2] p-[30px] text-left border-[#f6f3f2] border-[3px] ">
      <h4 className=" mt-2 text-[22px]">{carProduct.carTrimName}</h4>
      <span className=" mt-2 text-[22px]">
        {numberToWon({ type: 'full', amount: carProduct.carModelPrice })}
      </span>
      <div>
        <button className=" max-w-[290px] mt-[50px] mx-auto mb-0 ">
          <img src={carProduct.carImagePath} />
        </button>
        <div className=" w-full flex justify-between mt-[30px] items-center">
          <div className=" text-[16px] ml-[10px] text-[#666] ">2WD</div>
          <button className=" text-[#002c5f] ml-[10px] text-[14px]">
            상세 품목
          </button>
        </div>
        <div className=" mt-5 mb-10 border-t border-[#ccc] ">
          <ul className=" flex justify-between">
            <li className=" px-[10px] text-center">
              <img
                src={carProduct.carImagePath.split('.png')[0] + '-USP-001.png'}
              />
            </li>
            <li className=" px-[10px] text-center">
              <img
                src={carProduct.carImagePath.split('.png')[0] + '-USP-002.png'}
              />
            </li>
            <li className=" px-[10px] text-center">
              <img
                src={carProduct.carImagePath.split('.png')[0] + '-USP-003.png'}
              />
            </li>
          </ul>
        </div>
        <PrimaryButton text="내 차 만들기 " onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default CarProductCard;
