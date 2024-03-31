import { createClient } from "@/utils/supabase/server"
import { PostgrestSingleResponse } from "@supabase/supabase-js"
import type ProjectDb from "@/types/project"

import SupabaseError from "@/components/supabaseError"
import Project from "@/components/projects/project"

export default async function () {
    const supabase = createClient()
    const { data: projects, error }: PostgrestSingleResponse<ProjectDb[]> =
        await supabase
            .schema("portfolio")
            .from("projects")
            .select()
            .order("id", { ascending: false })

    if (error) return <SupabaseError error={error} />

    return (
        <div className="flex flex-col lg:flex-row gap-2 flex-wrap">
            {projects.map((p) => (
                <Project key={p.id} project={p}></Project>
            ))}
        </div>
    )
}
