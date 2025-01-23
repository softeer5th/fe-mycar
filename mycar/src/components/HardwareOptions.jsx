import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import { getHwOptions } from '../apis/dataFetch';
import OptionCard from './OptionCard';

export default function HardwareOptions({ setPrice }) {
  const [isDefaultOpt, setIsDefaultOpt] = useState(false);
  const [selectedOptArr, setSelectedOptArr] = useState([]);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['optionKey'],
    queryFn: getHwOptions,
  });

  const setIsOptionSelected = useCallback((i) => {
    setSelectedOptArr((prev) =>
      prev.map((optSelected, optIdx) => (optIdx === i ? !optSelected : optSelected)),
    );
  }, []);

  useEffect(() => {
    if (!data || isLoading || isError) return;

    setSelectedOptArr(Array(data.length).fill(false));
  }, [data]);

  return (
    <div className='flex flex-col mx-20 mt-20 mb-40'>
      <h2 className='text-2xl  font-bold'>옵션</h2>
      <div className='flex mt-10 h-12 border-b-2 border-black'>
        <div
          className={classNames(
            'flex w-40 h-12 justify-center items-center font-bold border-black ',
            !isDefaultOpt
              ? 'border-2 border-b-0 bg-white'
              : 'border border-opacity-30  opacity-60  font-normal',
          )}
          onClick={() => setIsDefaultOpt(false)}
        >
          선택 품목
        </div>
        <div
          className={classNames(
            'flex w-40 h-12 justify-center items-center font-bold border-black ',
            isDefaultOpt
              ? 'border-2 border-b-0 bg-white'
              : 'border border-opacity-30 opacity-60 font-normal',
          )}
          onClick={() => setIsDefaultOpt(true)}
        >
          기본 포함 품목
        </div>
      </div>
      <div className=' flex flex-col mt-14'>
        <h3 className='text-lg font-bold'>상세 품목</h3>
        <div className='flex flex-wrap gap-8'>
          {data &&
            data.map((option, i) => {
              return (
                <OptionCard
                  key={i}
                  hwOption={option}
                  isOptionSelected={selectedOptArr[i]}
                  setIsOptionSelected={() => setIsOptionSelected(i)}
                  setPrice={setPrice}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
