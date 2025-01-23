import { Link } from 'react-router-dom';
import Buttons from './Buttons';
import { useState } from 'react';

export default function CarView({ selectedModel, price, colorIndex }) {
  const openCatalog = (catalogSrc) => {
    window.open(catalogSrc, '_blank');
  };

  const [isExterior, setExterior] = useState(true);

  return (
    <div className='flex-1 flex-col h-full px-16 py-8'>
      <h1 className='text-3xl font-bold'>{`${selectedModel.carName} - ${selectedModel.modelName}`}</h1>
      <div>
        <div className=' mt-4 flex justify-between'>
          <div className=' flex justify-center items-center text-buttonBlue'>
            {selectedModel.catalogSrc && (
              <Link onClick={() => openCatalog(selectedModel.catalogSrc)}>{'카탈로그 >'}</Link>
            )}
          </div>
          <div className=' text-lg'>
            총 차량 가격
            <span className=' ml-8  text-3xl font-bold'>{`${price.toLocaleString(
              'en-US',
            )} 원`}</span>
          </div>
        </div>
        <img
          src={isExterior ? selectedModel.imageSrc : selectedModel.interiorSrc}
          className='w-full py-5'
        />
        <p className='text-xs'>
          * 상기 이미지는 내/외장 색상 선택을 돕기 위한 참고용으로 제공되고 있습니다.
          <br />
          (탑트림에 모든 옵션을 포함한 차량 기준으로 제작되었습니다.)
        </p>
        <div className=' mx-auto max-w-fit mt-6'>
          <Buttons
            isExterior={isExterior}
            leftText={'Exterior'}
            rightText={'Interior'}
            setExterior={setExterior}
          />
        </div>
      </div>
    </div>
  );
}
