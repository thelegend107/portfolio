import Image from "next/image"
import ThemeToggle from "@/components/themeToggle"

export default function Header() {
    return (
        <header className="p-2 flex justify-between items-center">
            <Image
                alt="Moe Ayoub's Logo"
                src="/moeayoub_logo.png"
                width={48}
                height={48}
                priority={true}
            />
            <ThemeToggle />
        </header>
    )
}
