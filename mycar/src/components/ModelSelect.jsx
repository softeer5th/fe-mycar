import classNames from 'classnames';
import { Category } from '../datas/carInfo';

export default function ModelSelect(props) {
    return (
        <div className='w-full h-16 flex justify-center items-center max-w-6xl flex-shrink-0'>
            <h2 className='min-w-max font-bold'>모델 선택</h2>
            <div className='w-full px-28 flex justify-around'>
                {Object.values(Category).map((value, i) => (
                    <button
                        className={classNames('min-w-max px-2 py-1', 
                            props.category === value && 'text-blue-600',
                        )}
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