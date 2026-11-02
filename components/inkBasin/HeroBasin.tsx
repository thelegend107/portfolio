"use client"

import { useEffect, useRef } from "react"
import InkCta from "@/components/inkBasin/InkCta"
import { IconExternal } from "@/components/icons/InkIcon"

function smoothstep(t: number) {
    const x = Math.min(1, Math.max(0, t))
    return x * x * (3 - 2 * x)
}

function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t
}

export default function HeroBasin() {
    const trackRef = useRef<HTMLElement>(null)
    const filmRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const track = trackRef.current
        const film = filmRef.current
        if (!track || !film) return

        const video = film.querySelector("video")
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
        if (reduce.matches) {
            video?.pause()
            film.classList.add("is-ready")
            return
        }

        let armTimer = 0
        const armFilm = () => {
            if (film.classList.contains("is-ready")) return
            film.classList.add("is-ready")
            void video?.play().catch(() => {})
        }
        if (video) {
            if (video.readyState >= 2) armFilm()
            else {
                video.addEventListener("loadeddata", armFilm, { once: true })
                armTimer = window.setTimeout(armFilm, 900)
            }
        } else {
            armFilm()
        }

        const state = { filmY: 0, filmScale: 1, filmOp: 1 }
        const target = { ...state }
        let frame = 0
        let running = true
        let last = performance.now()

        const readScroll = () => {
            const rect = track.getBoundingClientRect()
            const travel = Math.max(rect.height - window.innerHeight, 1)
            const progress = Math.min(1, Math.max(0, -rect.top / travel))
            const hold = smoothstep(progress)
            const wide = window.matchMedia("(min-width: 1024px)").matches
            target.filmY = hold * (wide ? 2.4 : 3.2)
            target.filmScale = 1 + hold * (wide ? 0.035 : 0.04)
            target.filmOp = 1 - hold * 0.18
        }

        const paint = (now: number) => {
            if (!running) return
            const dt = Math.min(40, Math.max(0, now - last))
            last = now
            readScroll()
            const ease = 1 - Math.exp(-dt / 78)
            state.filmY = lerp(state.filmY, target.filmY, ease)
            state.filmScale = lerp(state.filmScale, target.filmScale, ease)
            state.filmOp = lerp(state.filmOp, target.filmOp, ease)

            film.style.transform = `translate3d(0, ${state.filmY}%, 0) scale(${state.filmScale})`
            film.style.opacity = String(state.filmOp)

            const drifting =
                Math.abs(state.filmY - target.filmY) > 0.012 ||
                Math.abs(state.filmScale - target.filmScale) > 0.0005 ||
                Math.abs(state.filmOp - target.filmOp) > 0.002
            if (drifting) frame = requestAnimationFrame(paint)
        }

        const kick = () => {
            cancelAnimationFrame(frame)
            last = performance.now()
            frame = requestAnimationFrame(paint)
        }

        readScroll()
        Object.assign(state, target)
        window.addEventListener("scroll", kick, { passive: true })
        window.addEventListener("resize", kick, { passive: true })
        return () => {
            running = false
            cancelAnimationFrame(frame)
            window.clearTimeout(armTimer)
            window.removeEventListener("scroll", kick)
            window.removeEventListener("resize", kick)
            video?.removeEventListener("loadeddata", armFilm)
            film.classList.remove("is-ready")
            film.style.transform = ""
            film.style.opacity = ""
        }
    }, [])

    return (
        <section id="intro" ref={trackRef} className="hero-track">
            <div className="hero-stage">
                <div ref={filmRef} className="hero-film" aria-hidden>
                    <video
                        className="hero-film-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster="/hero-atmosphere-poster.webp"
                    >
                        <source src="/hero-atmosphere.mp4" type="video/mp4" />
                    </video>
                    <div className="hero-film-wash" />
                </div>
                <div className="hero-copy">
                    <div className="hero-copy-stack">
                        <div className="hero-copy-block">
                            <div className="hero-identity">
                                <h1 className="hero-name type-display text-ink dark:text-paper hero-rise hero-rise-1">
                                    Moe Ayoub
                                </h1>
                                <p className="hero-role type-lead font-medium hero-rise hero-rise-2">
                                    Full-Stack Engineer
                                </p>
                                <span
                                    className="hero-cue hero-rise hero-rise-3"
                                    aria-hidden
                                />
                            </div>
                            <div className="hero-lede">
                                <div className="hero-support hero-rise hero-rise-4">
                                    <p>
                                        Field software and admin tools —
                                        MapItFast on iOS, React, and .NET
                                        at&nbsp;
                                        <span className="font-semibold text-depth">
                                            AgTerra Technologies.
                                        </span>
                                    </p>
                                    <p>
                                        Prior systems integrator at Raven
                                        Industries.
                                    </p>
                                </div>
                                <div className="hero-actions hero-rise hero-rise-5">
                                    <InkCta href="mailto:mma.ayoub@outlook.com">
                                        Email me
                                    </InkCta>
                                    <a
                                        href="/moe.ayoub_resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="View resume (opens in a new tab)"
                                        className="ink-cta-secondary inline-flex w-fit items-center gap-2 rounded-md px-6 py-3.5 font-display text-sm font-semibold tracking-[-0.01em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        Resume
                                        <IconExternal
                                            size={14}
                                            className="ink-icon shrink-0"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="hero-scroll-hint" aria-hidden>
                    Scroll
                </p>
            </div>
        </section>
    )
}
