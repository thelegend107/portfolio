import Link from "next/link"

export default function () {
    return (
        <div className="flex min-h-screen">
            <div className="p-2 sm:px-12 sm:py-4 bg-glass m-auto">
                <p className="text-5xl lg:text-6xl">404: Not found</p>
                <p>Looks like this page does not exist</p>
                <Link className="btn mt-5" href="/">
                    Return Home
                </Link>
            </div>
        </div>
    )
}
