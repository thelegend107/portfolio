import Image from "next/image"
import type ProjectDb from "@/types/project"
import { BiLinkExternal } from "react-icons/bi"
import { SiGithub } from "react-icons/si"
import LinkButton from "../linkButton"

export default function ({ project: p }: { project: ProjectDb }) {
    return (
        <div className="flex flex-col flex-[0_1_32%] bg-glass">
            <Image
                className="h-auto lg:h-52 w-auto rounded-t-lg"
                src={p.imageLink ? p.imageLink : ""}
                alt={p.name}
                height={1920}
                width={492}
            />
            <div className="flex flex-col gap-2 p-2 flex-grow font-light">
                <div>
                    <p className="font-semibold text-xl">{p.name}</p>
                    <p className="font-extralight">
                        {new Date(p.createdDate).toLocaleString()}
                    </p>
                </div>
                <p className="mb-4">{p.description}</p>
                <div className="mt-auto space-y-1">
                    <LinkButton
                        href={p.link}
                        ariaLabel={`${p.name}-website-link`}
                    >
                        {p.repoLink.includes("github") ? (
                            <BiLinkExternal size={20} />
                        ) : null}
                        <p>{p.link?.replaceAll("https://", "")}</p>
                    </LinkButton>
                    <LinkButton
                        href={p.repoLink}
                        ariaLabel={`${p.name}-repo-link`}
                    >
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
