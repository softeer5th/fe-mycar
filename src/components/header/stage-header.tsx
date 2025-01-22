import { Link, useLocation, useParams } from 'react-router';

const StageHeader = () => {
  const { carCode } = useParams();
  const { pathname } = useLocation();

  return (
    <div className="  relative w-full px-[50px] h-[78px] bg-[#e4dcd3] z-10 ">
      <ul className=" flex items-center absolute bottom-0 left-[50px]     ">
        <li className=" relative h-[49px] text-[20px] ">
          <Link
            to={`/model/${carCode}`}
            className={`${
              pathname.includes('making') ? ' opacity-50  ' : ''
            } border-r border-black pr-[50px] `}
          >
            <span className=" mr-5">01</span> 모델선택
          </Link>
        </li>
        <li className=" relative h-[49px] text-[20px] ">
          <Link
            to={`/model/${carCode}/making`}
            className={`${
              pathname.includes('making') ? ` ` : 'opacity-50'
            } pl-[50px]`}
          >
            <span className=" mr-5">02 </span> 내 차 만들기
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default StageHeader;
