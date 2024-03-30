import Image from "next/image"
import { IoMenuOutline } from "react-icons/io5"
import Navbar from "@/components/header/navbar"
import ThemeToggle from "@/components/header/themeToggle"

export default function () {
    return (
        <header className="grid grid-cols-3 p-2 sticky top-0 z-10 bg-light dark:bg-dark border-b border-dark dark:border-light">
            <section className="flex items-center size-full">
                <Navbar className="hidden md:block" />
                <IoMenuOutline className="md:hidden" size={40} />
            </section>
            <section className="flex items-center justify-center size-full">
                <Image
                    alt="Moe Ayoub's Logo"
                    src="/moeayoub_logo.png"
                    width={48}
                    height={48}
                    priority={true}
                />
            </section>
            <section className="flex items-center justify-end size-full">
                <ThemeToggle />
            </section>
        </header>
    )
}
