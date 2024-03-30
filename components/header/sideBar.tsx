"use client"

import { IoMenuOutline } from "react-icons/io5"
import { CgClose } from "react-icons/cg"
import { useState } from "react"
import Navbar from "./navbar"

export default function () {
    const [showSideBar, setShowSideBar] = useState(false)

    return (
        <div className="transition-all ease-in-out duration-500">
            <IoMenuOutline
                className="md:hidden cursor-pointer"
                size={40}
                onClick={() => setShowSideBar(true)}
            />
            <aside
                className={
                    "absolute left-0 top-0 z-20 bg-light dark:bg-dark h-screen w-screen p-4 transition-all ease-in-out duration-500" +
                    " " +
                    (!showSideBar ? "-translate-x-full" : "")
                }
            >
                <div className="flex justify-between">
                    <p></p>
                    <CgClose
                        className="cursor-pointer"
                        size={35}
                        onClick={() => setShowSideBar(false)}
                    />
                </div>
                <Navbar onClick={() => setShowSideBar(false)} />
            </aside>
        </div>
    )
}
