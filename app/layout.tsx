import "./globals.scss"
import { GeistSans } from "geist/font/sans"
import Header from "@/components/header"
import Footer from "@/components/footer"

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000"

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "Moe Ayoub - Portfolio",
    description: "The fastest way to build apps with Next.js",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={GeistSans.className}>
            <body className="flex flex-col min-h-screen select-none">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
