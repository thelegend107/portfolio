import { ComponentProps, ReactNode } from "react"

type LinkButton = ComponentProps<"a"> & {
    children?: ReactNode
}

export default function LinkButton({ href, children }: LinkButton) {
    return (
        <a
            className="flex gap-2 p-1.5 justify-center mt-auto items-center bg-light dark:bg-dark border border-neutral-400 dark:border-neutral-800 hover:bg-primary dark:hover:bg-primary hover:border-primary dark:hover:border-primary hover:text-white hover:dark:text-black rounded-lg"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
}
