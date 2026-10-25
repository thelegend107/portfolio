"use client"

import scrollToElement from "@/utils/scrollToElement"

export default function ({
    name,
    elementId,
    onClick,
}: {
    name: string
    elementId?: string
    onClick?: () => void
}) {
    return (
        <li>
            <button
                type="button"
                aria-label={name}
                className="nav-link w-full text-left font-display text-xs font-medium uppercase tracking-[0.06em] lg:tracking-[0.08em]"
                onClick={(e) => {
                    scrollToElement(
                        elementId || name.toLowerCase().replaceAll(" ", "")
                    )
                    if (onClick != null) onClick()
                }}
            >
                {name}
            </button>
        </li>
    )
}
