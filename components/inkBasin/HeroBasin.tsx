import InkField from "@/components/inkBasin/InkField"
import InkCta from "@/components/inkBasin/InkCta"
import { IconExternal } from "@/components/icons/InkIcon"
import { createClient } from "@/utils/supabase/server"
import { fallbackProjects } from "@/data/fallbacks"
import type ProjectDb from "@/types/project"

export default async function HeroBasin() {
    let projects: ProjectDb[] = fallbackProjects
    try {
        const supabase = await createClient()
        const { data, error } = await supabase
            .schema("portfolio")
            .from("projects")
            .select()
            .order("id", { ascending: false })
        if (!error && data?.length) projects = data
    } catch {
        projects = fallbackProjects
    }

    const dyes = projects.slice(0, 3).map((p) => ({
        name: p.name,
        href: p.link || "#projects",
    }))

    return (
        <section
            id="intro"
            className="grid min-h-[calc(100svh-4.5rem)] grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(17.5rem,34%)_1fr] lg:gap-8 xl:gap-12"
        >
            <aside className="hero-margin flex flex-col justify-center py-8 lg:pb-28 lg:pt-6">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <h1 className="type-display text-ink dark:text-paper">
                                Moe Ayoub
                            </h1>
                            <p className="type-lead font-semibold text-accent">
                                Full-Stack Engineer
                            </p>
                        </div>
                        <p className="hero-support max-w-[36ch] text-[1.0625rem] leading-[1.6]">
                            I build the field software and the admin tools
                            behind it.{" "}
                            <span className="font-semibold text-depth">
                                AgTerra
                            </span>{" "}
                            now: React, .NET, and MapItFast on iOS. Raven&apos;s
                            ERP, Salesforce, and Azure integration is what made
                            that possible.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <InkCta href="mailto:mma.ayoub@outlook.com">
                            Email me
                        </InkCta>
                        <a
                            href="/moe.ayoub_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View resume"
                            className="ink-cta-secondary inline-flex w-fit items-center gap-2 rounded-md px-6 py-3.5 font-display text-sm font-semibold tracking-[-0.01em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Resume
                            <IconExternal
                                size={14}
                                className="ink-icon shrink-0"
                            />
                        </a>
                    </div>
                </div>
            </aside>
            <div className="min-h-[min(68vw,420px)] lg:min-h-0 lg:py-2">
                <InkField dyes={dyes} />
            </div>
        </section>
    )
}
