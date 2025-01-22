import React from 'react'

const filters = [
    { title: '엔진', content: '수소전기' },
    { title: '바디타입', content: 'SUV' },
    { title: '변속기', content: '오토' },
    { title: '구동방식', content: '오토' },
]

export default function FilterList() {

    return (
        <ul className="w-full flex flex-row">
            {filters.map(({ title, content }) => {
                return <li className="mr-[60px] flex flex-col ">
                    <div className="w-full text-base font-semibold text-left">{title}</div>
                    <span className="w-[109px] h-[40px] px-[10px] py-3 mt-[10px] flex items-center justify-center text-[white] bg-[#007FA8] text-sm font-semibold">{content}</span>
                </li>
            })}
        </ul>
    )
}