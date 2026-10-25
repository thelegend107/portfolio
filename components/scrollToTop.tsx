"use client"

import { IconArrowUp } from "@/components/icons/InkIcon"

export default function () {
    return (
        <button
            type="button"
            aria-label="Scroll to top"
            onClick={() => {
                const reduce = window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches
                scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
            }}
            className="ink-scroll-top"
        >
            <IconArrowUp size={18} />
        </button>
    )
}
