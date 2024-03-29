import { ReactNode } from "react"

export default function ({ children }: { children?: ReactNode }) {
    return (
        <div className="min-h-[6vh] lg:min-h-[24vh] flex flex-col justify-center items-center lg:items-start">
            <div className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
                {children}
            </div>
        </div>
    )
}
