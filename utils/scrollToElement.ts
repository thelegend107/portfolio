export default function (elementId: string) {
    let element: HTMLElement | null = document.getElementById(elementId)

    if (element) {
        let top = element.offsetTop
        window.scrollTo({
            top: top - 65,
            behavior: "smooth",
        })
    }
}