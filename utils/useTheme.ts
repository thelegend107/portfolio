import { useEffect, useState } from "react"

export default function useTheme() {
    const getCurrentTheme = () => {
        const lsTheme = localStorage.getItem('theme')
        if (lsTheme)
            return lsTheme === 'dark'
        else
            return window.matchMedia("(prefers-color-scheme: dark)").matches;

    };

    const [darkMode, setDarkMode] = useState(getCurrentTheme())

    useEffect(() => {
        if (darkMode) {
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
            document.documentElement.style.colorScheme = 'dark'
        }
        else {
            localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
            document.documentElement.style.colorScheme = 'light'
        }
    }, [darkMode])

    return { darkMode, setDarkMode }
}