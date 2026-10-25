import NavItem from "./navItem"

export default function ({
    onClick,
    className,
}: {
    onClick?: () => void
    className?: string
}) {
    return (
        <nav className={className} aria-label="Primary">
            <menu className="flex flex-col gap-1 font-display text-xs font-medium uppercase tracking-[0.06em] text-[color:var(--color-body)] md:flex-row md:items-center md:gap-3 lg:gap-5 lg:tracking-[0.1em]">
                <NavItem onClick={onClick} name="Intro" elementId="top" />
                <NavItem onClick={onClick} name="Experience" />
                <NavItem onClick={onClick} name="Projects" />
                <NavItem onClick={onClick} name="Skills" />
                <NavItem onClick={onClick} name="About" />
            </menu>
        </nav>
    )
}
