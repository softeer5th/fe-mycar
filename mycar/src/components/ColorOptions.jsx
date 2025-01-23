import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getColorList } from '../apis/dataFetch';
import ColorSelector from './ColorSelector';

export default function ColorOptions({ colorIndex, setColorIndex }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['colorKey'],
    queryFn: getColorList,
  });

  return (
    <div className='flex flex-col mx-20 mt-20'>
      <h2 className='text-2xl  font-bold'>색상</h2>
      {data && (
        <>
          <ColorSelector
            isOuter={true}
            color={data.outerColor}
            colorIndex={colorIndex}
            setColorIndex={setColorIndex}
          />
          <ColorSelector
            isOuter={false}
            color={data.innerColor}
            colorIndex={colorIndex}
            setColorIndex={setColorIndex}
          />
        </>
      )}
    </div>
  );
}
