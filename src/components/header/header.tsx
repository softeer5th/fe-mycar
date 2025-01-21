import React from "react";
import { Link } from "react-router-dom";

const navbar = [
    {
        title: '모델'
    },
    {
        title: '구매/이벤트',
    },
    {
        title: '서비스/멤버십'
    },
    {
        title: '디지털/고객지워'
    },
    {
        title: '브랜드'
    },
    {
        title: 'Shop'
    }
]

export default function Header () {
    return (
        <header className="w-full h-[80px] flex flex-row items-center justify-center space-x-8">
            <img src='/public/hyundai.svg' className="w-[160px]"/>
            <nav>
                <ul className="flex flex-row flex-1 space-x-8 text-[black]">
                    {navbar.map(nav => <li><Link to='/'>{nav.title}</Link></li>)}
                </ul>
            </nav>
            <div>
                Trendy Hyundai
            </div>
        </header>
    )
}