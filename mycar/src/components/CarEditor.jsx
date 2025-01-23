import { color } from 'motion/react';
import CarOptionList from './CarOptionList';
import CarView from './CarView';
import { useState } from 'react';

export default function CarEditor({ selectedModel }) {
  const [colorIndex, setColorIndex] = useState({ outerColor: 0, innerColor: 0 });

  return (
    <div className='w-full h-full flex overflow-auto'>
      <CarView selectedModel={selectedModel} colorIndex={colorIndex} />
      <hr className='h-full' style={{ width: '1px' }} />
      <CarOptionList
        selectedModel={selectedModel}
        colorIndex={colorIndex}
        setColorIndex={setColorIndex}
      />
    </div>
  );
}
