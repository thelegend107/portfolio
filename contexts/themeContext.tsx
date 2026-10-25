"use client"

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react"

interface ThemeContextValue {
    darkMode: boolean
    toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function applyTheme(dark: boolean) {
    document.documentElement.classList.toggle("dark", dark)
    document.documentElement.style.colorScheme = dark ? "dark" : "light"
    localStorage.setItem("theme", dark ? "dark" : "light")
}

export default function ThemeContextProvider({
    children,
}: {
    children: ReactNode
}) {
    const [darkMode, setDarkMode] = useState(false)
    const [synced, setSynced] = useState(false)

    useEffect(() => {
        const dark = localStorage.theme === "dark"
        setDarkMode(dark)
        setSynced(true)
    }, [])

    useEffect(() => {
        if (!synced) return
        applyTheme(darkMode)
    }, [darkMode, synced])

    const toggleDarkMode = () => {
        setDarkMode((value) => {
            const next = !value
            applyTheme(next)
            return next
        })
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context)
        throw new Error("useTheme must be used within a ThemeContextProvider")

    return context
}
