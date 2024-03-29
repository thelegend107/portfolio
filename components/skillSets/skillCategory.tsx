import React from "react"

export default function ({
    name,
    children,
}: {
    name: string
    children?: React.ReactNode
}) {
    return (
        <div className="bg-glass space-y-4 py-4 px-2 flex-[1_1_25%]">
            <p className="font-light text-center text-xl lg:text-3xl">{name}</p>
            <div className="flex gap-4 items-center justify-center flex-wrap">
                {children}
            </div>
        </div>
    )
}
