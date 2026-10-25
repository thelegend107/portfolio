import Image from "next/image"
import Navbar from "@/components/header/navbar"
import ThemeToggle from "@/components/header/themeToggle"
import SideBar from "./sideBar"

export default function () {
    return (
        <header className="ink-ground sticky top-0 z-20 border-b border-[color:var(--color-hairline)]">
            <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-3 py-2 md:px-6">
                <section className="flex min-w-0 items-center">
                    <Navbar className="hidden md:block" />
                    <SideBar />
                </section>
                <a
                    href="#top"
                    aria-label="Moe Ayoub, back to top"
                    className="absolute left-1/2 inline-flex -translate-x-1/2 rounded-md"
                >
                    <Image
                        alt=""
                        src="/moeAyoub_logo.png"
                        width={36}
                        height={36}
                        priority={true}
                    />
                </a>
                <ThemeToggle />
            </div>
        </header>
    )
}
