export default function Buttons({ isExterior, leftText, rightText, setExterior }) {
  return (
    <div className='flex w-72 h-10'>
      <button
        className={`flex-1 ${isExterior ? 'bg-textBlue text-white' : 'bg-primary'}`}
        onClick={() => setExterior(true)}
      >
        {leftText}
      </button>
      <button
        className={`flex-1 ${!isExterior ? 'bg-textBlue text-white' : 'bg-primary'}`}
        onClick={() => setExterior(false)}
      >
        {rightText}
      </button>
    </div>
  );
}
