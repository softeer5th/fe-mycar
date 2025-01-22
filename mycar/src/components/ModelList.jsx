import { useEffect, useRef, useState } from "react";
import ModelCard from "./ModelCard";

export default function ModelList({ models, setSelectedModel }) {
    const [pageNum, setPageNum] = useState(0);
    const [rectWidth, setRectWidth] = useState(100);
    const elementRef = useRef(null);
    
    useEffect(() => {
        function updateWidth() {
            if (elementRef.current) {
                setRectWidth(elementRef.current.offsetWidth);
            }
        }
        updateWidth();

        window.addEventListener("resize", updateWidth);

        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    let cardPerPage = 4;
    const totalPageCount = Math.ceil(models.length / cardPerPage);

    return (
        <div ref={elementRef} className="h-full relative flex flex-col gap-7  my-8 mx-20 overflow-hidden">
            <div className="absolute left-0 top-0">전체모델({models.length})</div>
            <div className="flex gap-2 justify-center items-center">
                {Array.from({ length: totalPageCount }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === pageNum ? "bg-blue-500" : "bg-gray-300"
                            }`}
                        onClick={() => { setPageNum(index) }}
                    ></button>
                ))}
            </div>
            <div className='relative'>
                <div className='flex gap-x-7 items-center transform transition duration-300 ease-in-out'
                    style={{ transform: `translateX(${-(rectWidth + 28) * pageNum}px)` }}>
                    {models.map((carModel, i) => {
                        return (
                            <ModelCard key={i} carModel={carModel} cardWidth={rectWidth / cardPerPage} setSelectedModel={setSelectedModel} />
                        )
                    })}
                </div>
                <button className='w-10 h-10 absolute left-0 top-1/2 -translate-y-1/2 items-center bg-black opacity-30 text-white' onClick={() => setPageNum((prev) => prev > 0 ? prev - 1 : prev)}>{'<'}</button>
                <button className='w-10 h-10 absolute right-0 top-1/2 -translate-y-1/2 items-center bg-black opacity-30 text-white' onClick={() => setPageNum((prev) => prev < totalPageCount - 1 ? prev + 1 : prev)}>{'>'}</button>
            </div>
            <p className="text-sm opacity-50">* 표시된 가격은 세제혜택 반영 전 금액으로 견적 완료 시 세제혜택이 적용된 금액 확인이 가능합니다.<br />
                * 모델별 차량 이미지는 참고용 예시로 실제와 다를 수 있습니다.</p>
        </div>
    )
}