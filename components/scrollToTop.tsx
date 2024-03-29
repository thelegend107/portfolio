"use client"

import { HiArrowUpCircle } from "react-icons/hi2"

export default function () {
    return (
        <HiArrowUpCircle
            onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full bg-light dark:bg-dark cursor-pointer"
            size={45}
        />
    )
}
