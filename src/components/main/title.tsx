import React from "react"

export default function Title() {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-[#e4dcd3]">
            <p className="w-[90%] h-[90px] flex items-center text-left font-semibold">
                홈 &gt; 구매/이벤트 &gt; 구매 &gt; <span className="text-[#007FA8]">&nbsp;내차만들기(견적)</span>
            </p>
            <div className="w-[90%] flex-1 py-20 bg-[#f0ede8]">
                <h1 className="text-[58px] font-extrabold mb-10">내 차 만들기</h1>
                <p>내가 타고 싶은 나만의 차를 만들어보세요.</p>
            </div>
        </div>
    )
}