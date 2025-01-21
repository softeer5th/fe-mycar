import classNames from 'classnames';
import { Category } from '../datas/carInfo';

export default function ModelSelect(props) {
  return (
    <div className='w-full h-20 flex justify-center items-center max-w-6xl'>
      <h2 className='min-w-max font-bold'>모델 선택</h2>
      <div className='w-full px-28 flex justify-around'>
        {Object.values(Category).map((value, i) => (
          <button
            className={classNames('min-w-max px-2 py-1', {
              'text-blue-600': props.category === value,
            })}
            key={i}
            onClick={() => {
              props.setCate(value);
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}
