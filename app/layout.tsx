import "./globals.scss"
import { DM_Sans, Outfit } from "next/font/google"
import { Metadata } from "next"
import ThemeContextProvider from "@/contexts/themeContext"
import Header from "@/components/header"
import Footer from "@/components/footer"
import generateMetadata from "@/utils/generateMetadata"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const display = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-display",
    display: "swap",
})

const sans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sans",
    display: "swap",
})

export const metadata: Metadata = generateMetadata({
    creator: "Moe Ayoub",
    description:
        "Portfolio of Moe Ayoub, Full-Stack Engineer. AgTerra work leads; Raven systems experience stays visible. Selected projects, resume, and contact.",
    applicationName: "portfolio",
    images: ["/og-image.webp"],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={`${display.variable} ${sans.variable} font-sans`}
            suppressHydrationWarning
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.theme;var d=t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';if(!t)localStorage.theme=d?'dark':'light'}catch(e){}})()`,
                    }}
                />
            </head>
            <body id="top" className="min-h-screen">
                <a className="skip-link" href="#content">
                    Skip to content
                </a>
                <SpeedInsights />
                <Analytics debug={false} />
                <ThemeContextProvider>
                    <Header />
                    <main id="content">{children}</main>
                    <Footer />
                </ThemeContextProvider>
            </body>
        </html>
    )
}
