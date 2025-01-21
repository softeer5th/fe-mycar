import { useState } from "react";
import { carDetailModels } from "../datas/carDetailModel";
import ModelCard from "./ModelCard";

export default function ModelList({carName}) {
    const [pageNum, setPageNum] = useState(0);
    
    function searchModels(modelName) {
        console.log(modelName);
        const carModels = carDetailModels.find((carModel)=>carModel.carName===modelName).detailModels;
        return carModels;
    }

    const models = searchModels(carName);
    let cardPerPage = 4;

    return (
        <div className=" h-full relative flex flex-col gap-7  my-8 mx-20">
            <div className="absolute left-0 top-0">전체모델({ models.length })</div>
            <div className="flex gap-2 justify-center items-center">
                {Array.from({ length: Math.ceil(models.length/cardPerPage) }).map((_, index) => (
                    <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                        index === pageNum ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    onClick={()=>{setPageNum(index)}}
                    ></div>
                ))}
            </div>
            <div className="flex gap-x-7 justify-center items-center">
                {models.slice(pageNum*cardPerPage, (pageNum+1)*cardPerPage).map((carModel,i )=>{
                    return (
                        <ModelCard key={i} carModel={carModel}/>
                    )
                })}
            </div>
        </div>
    )
}