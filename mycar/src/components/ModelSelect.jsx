import { useState } from "react"
import classNames from "classnames"

const Category = Object.freeze({
    EV: "수소/전기차",
    N: "N",
    SEDAN: "승용",
    SUV: "SUV",
    MPV: "MPV",
    TAXI: "소형트럭&택시",
    TRUCK: "트럭",
    BUS: "버스"
})



export default function ModelSelect() {
    const [category, setCate] = useState(Category.EV);

    return (
        <div className="w-full h-20 flex justify-center items-center max-w-6xl">
            <h2 className="min-w-max font-bold">모델 선택</h2>
            <div className="w-full px-28 flex justify-around">
                {Object.values(Category).map((value, i) =>
                    <div className={classNames('min-w-max', {
                        'text-blue-600': category === value
                    })} key={i} onClick={() => {
                        setCate(value);
                    }}>{value}</div>
                )}
            </div>
        </div>
    )
}