"use client"

import { BiSolidSun, BiSolidMoon } from "react-icons/bi"
import { useTheme } from "@/contexts/themeContext"

export default function () {
    const { darkMode, toggleDarkMode } = useTheme()

    function iconShow() {
        if (darkMode) {
            return <BiSolidMoon className="size-full"></BiSolidMoon>
        } else {
            return <BiSolidSun className="size-full"></BiSolidSun>
        }
    }

    return (
        <button
            className={
                (darkMode
                    ? "bg-primary text-primary "
                    : "bg-neutral-700 text-dark ") +
                "p-[1px] rounded-full h-[26px] w-12 transition-all ease-in-out border border-dark dark:border-white shadow-inner shadow-neutral-900"
            }
            onClick={toggleDarkMode}
        >
            <div
                className={
                    (darkMode ? "translate-x-full " : null) +
                    "flex items-center justify-center w-1/2 rounded-full p-0.5 bg-white size-full transition-all ease-in-out duration-500 shadow-md shadow-black"
                }
            >
                {iconShow()}
            </div>
        </button>
    )
}
