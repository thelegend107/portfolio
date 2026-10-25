"use client"

import { useRef, type PointerEvent } from "react"
import { IconArrowRight } from "@/components/icons/InkIcon"

export default function InkCta({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    const ref = useRef<HTMLAnchorElement>(null)

    const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        el.style.setProperty(
            "--ink-x",
            `${((e.clientX - r.left) / r.width) * 100}%`
        )
        el.style.setProperty(
            "--ink-y",
            `${((e.clientY - r.top) / r.height) * 100}%`
        )
    }

    return (
        <a
            ref={ref}
            href={href}
            onPointerMove={onMove}
            className="ink-cta inline-flex w-fit items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-display text-sm font-semibold tracking-[-0.01em] text-white hover:bg-[#4548e8] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
            {children}
            <IconArrowRight size={14} className="ink-icon shrink-0" />
        </a>
    )
}
