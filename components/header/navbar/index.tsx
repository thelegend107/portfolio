import NavItem from "./navItem"

export default function () {
    return (
        <nav>
            <menu className="flex text-xl font-semibold gap-4">
                <NavItem name="Intro" elementId="top" />
                <NavItem name="Projects" />
                <NavItem name="About" />
                <NavItem name="Resume" />
            </menu>
        </nav>
    )
}
