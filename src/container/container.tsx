import React, { ReactNode } from "react";

export default function RootContainer({children}:{children?:ReactNode}) {
    return (
        <div className="w-full h-full flex flex-col overflow-y-scroll">
            {children}
        </div>
    )
}