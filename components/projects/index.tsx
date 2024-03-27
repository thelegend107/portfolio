import type ProjectDb from "@/types/project"
import { createClient } from "@/utils/supabase/server"
import { PostgrestSingleResponse } from "@supabase/supabase-js"
import Project from "./project"

export default async function Projects() {
    const supabase = createClient()
    const { data: projects, error }: PostgrestSingleResponse<ProjectDb[]> =
        await supabase
            .schema("portfolio")
            .from("projects")
            .select()
            .order("id", { ascending: false })

    if (error)
        return (
            <div>
                <p className="font-semibold text-2xl">
                    Please make sure you're connected to the internet and then
                    refresh
                </p>
                <p>{error.details}</p>
            </div>
        )

    return (
        <div className="flex flex-col lg:flex-row gap-2 flex-wrap">
            {projects.map((p) => (
                <Project key={p.id} project={p}></Project>
            ))}
        </div>
    )
}
