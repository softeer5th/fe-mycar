import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function OptionPageHeader({ step, setStep }) {
  const navigate = useNavigate();
  return (
    <header className='w-full flex flex-col justify-between bg-primary px-12 pt-2 gap-4'>
      <div className='w-full flex justify-between items-center'>
        <img src='https://www.hyundai.com/static/images/logo_black.png'></img>
        <button
          className='flex gap-2 items-center'
          onClick={() => {
            navigate(-1, { replace: true });
          }}
        >
          <h4>종료</h4>
          <img src='https://www.hyundai.com/static/images/blit_end.png'></img>
        </button>
      </div>
      <div className='flex gap-12 text-xl text-gray-500 font-bold'>
        <div
          className={classNames('relative flex justify-between gap-6 pb-6', {
            'step text-black': step === 1,
          })}
          onClick={() => setStep(1)}
        >
          <p>01</p>
          <p>모델 선택</p>
        </div>
        <hr className='h-8 bg-black opacity-30' style={{ width: '1px' }} />
        <div
          className={classNames('relative flex justify-between gap-6 pb-6', {
            'step text-black': step === 2,
          })}
        >
          <p>02</p>
          <p>내 차 만들기</p>
        </div>
      </div>
    </header>
  );
}
