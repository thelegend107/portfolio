export default function SectionHeading({
    title,
    lede,
}: {
    title: string
    lede?: string
}) {
    return (
        <header className="mb-5 md:mb-6">
            <h2 className="type-title text-ink dark:text-paper">{title}</h2>
            {lede ? (
                <p className="section-lede mt-3 max-w-[52ch]">{lede}</p>
            ) : null}
        </header>
    )
}
