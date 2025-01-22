import React from 'react';

export default function Header() {
    return (
        <div className='w-full h-[50px] bg-[#e4dcd3] flex flex-row items-center pt-[30px] pl-[50px] pb-[10px] space-x-5'>
            <img width={150} height={21} src='/public/hyundai.svg' />
            < div className='border-[0.5px] border-[#726D69] h-[15px]' />
            <button>넥쏘</button>
        </div >
    )
}