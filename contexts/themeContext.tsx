"use client"

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react"

interface ThemeContext {
    darkMode: boolean
    toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContext | null>(null)

export default function ThemeContextProvider({
    children,
}: {
    children: ReactNode
}) {
    const getCurrentTheme = () => {
        const lsTheme = localStorage.getItem("theme")
        if (lsTheme) return lsTheme === "dark"
        else return window.matchMedia("(prefers-color-scheme: dark)").matches
    }

    const [darkMode, setDarkMode] = useState(getCurrentTheme)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (darkMode) {
            localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
            document.documentElement.style.colorScheme = "dark"
        } else {
            localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
            document.documentElement.style.colorScheme = "light"
        }
    }, [darkMode])

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
