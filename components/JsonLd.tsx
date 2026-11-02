import { SITE_URL, absoluteUrl } from "@/utils/siteUrl"

function jsonLd(data: unknown) {
    return JSON.stringify(data)
        .replace(/</g, "\\u003c")
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029")
}

export default function JsonLd() {
    const person = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Moe Ayoub",
        url: SITE_URL,
        image: absoluteUrl("/og-image.webp"),
        jobTitle: "Full-Stack Engineer",
        worksFor: {
            "@type": "Organization",
            name: "AgTerra Technologies",
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Sheridan",
            addressRegion: "WY",
            addressCountry: "US",
        },
        sameAs: [
            "https://www.linkedin.com/in/mhayoub/",
            "https://github.com/thelegend107",
            "https://www.salesforce.com/trailblazer/thelegend107",
        ],
        email: "mailto:mma.ayoub@outlook.com",
        description:
            "Full-Stack Engineer at AgTerra Technologies. Builds MapItFast on iOS, offline field mapping in SwiftUI, and React/.NET admin tools. Prior systems integration at Raven Industries.",
    }

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Moe Ayoub Portfolio",
        url: SITE_URL,
        description:
            "Portfolio of Moe Ayoub, Full-Stack Engineer. AgTerra work leads; Raven systems experience stays visible.",
        inLanguage: "en-US",
        publisher: {
            "@type": "Person",
            name: "Moe Ayoub",
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(person) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(website) }}
            />
        </>
    )
}
