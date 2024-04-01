import "./globals.scss"
import { GeistSans } from "geist/font/sans"
import { Metadata } from "next"
import ThemeContextProvider from "@/contexts/themeContext"
import Header from "@/components/header"
import Footer from "@/components/footer"
import generateMetadata from "@/utils/generateMetadata"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = generateMetadata({
    creator: "Moe Ayoub",
    description:
        "Moe Ayoub's portfolio. Built by Moe Ayoub using Next.js, React.js, TypeScript and Tailwind. Includes projects designed and developed by Moe Ayoub along with a resume link to view or download.",
    applicationName: "portfolio",
    images: ["/og-image.webp"],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <html
                lang="en"
                className={GeistSans.className}
                suppressHydrationWarning
            >
                <SpeedInsights />
                <Analytics debug={false} />
                <body id="top" className="min-h-screen select-none">
                    <ThemeContextProvider>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </ThemeContextProvider>
                </body>
            </html>
        </>
    )
}
