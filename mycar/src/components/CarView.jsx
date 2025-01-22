import { Link } from 'react-router-dom';
import Buttons from './Buttons';
import { useState } from 'react';

export default function CarView({ selectedModel }) {
  const openCatalog = (catalogSrc) => {
    window.open(catalogSrc, '_blank');
  };

  const [isExterior, setExterior] = useState(true);

  return (
    <div className='flex-1 flex-col h-full px-16 py-8'>
      <h1 className='text-2xl font-bold'>{`${selectedModel.carName}-${selectedModel.modelName}`}</h1>
      <div>
        {selectedModel.catalogSrc && (
          <Link onClick={() => openCatalog(selectedModel.catalogSrc)}>{'카탈로그>'}</Link>
        )}
        <div className=''>
          총 차량 가격
          <span className=' text-2xl font-bold'>{selectedModel.price}</span>
        </div>
        <img src={selectedModel.imageSrc} className='w-full p-20'></img>
        <p className='text-xs'>
          * 상기 이미지는 내/외장 색상 선택을 돕기 위한 참고용으로 제공되고 있습니다.
          <br />
          (탑트림에 모든 옵션을 포함한 차량 기준으로 제작되었습니다.)
        </p>
        <Buttons
          isExterior={isExterior}
          leftText={'Exterior'}
          rightText={'Interior'}
          setExterior={setExterior}
        />
      </div>
    </div>
  );
}
