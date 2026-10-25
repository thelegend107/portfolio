"use client"

import { useEffect, useId, useRef, useState } from "react"
import Navbar from "./navbar"
import { IconClose, IconMenu } from "@/components/icons/InkIcon"

const FOCUSABLE =
    'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'

export default function () {
    const [open, setOpen] = useState(false)
    const openRef = useRef<HTMLButtonElement>(null)
    const closeRef = useRef<HTMLButtonElement>(null)
    const asideRef = useRef<HTMLElement>(null)
    const titleId = useId()

    useEffect(() => {
        const aside = asideRef.current
        if (aside) aside.inert = !open
        if (!open) return

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        closeRef.current?.focus()

        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false)
                return
            }
            if (event.key !== "Tab" || !asideRef.current) return
            const items = Array.from(
                asideRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
            )
            if (!items.length) return
            const first = items[0]
            const last = items[items.length - 1]
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault()
                last.focus()
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault()
                first.focus()
            }
        }

        window.addEventListener("keydown", onKey)
        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener("keydown", onKey)
            openRef.current?.focus()
        }
    }, [open])

    return (
        <div className="md:hidden">
            <button
                ref={openRef}
                type="button"
                className="ink-icon-btn min-h-11 min-w-11"
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="site-menu"
                onClick={() => setOpen(true)}
            >
                <IconMenu size={22} />
            </button>
            <aside
                ref={asideRef}
                id="site-menu"
                role="dialog"
                aria-modal={open}
                aria-hidden={!open}
                aria-labelledby={titleId}
                className={
                    "ink-panel fixed inset-0 z-30 h-svh w-screen transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                    (open
                        ? "translate-x-0"
                        : "pointer-events-none -translate-x-full")
                }
            >
                <div className="flex items-center justify-between border-b border-[color:var(--color-hairline)] p-3.5">
                    <p
                        id={titleId}
                        className="font-display text-xl tracking-[-0.02em]"
                    >
                        Moe Ayoub
                    </p>
                    <button
                        ref={closeRef}
                        type="button"
                        className="ink-icon-btn min-h-11 min-w-11"
                        aria-label="Close menu"
                        onClick={() => setOpen(false)}
                    >
                        <IconClose size={20} />
                    </button>
                </div>
                <Navbar
                    className="p-3.5"
                    onClick={() => setOpen(false)}
                />
            </aside>
        </div>
    )
}
