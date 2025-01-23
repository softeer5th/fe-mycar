import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getColorList } from '../apis/dataFetch';

export default function ColorOptions({ colorIndex, setColorIndex }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['colorKey'],
    queryFn: getColorList,
  });

  return (
    <div className='flex flex-col'>
      <h2>색상</h2>
      <div className='flex justify-between'>
        <h4>외장색상</h4>
        <p>{data && data.outerColor[colorIndex.outerColor].colorName}</p>
      </div>
      <div className='flex flex-wrap'>
        {data &&
          data.outerColor.map((outerColor, i) => (
            <img
              key={i}
              className='w-1/5'
              src={outerColor.imageSrc}
              onClick={() =>
                setColorIndex((prev) => {
                  return { ...prev, outerColor: i };
                })
              }
            />
          ))}
      </div>
    </div>
  );
}
