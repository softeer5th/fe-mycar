import { useEffect, useRef, useState } from "react";
import { carDetailModels } from "../datas/carDetailModel";
import ModelCard from "./ModelCard";

export default function ModelList({ carName }) {
    const [pageNum, setPageNum] = useState(0);
    const [rectWidth, setRectWidth] = useState(100);
    const elementRef = useRef(null);

    function searchModels(modelName) {
        const carModels = carDetailModels.find((carModel)=>carModel.carName===modelName).detailModels;
        return carModels;
    }

    useEffect(() => {
        // 초기 너비 설정 및 창 크기 조정 감지
        function updateWidth() {
            if (elementRef.current) {
                setRectWidth(elementRef.current.offsetWidth);
            }
        }
        // 초기 실행
        updateWidth();

        // 이벤트 리스너 추가
        window.addEventListener("resize", updateWidth);

        // 클린업 함수
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    const models = searchModels(carName);
    let cardPerPage = 4;

    return (
        <div ref={elementRef} className="h-full relative flex flex-col gap-7  my-8 mx-20 overflow-hidden">
            <div className="absolute left-0 top-0">전체모델({models.length})</div>
            <div className="flex gap-2 justify-center items-center">
                {Array.from({ length: Math.ceil(models.length / cardPerPage) }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === pageNum ? "bg-blue-500" : "bg-gray-300"
                            }`}
                        onClick={() => { setPageNum(index) }}
                    ></div>
                ))}
            </div>
            <div className='flex gap-x-7 items-center transform transition duration-300 ease-in-out'
                style={{ transform: `translateX(${-(rectWidth + 28) * pageNum}px)` }}>
                {models.map((carModel, i) => {
                    return (
                        <ModelCard key={i} carModel={carModel} cardWidth={rectWidth / cardPerPage} />
                    )
                })}
            </div>
        </div>
    )
}