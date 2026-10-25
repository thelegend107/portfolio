"use client"

import Image from "next/image"
import { useState } from "react"
import BoomiMark from "@/components/icons/BoomiMark"
import SwiftUIMark from "@/components/icons/SwiftUIMark"

const letterMarks: Record<string, string> = {
    "ASP.NET": "AS",
    Java: "JA",
    MATLAB: "ML",
    Verilog: "VL",
    MPLAB: "MP",
    Batch: "BA",
}

export default function ({
    name,
    logoUrl,
}: {
    name: string
    logoUrl: string
}) {
    const [broken, setBroken] = useState(false)
    const letters = letterMarks[name]
    const showImage = !letters && name !== "Boomi" && Boolean(logoUrl) && !broken

    return (
        <li className="skill-chip">
            <span className="skill-mark-box">
                {name === "Boomi" ? (
                    <BoomiMark className="skill-glyph" />
                ) : name === "SwiftUI" ? (
                    <SwiftUIMark className="skill-glyph" />
                ) : showImage ? (
                    <Image
                        src={logoUrl}
                        height={28}
                        width={28}
                        alt=""
                        aria-hidden
                        className="skill-mark"
                        onError={() => setBroken(true)}
                    />
                ) : (
                    <span aria-hidden className="skill-fallback">
                        {letters ??
                            name.replace(/[^A-Za-z0-9+#]/g, "").slice(0, 2).toUpperCase()}
                    </span>
                )}
            </span>
            <p>
                <span className="sr-only">Skill: </span>
                {name}
            </p>
        </li>
    )
}
