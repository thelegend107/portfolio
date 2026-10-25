import ScrollToTop from "@/components/scrollToTop"
import {
    SiGithub,
    SiLinkedin,
    SiNextdotjs,
    SiPostgresql,
    SiReact,
    SiSalesforce,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si"
import { IconMail } from "@/components/icons/InkIcon"

export default function () {
    return (
        <footer className="relative mt-8 flex flex-col border-t border-[color:var(--color-hairline)] bg-transparent text-sm text-[color:var(--color-muted)] md:mt-10">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <ScrollToTop />
            </div>
            <section className="mx-auto mt-1 flex w-full max-w-7xl flex-col justify-between gap-3 px-3 pb-4 pt-5 md:flex-row md:items-end md:px-6 md:pb-4 md:pt-5">
                <div className="flex max-w-xl flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                        <p className="text-sm text-[color:var(--color-muted)]">
                            Built with
                        </p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Vercel"
                            href="https://vercel.com"
                            className="ink-brand-link"
                        >
                            <SiVercel size={16} aria-hidden />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Next.js"
                            href="https://nextjs.org"
                            className="ink-brand-link"
                        >
                            <SiNextdotjs size={16} aria-hidden />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="React"
                            href="https://react.dev"
                            className="ink-brand-link"
                        >
                            <SiReact size={16} aria-hidden />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Tailwind CSS"
                            href="https://tailwindcss.com"
                            className="ink-brand-link"
                        >
                            <SiTailwindcss size={16} aria-hidden />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TypeScript"
                            href="https://typescriptlang.org"
                            className="ink-brand-link"
                        >
                            <SiTypescript size={16} aria-hidden />
                        </a>
                    </div>
                    <p className="flex flex-wrap items-center gap-2 leading-relaxed">
                        <span className="ink-inline-mark">
                            <SiPostgresql size={16} aria-hidden />
                            Postgres
                        </span>
                        on
                        <span className="ink-inline-mark">
                            <SiSupabase size={16} aria-hidden />
                            Supabase
                        </span>
                    </p>
                </div>
                <div className="flex flex-col gap-2 md:items-end">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Copyright Moe Ayoub"
                        href="https://www.eulatemplate.com/live.php?token=7DlkmycJf9FkjqotsXL4gYNIhu9iw5e7"
                        className="text-sm text-[color:var(--color-faint)]"
                    >
                        © {new Date().getFullYear()} Moe Ayoub
                    </a>
                    <ul className="flex items-center gap-1">
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Moe Ayoub's LinkedIn Profile"
                                href="https://www.linkedin.com/in/mhayoub/"
                                className="ink-brand-link"
                            >
                                <SiLinkedin size={16} aria-hidden />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="Moe Ayoub's personal email"
                                href="mailto:mma.ayoub@outlook.com"
                                className="ink-brand-link"
                            >
                                <IconMail size={16} />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Moe Ayoub's GitHub Project link"
                                href="https://github.com/thelegend107/portfolio"
                                className="ink-brand-link"
                            >
                                <SiGithub size={16} aria-hidden />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Moe Ayoub's Salesforce Trailblazer profile"
                                href="https://www.salesforce.com/trailblazer/thelegend107"
                                className="ink-brand-link"
                            >
                                <SiSalesforce size={16} aria-hidden />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
