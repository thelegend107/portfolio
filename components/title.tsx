import { ReactNode } from "react"

export default function Title({ children }: { children?: ReactNode }) {
    return (
        <div className="min-h-[12vh] lg:min-h-[24vh] flex flex-col justify-center items-center lg:items-start">
            <div className="text-3xl lg:text-6xl">{children}</div>
        </div>
    )
}
