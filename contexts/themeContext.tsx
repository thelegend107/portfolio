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
    const [darkMode, setDarkMode] = useState(false)

    const themeCheckOnLoad = () => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark")
            document.documentElement.style.colorScheme = "dark"
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            document.documentElement.style.colorScheme = "light"
            localStorage.setItem("theme", "light")
        }
    }

    const themeCheck = () => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.add("dark")
            document.documentElement.style.colorScheme = "dark"
        } else {
            document.documentElement.classList.remove("dark")
            document.documentElement.style.colorScheme = "light"
        }
    }

    useEffect(() => {
        themeCheckOnLoad()
        if (localStorage.theme === "dark") setDarkMode(true)
        else setDarkMode(false)
        document.body.style.display = "block"
    }, [])

    useEffect(() => {
        themeCheck()
    }, [darkMode])

    const toggleDarkMode = () => {
        if ("theme" in localStorage && localStorage.theme === "dark")
            localStorage.setItem("theme", "light")
        else localStorage.setItem("theme", "dark")
        setDarkMode(!darkMode)
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
