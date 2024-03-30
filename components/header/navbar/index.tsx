import { ComponentProps, ComponentPropsWithoutRef } from "react"
import NavItem from "./navItem"

export default function ({ className }: { className?: string }) {
    return (
        <nav className={className}>
            <menu className="flex text-xl font-semibold gap-4">
                <NavItem name="Intro" elementId="top" />
                <NavItem name="Projects" />
                <NavItem name="About" />
            </menu>
        </nav>
    )
}
