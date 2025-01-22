import { CarModel } from '../../../CarBuild.types';

interface CarModelItemProps {
  carModel: CarModel;
}

const CarModelItem = ({ carModel }: CarModelItemProps) => {
  return (
    <li>
      <span>{carModel.model}</span>
      <span>{carModel.price}</span>
      {carModel.isBest ? <span>isBest</span> : null}
      <img src={carModel.imgSrc} />
      <div>
        <span>{carModel.description}</span>
        <button>상세품목 {'>'}</button>
      </div>
      <ul>
        {carModel.options.defaultOptions.map((defaultOption) => (
          <li>
            <img src={defaultOption} />
          </li>
        ))}
      </ul>
      <button>내 차 만들기</button>
    </li>
  );
};

export default CarModelItem;
