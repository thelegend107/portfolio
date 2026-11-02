import { Metadata } from "next"
import { SITE_URL, absoluteUrl } from "@/utils/siteUrl"

interface PortfolioMeta {
    title?: string
    description: string
    creator: string
    applicationName: string
    images: string[]
}

export default function (meta: PortfolioMeta): Metadata {
    if (!meta.title) meta.title = `${meta.creator} — Full-Stack Engineer`

    const imageList = meta.images.map((src) => ({
        url: absoluteUrl(src),
        width: 1200,
        height: 630,
        alt: `${meta.creator} portfolio`,
    }))

    const metadata: Metadata = {
        metadataBase: new URL(SITE_URL),
        title: {
            default: meta.title,
            template: `%s · ${meta.creator}`,
        },
        description: meta.description,
        applicationName: meta.applicationName,
        authors: [
            { name: meta.creator, url: "https://github.com/thelegend107" },
        ],
        keywords: [
            "Moe Ayoub",
            "Full-Stack Engineer",
            "AgTerra",
            "Raven Industries",
            "React",
            ".NET",
            "MapItFast",
            "TypeScript",
            "Next.js",
            "portfolio",
            "Sheridan Wyoming",
            "theLegend107",
        ],
        creator: meta.creator,
        publisher: meta.creator,
        category: "technology",
        alternates: {
            canonical: "/",
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },
        twitter: {
            card: "summary_large_image",
            creator: "@theLegend107",
            title: meta.title,
            description: meta.description,
            images: imageList.map((image) => image.url),
        },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: SITE_URL,
            siteName: `${meta.creator} Portfolio`,
            locale: "en_US",
            type: "website",
            images: imageList,
        },
    }

    return metadata
}
