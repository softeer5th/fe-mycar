export default function ColorSelector({ isOuter, color, colorIndex, setColorIndex }) {
  return (
    <>
      <div className='mt-14 flex justify-between'>
        <h4 className=' text-lg font-bold'>{isOuter ? '외장색상' : '내장색상'}</h4>
        <p className=' text-black opacity-45'>
          {color && color[isOuter ? colorIndex.outerColor : colorIndex.innerColor].colorName}
        </p>
      </div>
      <hr className=' my-4' />
      <ul className={`${isOuter && 'flex flex-wrap'}`}>
        {color &&
          color.map((outerColor, i) => (
            <li key={i} className={`relative ${isOuter && 'w-1/5'} p-2`}>
              <img
                className={`${isOuter || 'w-full'}`}
                src={outerColor.imageSrc}
                onClick={() =>
                  setColorIndex((prev) => {
                    return isOuter ? { ...prev, outerColor: i } : { ...prev, innerColor: i };
                  })
                }
              />
              {(isOuter ? colorIndex.outerColor : colorIndex.innerColor) === i && (
                <div className='absolute right-0 top-0 w-6 h-6 bg-textBlue rounded-full '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='absolute left-1 top-1 w-4 h-4 text-white'
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
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
