import React, { ReactNode } from 'react'

type Props = {
    step: number;
    children: ReactNode;
}

export default function Container({ step, children }: Props) {
    return (
        <div className={`w-full h-full pl-[50px] py-[30px] overflow-y-scroll ${step === 1 && 'flex flex-row'}`}>
            {children}
        </div>
    )
}