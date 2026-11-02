export const SITE_URL =
    process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ||
    "https://portfolio.thelegend107.com"

export function absoluteUrl(path = "/"): string {
    if (/^https?:\/\//i.test(path)) return path
    const normalized = path.startsWith("/") ? path : `/${path}`
    return `${SITE_URL}${normalized === "/" ? "" : normalized}`
}
