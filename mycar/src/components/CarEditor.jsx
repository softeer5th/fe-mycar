import { color } from 'motion/react';
import CarOptionList from './CarOptionList';
import CarView from './CarView';
import { useState } from 'react';

export default function CarEditor({ selectedModel }) {
  const [colorIndex, setColorIndex] = useState({ outerColor: 0, innerColor: 0 });
  const [carPrice, setCarPrice] = useState(selectedModel.price);

  return (
    <div className='w-full h-full flex overflow-auto'>
      <CarView selectedModel={selectedModel} price={carPrice} colorIndex={colorIndex} />
      <hr className='h-full bg-black opacity-30 ' style={{ width: '1px' }} />
      <CarOptionList
        selectedModel={selectedModel}
        colorIndex={colorIndex}
        setColorIndex={setColorIndex}
        setCarPrice={setCarPrice}
      />
    </div>
  );
}
