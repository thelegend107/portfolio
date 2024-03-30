import { ComponentProps, ReactNode } from "react"

type LinkButton = {
    href?: string
    className?: string
    ariaLabel?: string
    children?: ReactNode
    download?: string | boolean
}

export default function ({
    href,
    className,
    ariaLabel,
    children,
    download,
}: LinkButton) {
    return (
        <a
            aria-label={ariaLabel || "link-button"}
            className={"btn " + className}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            download={download}
        >
            {children}
        </a>
    )
}
