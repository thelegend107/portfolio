import type { SVGProps } from "react"

type InkIconProps = SVGProps<SVGSVGElement> & {
    size?: number | string
}

function InkIcon({
    size = 16,
    className,
    children,
    ...rest
}: InkIconProps & { children: React.ReactNode }) {
    return (
        <svg
            aria-hidden
            viewBox="0 0 16 16"
            width={size}
            height={size}
            fill="none"
            className={className ?? "ink-icon"}
            {...rest}
        >
            {children}
        </svg>
    )
}

const stroke = {
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
}

export function IconArrowRight(props: InkIconProps) {
    return (
        <InkIcon {...props}>
            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" {...stroke} />
        </InkIcon>
    )
}

export function IconArrowUp(props: InkIconProps) {
    return (
        <InkIcon {...props}>
            <path d="M8 12.5V3.5M4.5 7 8 3.5 11.5 7" {...stroke} />
        </InkIcon>
    )
}

export function IconMenu(props: InkIconProps) {
    return (
        <InkIcon {...props}>
            <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" {...stroke} />
        </InkIcon>
    )
}

export function IconClose(props: InkIconProps) {
    return (
        <InkIcon {...props}>
            <path d="M4 4l8 8M12 4 4 12" {...stroke} />
        </InkIcon>
    )
}

export function IconSun(props: InkIconProps) {
    return (
        <InkIcon {...props}>
            <circle cx="8" cy="8" r="2.6" {...stroke} />
            <path
                d="M8 1.8v1.4M8 12.8v1.4M1.8 8h1.4M12.8 8h1.4M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1"
                {...stroke}
            />
        </InkIcon>
    )
}

export function IconMoon(props: InkIconProps) {
    return (
        <InkIcon {...props}>
            <path
                d="M12.2 9.1A4.8 4.8 0 0 1 6.9 3.8 4.7 4.7 0 1 0 12.2 9.1Z"
                {...stroke}
            />
        </InkIcon>
    )
}

export function IconExternal(props: InkIconProps) {
    return (
        <InkIcon {...props}>
            <path
                d="M6.5 3.5H3.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3M9.5 2.5h4v4M7.5 8.5l6-6"
                {...stroke}
            />
        </InkIcon>
    )
}

export function IconDownload(props: InkIconProps) {
    return (
        <InkIcon {...props}>
            <path d="M8 2.5v7M5 7l3 3 3-3M3 12.5h10" {...stroke} />
        </InkIcon>
    )
}

export function IconMail(props: InkIconProps) {
    return (
        <InkIcon {...props}>
            <path
                d="M2.5 4.2h11a.8.8 0 0 1 .8.8v6a.8.8 0 0 1-.8.8h-11a.8.8 0 0 1-.8-.8v-6a.8.8 0 0 1 .8-.8Z"
                {...stroke}
            />
            <path d="m3.2 5.2 4.8 3.4 4.8-3.4" {...stroke} />
        </InkIcon>
    )
}

export function IconGithub(props: InkIconProps) {
    return (
        <InkIcon {...props} className={props.className ?? "ink-icon"}>
            <path
                fill="currentColor"
                stroke="none"
                d="M8 1.4A6.6 6.6 0 0 0 1.4 8c0 2.9 1.9 5.4 4.5 6.3.3.05.45-.14.45-.3v-1.1c-1.84.4-2.23-.88-2.23-.88-.3-.77-.74-1-.74-1-.6-.42.05-.41.05-.41.67.05 1.02.7 1.02.7.6 1.02 1.56.73 1.94.56.06-.43.23-.73.42-.9-1.47-.17-3.02-.74-3.02-3.28 0-.72.26-1.31.68-1.77-.07-.17-.3-.86.06-1.78 0 0 .56-.18 1.82.67A6.3 6.3 0 0 1 8 4.2c.57 0 1.14.08 1.67.22 1.26-.85 1.82-.67 1.82-.67.36.92.13 1.61.06 1.78.43.46.68 1.05.68 1.77 0 2.55-1.55 3.11-3.03 3.28.24.2.45.6.45 1.21v1.79c0 .16.14.35.45.3A6.61 6.61 0 0 0 14.6 8 6.6 6.6 0 0 0 8 1.4Z"
            />
        </InkIcon>
    )
}
