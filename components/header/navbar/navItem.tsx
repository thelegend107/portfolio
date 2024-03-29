"use client"

export default function ({
    name,
    elementId,
}: {
    name: string
    elementId?: string
}) {
    function scrollToElement(elementId: string) {
        let element: HTMLElement | null = document.getElementById(elementId)

        if (element) {
            let top = element.offsetTop
            window.scrollTo({
                top: top - 65,
                behavior: "smooth",
            })
        }
    }

    return (
        <li>
            <button
                className="hover:text-primary transition-all ease-in-out duration-500"
                onClick={() =>
                    scrollToElement(
                        elementId || name.toLowerCase().replaceAll(" ", "")
                    )
                }
            >
                {name}
            </button>
        </li>
    )
}
