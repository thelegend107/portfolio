import { Metadata } from "next"

interface PortfolioMeta {
    title?: string
    description: string
    creator: string
    applicationName: string
    images: string[]
}

export default function (meta: PortfolioMeta): Metadata {
    if (!meta.title) meta.title = `${meta.creator} - ${meta.applicationName}`

    const base =
        process.env.NEXT_PUBLIC_BASE_URL || "https://moeayoub.com"

    const metadata: Metadata = {
        metadataBase: new URL(base),
        title: meta.title,
        description: meta.description,
        applicationName: meta.applicationName,
        authors: [
            { name: meta.creator, url: "https://github.com/thelegend107" },
        ],
        keywords:
            "moe, ayoub, theLegend107, moeayoub, portfolio, reactjs, nextjs, typescript, full-stack engineer, AgTerra",
        creator: meta.creator,
        generator: "Next.js",
        publisher: "Vercel",
        robots: { follow: true, index: true },

        twitter: {
            card: "summary_large_image",
            creator: "@theLegend107",
            images: meta.images,
        },

        openGraph: {
            url: new URL(base),
            siteName: meta.applicationName,
            type: "website",
            images: meta.images,
        },
    }

    return metadata
}
