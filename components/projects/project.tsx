import Image from "next/image"
import type ProjectDb from "@/types/project"
import LinkButton from "@/components/linkButton"
import { IconExternal, IconGithub } from "@/components/icons/InkIcon"

function hostLabel(link: string) {
    return link.replace(/^https?:\/\//, "").replace(/\/$/, "")
}

export default function ({ project: p }: { project: ProjectDb }) {
    const created = new Date(p.createdDate)
    const dateLabel = Number.isNaN(created.getTime())
        ? ""
        : created.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
          })

    return (
        <article className="project-piece ink-surface page-split">
            <div className="project-shot">
                <Image
                    src={p.imageLink ? p.imageLink : "/og-image.webp"}
                    alt={`Screenshot of ${p.name}`}
                    fill
                    sizes="(min-width: 1100px) 384px, (min-width: 768px) 296px, 100vw"
                    className="object-cover"
                />
            </div>
            <div className="project-copy">
                <div className="project-heading">
                    <h3 className="type-lead font-bold text-ink dark:text-paper">
                        {p.name}
                    </h3>
                    {dateLabel ? (
                        <p className="project-date">{dateLabel}</p>
                    ) : null}
                </div>
                <p className="project-desc">{p.description}</p>
                <div className="project-actions">
                    {p.link ? (
                        <LinkButton
                            href={p.link}
                            className="w-full sm:w-auto"
                            ariaLabel={`Open ${p.name} website`}
                        >
                            <IconExternal size={16} />
                            {hostLabel(p.link)}
                        </LinkButton>
                    ) : null}
                    <LinkButton
                        href={p.repoLink}
                        className="w-full sm:w-auto"
                        ariaLabel={`Open ${p.name} source repository`}
                    >
                        {p.repoLink.includes("github") ? (
                            <IconGithub size={16} />
                        ) : null}
                        Code
                    </LinkButton>
                </div>
            </div>
        </article>
    )
}
