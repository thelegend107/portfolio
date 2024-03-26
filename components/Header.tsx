import Image from "next/image"
import ThemeToggle from "@/components/ThemeToggle"

export default function Header() {
    return (
        <header className="p-2 flex justify-between items-center z-10 select-none">
            <Image
                alt="Moe Ayoub's Logo"
                src="/favicon.ico"
                width={48}
                height={48}
            />
            <ThemeToggle />
        </header>
    )
}
