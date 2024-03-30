import { Metadata } from "next";

interface PortfolioMeta {
    title?: string,
    description: string,
    creator: string,
    applicationName: string,
    images: string[]
}

export default function (meta: PortfolioMeta): Metadata {
    if (!meta.title)
        meta.title = `${meta.creator} - ${meta.applicationName}`

    const metadata: Metadata = {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        title: meta.title,
        description: meta.description,
        applicationName: meta.applicationName,
        authors: [{ name: meta.creator, url: "https://github.com/thelegend107" }],
        keywords: "moe, ayoub, theLegend107, moeayoub, portfolio, reactjs, nextjs, typescript",
        creator: meta.creator,
        generator: "Next.js",
        publisher: "Vercel",
        robots: { follow: true, index: true },

        twitter: {
            card: 'summary_large_image',
            creator: "@theLegend107",
            images: meta.images
        },

        openGraph: {
            url: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
            siteName: meta.applicationName,
            type: "website",
            images: meta.images
        }
    }

    return metadata
}