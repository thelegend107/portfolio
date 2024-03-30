import { ComponentProps, ReactNode } from "react"

type LinkButton = {
    href?: string
    className?: string
    children?: ReactNode
    download?: string | boolean
}

export default function ({ href, className, children, download }: LinkButton) {
    return (
        <a
            className={
                "flex gap-2 p-1.5 justify-center mt-auto items-center bg-light dark:bg-dark border border-neutral-400 dark:border-neutral-800 hover:bg-primary dark:hover:bg-primary hover:border-primary dark:hover:border-primary hover:text-white hover:dark:text-black rounded-lg" +
                " " +
                className
            }
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            download={download}
        >
            {children}
        </a>
    )
}
