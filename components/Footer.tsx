import { SiGithub, SiLinkedin } from "react-icons/si"
export default function Footer() {
    return (
        <footer className="flex justify-end gap-2 p-2 text-xl mt-auto z-10 select-none">
            <div className="flex flex-col gap-1 p-4">
                <p>Moe Ayoub</p>
                <ul className="flex gap-2">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/mhayoub/"
                            target="_blank"
                        >
                            <SiLinkedin />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/thelegend107"
                            target="_blank"
                        >
                            <SiGithub />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
