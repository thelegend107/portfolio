import NavItem from "./navItem"

export default function ({
    onClick,
    className,
}: {
    onClick?: () => void
    className?: string
}) {
    return (
        <nav className={className}>
            <menu className="flex flex-col md:flex-row text-xl font-semibold gap-4">
                <NavItem onClick={onClick} name="Intro" elementId="top" />
                <NavItem onClick={onClick} name="Projects" />
                <NavItem onClick={onClick} name="About" />
            </menu>
        </nav>
    )
}
