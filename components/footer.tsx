import ScrollToTop from "@/components/scrollToTop"
import { BiLogoPostgresql } from "react-icons/bi"
import {
    SiGithub,
    SiLinkedin,
    SiMicrosoftoutlook,
    SiNextdotjs,
    SiReact,
    SiSalesforce,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si"
export default function () {
    return (
        <footer className="flex flex-col bg-light dark:bg-dark text-lg mt-10 border-t border-dark dark:border-light">
            <section className="absolute flex w-full justify-center -mt-4 p- animate-bounce">
                <ScrollToTop />
            </section>
            <section className="flex flex-col md:flex-row gap-4 justify-between mt-5 md:mt-0 p-4">
                <div className="flex flex-col gap-4 md:gap-0.5">
                    <div className="flex gap-1.5 items-center font-light flex-wrap">
                        <p>Made with: </p>
                        <a
                            target="_blank"
                            aria-label="Vercel's webpage link"
                            href="https://vercel.com"
                        >
                            <SiVercel size={20} />
                        </a>
                        <a
                            target="_blank"
                            aria-label="Next's webpage link"
                            href="https://nextjs.org"
                        >
                            <SiNextdotjs size={20} />
                        </a>
                        <a
                            target="_blank"
                            aria-label="React's webpage link"
                            href="https://react.dev"
                        >
                            <SiReact size={20} />
                        </a>
                        <a
                            target="_blank"
                            aria-label="Tailwind's webpage link"
                            href="https://tailwindcss.com"
                        >
                            <SiTailwindcss size={20} />
                        </a>
                        <a
                            target="_blank"
                            aria-label="TypeScript's webpage link"
                            href="https://typescriptlang.org"
                        >
                            <SiTypescript size={20} />
                        </a>
                    </div>
                    <p className="flex gap-1 items-center flex-wrap">
                        This project uses a <BiLogoPostgresql size={20} />
                        Postgres database hosted on <SiSupabase size={20} />
                        Supabase
                    </p>
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <a
                        target="_blank"
                        aria-label="copyrights/EULA"
                        href="https://www.eulatemplate.com/live.php?token=7DlkmycJf9FkjqotsXL4gYNIhu9iw5e7"
                    >
                        <small className="text-base">
                            &copy; {new Date().getFullYear()}, Moe Ayoub. All
                            Rights Reserved.
                        </small>
                    </a>
                    <ul className="flex gap-2 items-center">
                        <li>
                            <a
                                target="_blank"
                                aria-label="Moe Ayoub's LinkedIn Profile"
                                href="https://www.linkedin.com/in/mhayoub/"
                            >
                                <SiLinkedin size={20} />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="Moe Ayoub's personal email"
                                href="mailto:mma.ayoub@outlook.com"
                            >
                                <SiMicrosoftoutlook size={20} />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                aria-label="Moe Ayoub's GitHub Project link"
                                href="https://github.com/thelegend107/portfolio"
                            >
                                <SiGithub size={20} />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                aria-label="Moe Ayoub's Salesforce Trailblazer profile"
                                href="https://www.salesforce.com/trailblazer/thelegend107"
                            >
                                <SiSalesforce size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
