import { navigate } from "@/utils/navigate"

export default function (elementId: string) {
    const element = document.getElementById(elementId)

    if (!element) {
        navigate("/")
        return
    }

    const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
    const top = element.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({
        top,
        behavior: reduce ? "auto" : "smooth",
    })
}