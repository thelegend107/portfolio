import Link from "next/link"

export default function () {
    return (
        <div className="flex min-h-[70vh] items-center px-6 py-16">
            <div className="max-w-lg">
                <h1 className="type-title text-ink dark:text-paper">
                    Page not found
                </h1>
                <p className="mt-3 text-[color:var(--color-body)]">
                    This address does not match a page on the site.
                </p>
                <Link className="btn mt-6 inline-flex w-fit" href="/">
                    Return home
                </Link>
            </div>
        </div>
    )
}
