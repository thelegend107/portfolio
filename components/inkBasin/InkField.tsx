"use client"

import Image from "next/image"
import {
    useEffect,
    useRef,
    useState,
    type CSSProperties,
    type PointerEvent as ReactPointerEvent,
} from "react"

type Dye = {
    name: string
    href?: string
    x: number
    y: number
}

const STATIC_DYE_LAYOUT: Omit<Dye, "name" | "href">[] = [
    { x: 0.26, y: 0.26 },
    { x: 0.62, y: 0.3 },
    { x: 0.4, y: 0.52 },
]

export default function InkField({
    dyes,
}: {
    dyes: { name: string; href?: string }[]
}) {
    const wrapRef = useRef<HTMLDivElement>(null)
    const pointerRef = useRef({ x: 0, y: 0 })
    const scrollRef = useRef({ x: 0, y: 0 })
    const [reducedMotion, setReducedMotion] = useState(false)
    const placed: Dye[] = dyes.slice(0, 3).map((d, i) => ({
        ...d,
        ...STATIC_DYE_LAYOUT[i % STATIC_DYE_LAYOUT.length],
    }))

    const publishShear = () => {
        const el = wrapRef.current
        if (!el) return
        const x = pointerRef.current.x + scrollRef.current.x
        const y = pointerRef.current.y + scrollRef.current.y
        el.style.setProperty("--shear-x", `${x}px`)
        el.style.setProperty("--shear-y", `${y}px`)
    }

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
        const sync = () => setReducedMotion(mq.matches)
        sync()
        mq.addEventListener("change", sync)
        return () => mq.removeEventListener("change", sync)
    }, [])

    useEffect(() => {
        if (reducedMotion) return
        let frame = 0
        const onScroll = () => {
            if (frame) return
            frame = window.requestAnimationFrame(() => {
                frame = 0
                const wrap = wrapRef.current
                if (!wrap) return
                const rect = wrap.getBoundingClientRect()
                const mid = rect.top + rect.height * 0.5
                const t = Math.max(
                    -1,
                    Math.min(
                        1,
                        (window.innerHeight * 0.5 - mid) / window.innerHeight
                    )
                )
                scrollRef.current = { x: t * 2.5, y: t * 2 }
                publishShear()
            })
        }
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => {
            window.cancelAnimationFrame(frame)
            window.removeEventListener("scroll", onScroll)
        }
    }, [reducedMotion])

    const onPointer = (e: ReactPointerEvent) => {
        const wrap = wrapRef.current
        if (!wrap || reducedMotion) return
        const rect = wrap.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        pointerRef.current = { x: (x - 0.5) * 7, y: (y - 0.5) * 5 }
        publishShear()
    }

    return (
        <div
            ref={wrapRef}
            className="basin-shell relative size-full min-h-[320px] overflow-hidden rounded-[1.25rem]"
            role="group"
            aria-label="Selected projects"
            onPointerMove={onPointer}
            onPointerLeave={() => {
                pointerRef.current = { x: 0, y: 0 }
                publishShear()
            }}
            style={
                {
                    "--shear-x": "0px",
                    "--shear-y": "0px",
                } as CSSProperties
            }
        >
            <div className="absolute inset-0 dark:hidden">
                <Image
                    src="/ink-basin-plate.webp"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute inset-0 hidden dark:block">
                <Image
                    src="/ink-basin-plate-dark.webp"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                    priority
                />
            </div>
            {!reducedMotion && (
                <>
                    <div
                        className="basin-filament pointer-events-none absolute inset-[-1.5%] size-[103%] opacity-[0.55] mix-blend-multiply dark:opacity-50 dark:mix-blend-lighten"
                        aria-hidden
                    >
                        <div className="absolute inset-0 dark:hidden">
                            <Image
                                src="/ink-basin-plate.webp"
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 60vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 hidden dark:block">
                            <Image
                                src="/ink-basin-plate-dark.webp"
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 60vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div
                        className="basin-filament basin-filament-b pointer-events-none absolute inset-[-2.5%] size-[105%] opacity-[0.28] mix-blend-soft-light dark:opacity-35 dark:mix-blend-screen"
                        aria-hidden
                    >
                        <div className="absolute inset-0 dark:hidden">
                            <Image
                                src="/ink-basin-plate.webp"
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 60vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 hidden dark:block">
                            <Image
                                src="/ink-basin-plate-dark.webp"
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 60vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </>
            )}
            {placed.map((d, i) => (
                <a
                    key={d.name}
                    href={d.href || "#projects"}
                    data-slot={i}
                    className="dye-stain dye-bloom absolute z-10 inline-flex min-h-11 items-center whitespace-nowrap font-display text-[1.2rem] font-bold tracking-[-0.02em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    style={
                        {
                            "--dye-x": `${d.x * 100}%`,
                            "--dye-y": `${d.y * 100}%`,
                            "--dye-parallax": `${0.03 + i * 0.012}`,
                            animationDelay: reducedMotion
                                ? undefined
                                : `${80 + i * 90}ms`,
                        } as CSSProperties
                    }
                >
                    {d.name}
                </a>
            ))}
        </div>
    )
}
