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
                aria-label={name}
                className="hover:text-primary transition-all ease-in-out duration-500 w-full text-left hover:border-b hover:border-primary"
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
