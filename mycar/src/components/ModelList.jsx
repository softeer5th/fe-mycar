import { useState } from "react";
import { carDetailModels } from "../datas/carDetailModel";
import ModelCard from "./ModelCard";

export default function ModelList({carName}) {
    const [pageNum, setPageNum] = useState(0);
    
    function searchModels(modelName) {
        console.log(modelName);
        const carModels = carDetailModels.find((carModel)=>carModel.carName===modelName).detailModels
        return carModels;
    }

    const models = searchModels(carName);

    return (
        <div className="relative flex flex-col ">
            <div className="absolute left-0 top-0">전체모델({ })</div>
            <div className="flex gap-2 justify-center items-center">
                {Array.from({ length: Math.ceil(models.length/4) }).map((_, index) => (
                    <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                        index === pageNum ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    ></div>
                ))}
            </div>
            <div className="flex gap-x-7">
                {models.map((carModel,i )=>{
                    return (
                        <ModelCard key={i} carModel={carModel}/>
                    )
                })}
            </div>
        </div>
    )
}