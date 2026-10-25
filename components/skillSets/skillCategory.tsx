import React from "react"

export default function ({
    name,
    children,
}: {
    name: string
    children?: React.ReactNode
}) {
    return (
        <section className="skill-category page-split">
            <h3 className="skill-category-name">{name}</h3>
            <ul className="skill-grid">{children}</ul>
        </section>
    )
}
