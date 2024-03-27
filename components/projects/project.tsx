import type ProjectDb from "@/types/project"
import { BiLinkExternal } from "react-icons/bi"
import { SiGithub } from "react-icons/si"
import LinkButton from "../linkButton"

export default function Project({ project: p }: { project: ProjectDb }) {
    return (
        <div className="flex flex-col rounded-lg flex-[0_1_32%] bg-glass border border-neutral-400 dark:border-neutral-800">
            <img
                className="h-auto lg:h-52 w-auto rounded-t-lg"
                src={p.imageLink ? p.imageLink : ""}
                alt={p.name}
            />
            <div className="flex flex-col gap-2 p-2 flex-grow font-light">
                <div>
                    <p className="font-semibold text-xl">{p.name}</p>
                    <p className="font-thin">
                        {new Date(p.createdDate).toLocaleString()}
                    </p>
                </div>
                <p className="mb-4">{p.description}</p>
                <div className="mt-auto space-y-1">
                    <LinkButton href={p.link}>
                        {p.repoLink.includes("github") ? (
                            <BiLinkExternal size={20} />
                        ) : null}
                        <p>{p.link?.replaceAll("https://", "")}</p>
                    </LinkButton>
                    <LinkButton href={p.repoLink}>
                        {p.repoLink.includes("github") ? (
                            <SiGithub size={20} />
                        ) : null}
                        <p>See Code</p>
                    </LinkButton>
                </div>
            </div>
        </div>
    )
}
