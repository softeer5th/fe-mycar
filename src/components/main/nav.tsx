import React from 'react';
import { Link } from 'react-router-dom';

type Props = {}

const models = [
    {
        name: '수소 / 전기차',
        selected: true
    },
    {
        name: 'N'
    },
    {
        name: '승용'
    },
    {
        name: 'SUV'
    },
    {
        name: 'MPV'
    },
    {
        name: '소형트랙&택시'
    },
    {
        name: '트럭'
    },
    {
        name: '버스'
    }
]

const modelLists = models.map(model => <li className={`${model.selected && 'text-[#007FA8]'}`} key={model.name}><button>{model.name}</button></li>);

export default function Nav({ }: Props) {

    return (
        <nav className='w-full h-[70px] flex items-center justify-between px-20 bg-[white]'>
            <h3 className='font-extrabold text-xl'>
                모델 선택
            </h3>
            <div>
                <ul className='flex flex-row space-x-16 font-semibold text-[#666666]'>
                    {modelLists}
                </ul>
            </div>
            <div>
                <button>V 모델 비교</button>
            </div>
        </nav>
    )
}