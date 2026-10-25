"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "@/contexts/themeContext"
import { IconMoon, IconSun } from "@/components/icons/InkIcon"

function subscribe(onStoreChange: () => void) {
    const observer = new MutationObserver(onStoreChange)
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
    })
    return () => observer.disconnect()
}

export default function () {
    const { toggleDarkMode } = useTheme()
    const darkMode = useSyncExternalStore(
        subscribe,
        () => document.documentElement.classList.contains("dark"),
        () => false
    )

    return (
        <button
            type="button"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="ink-theme-toggle"
            onClick={toggleDarkMode}
        >
            <span className="ink-theme-pill">
                <span className="ink-theme-thumb">
                    <IconSun size={13} className="dark:hidden" />
                    <IconMoon size={13} className="hidden dark:block" />
                </span>
            </span>
        </button>
    )
}
