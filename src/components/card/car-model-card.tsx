import { numberToWon } from '../../utils/numberToWon';

type CarModelCardProps = {
  onCarModelCardClick: () => void;
  carModelName: string;
  carModelPrice: number;
  carImageUrl: string;
};

const CarModelCard = ({
  onCarModelCardClick,
  carModelName,
  carModelPrice,
  carImageUrl,
}: CarModelCardProps) => {
  return (
    <button onClick={onCarModelCardClick} className=" max-w-[280px] w-full">
      <img
        src={`https://www.hyundai.com${carImageUrl}`}
        className=" w-[110%] object-contain "
      />
      <div className=" mt-[10px] text-center">
        <strong className=" text-[20px] leading-[1.3]">{carModelName}</strong>
        <p className=" mt-[10px] text-[14px]">
          {numberToWon({ type: 'short', amount: carModelPrice })}
        </p>
      </div>
    </button>
  );
};

export default CarModelCard;
