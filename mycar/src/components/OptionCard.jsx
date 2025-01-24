export default function OptionCard({ hwOption, isOptionSelected, setIsOptionSelected, setPrice }) {
  return (
    <div
      className={`flex flex-col ${
        isOptionSelected ? 'border-textBlue border-2' : 'border border-black border-opacity-30'
      }`}
      onClick={() => {
        setIsOptionSelected((prev) => !prev);
        setPrice((prev) => {
          return isOptionSelected ? prev - hwOption.optionPrice : prev + hwOption.optionPrice;
        });
      }}
    >
      <img src={hwOption.optionImgSrc}></img>
      <p className='p-4 font-bold'>{hwOption.optionName}</p>
      <div className='w-full flex justify-between items-center p-4'>
        <p>{hwOption.optionPrice.toLocaleString() + ' 원'}</p>
        {isOptionSelected ? (
          <div className='flex justify-center items-center w-6 h-6 bg-textBlue rounded-full '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4 text-white'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 text-gray-300'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <circle cx='10' cy='10' r='9' stroke='currentColor' strokeWidth='2' fill='none' />
            <line x1='10' y1='5' x2='10' y2='15' stroke='currentColor' strokeWidth='2' />
            <line x1='5' y1='10' x2='15' y2='10' stroke='currentColor' strokeWidth='2' />
          </svg>
        )}
      </div>
    </div>
  );
}
