"use client"

import { useEffect, useRef, type ReactNode } from "react"

export default function SectionReveal({
    id,
    children,
}: {
    id: string
    children: ReactNode
}) {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            el.classList.add("is-in")
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    el.classList.add("is-in")
                    observer.disconnect()
                }
            },
            { rootMargin: "0px 0px -2% 0px", threshold: 0.02 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <section id={id} ref={ref} className="page-section scroll-mt-24">
            {children}
        </section>
    )
}
