import CarOptionList from './CarOptionList';
import CarView from './CarView';

export default function CarEditor({ selectedModel }) {
  console.log(selectedModel);
  return (
    <div className='w-full h-full flex overflow-auto'>
      <CarView selectedModel={selectedModel} />
      <hr className='h-full' style={{ width: '1px' }} />
      <CarOptionList selectedModel={selectedModel} />
    </div>
  );
}
