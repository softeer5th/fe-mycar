import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const footerMenu = [
    '모바일 App', '저작권안내', '개인정보 처리방침' , '이용약관' ,'프라이버시 센터', '윤리경영 사이버 감사실', '사이트맵'
];

const footerMenus = footerMenu.map(menu=>
    <li className="w-1/5 text-[#999999] before:content-['|'] before:text-left text-center"><Link to="/">{menu}</Link></li>)

const Footer = (props: Props) => {
  return (
    <div className='bg-[#1c1b1b] py-[50px] px-[60px]'>
        <div className='flex flex-row justify-between'>
            <div>
                <img className = '' src="/public/logo_footer.png"/>
            </div>
            <div className='flex flex-col'>
                <ul className='flex flex-wrap'>
                    {footerMenus}
                </ul>
                <p className='text-[#999999]'>고객센터 : 080-600-6000</p>
                <p className='text-[#999999]'>COPYRIGHT ⓒ HYUNDAI MOTOR COMPANY. ALL RIGHTS RESERVED.</p>
            </div>
            <div>
                <img 
                    className='w-[190px] h-[74px]'
                    src='/public/footerSNS.png'/>
            </div>
        </div>
        <div className='border-t-[1px] border-[#2a2a2a] mt-10'>
        </div>
        <img src="/public/footerImage.png" className='w-full'/>
    </div>
  )
}

export default Footer