import React from 'react'
import Tmodel from '../../types/model'
import { numberConverter } from '../../utils/converter'

type Props = {
    model: Tmodel;
    onClick: () => void;
};

const ModelCard = ({
    model, onClick
}: Props) => {
    const { product,
        cost,
        category,
        img,
        options } = model;

    return (
        <div className='flex flex-col p-[30px] bg-[#F6F3F2] h-[570px] w-[272.5px]'>
            <h4 className='text-left text-[26px] font-semibold'>
                {product}
            </h4>
            <p className='text-left text-[22px] mt-2 font-semibold'>
                {numberConverter(cost)} 원
            </p>
            <div className='mt-[50px]'>
                <img src={`http://localhost:5000${img}`} />
                <p className='text-left mt-[30px]'>
                    <b className='text-[#666666] text-base'>{category}</b>
                </p>
            </div>
            <ul className='mt-5 pt-5 border-t-[1px] border-[#CCCCCC] flex flex-row justify-between'>
                {options.map(({ img, name }, index) =>
                    <li key={`product-${name}-${index}`} className='w-1/3 px-[10px]'>
                        <img src={`http://localhost:5000${img}`} />
                    </li>
                )}
            </ul>
            <div className='flex flex-grow' />
            <button onClick={onClick} className='w-full h-[50px] flex justify-center items-center bg-[#002C5F] text-white text-base font-medium'>내 차 만들기</button>
        </div>
    )
}

export default ModelCard