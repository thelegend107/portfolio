import { createClient } from "@/utils/supabase/server"
import type ProjectDb from "@/types/project"
import { fallbackProjects } from "@/data/fallbacks"
import Project from "@/components/projects/project"

export default async function () {
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

    return (
        <div className="flex flex-col gap-4 md:gap-5">
            {projects.map((p) => (
                <Project key={p.id} project={p} />
            ))}
        </div>
    )
}
