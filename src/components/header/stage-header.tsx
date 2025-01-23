import { Link, useLocation, useParams } from 'react-router';

const StageHeader = () => {
  const { carCode } = useParams();
  const { pathname } = useLocation();

  const selectedIcon =
    'after:absolute  after:bottom-[-23px] after:left-[60px]  after:h-[25px] after:border-b-white after:border-b-[10px]  after:border-r-transparent after:border-r-[10px] after:border-l-transparent after:border-l-[10px]';

  return (
    <div className="  relative w-full px-[50px] h-[78px] bg-[#e4dcd3] z-10 ">
      <ul className=" flex items-center absolute bottom-0 left-[50px]     ">
        <li className="relative h-[49px] text-[20px]">
          <Link
            to={`/model/${carCode}`}
            className={`${
              pathname.includes('making') ? ' opacity-50 ' : selectedIcon
            } border-r border-black pr-[50px] relative `}
          >
            <span className=" mr-5">01</span> 모델 선택
          </Link>
        </li>
        <li className="relative h-[49px] text-[20px]">
          <Link
            to={`/model/${carCode}/making`}
            className={`${
              pathname.includes('making')
                ? `${selectedIcon} after:left-[120px]`
                : 'opacity-50'
            } pl-[50px] relative `}
          >
            <span className=" mr-5">02 </span> 내 차 만들기
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StageHeader;
