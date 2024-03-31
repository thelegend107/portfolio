import { createClient } from "@/utils/supabase/server"
import { PostgrestSingleResponse } from "@supabase/supabase-js"
import type SkillSetDb from "@/types/skillSet"
import type SkillSetCategory from "@/types/skillSetCategory"

import Skill from "@/components/skillSets/skill"
import SkillCategory from "@/components/skillSets/skillCategory"
import SupabaseError from "@/components/supabaseError"

export default async function () {
    const supabase = createClient()

    const {
        data: skillSetCategories,
        error: skillSetCategoriesError,
    }: PostgrestSingleResponse<SkillSetCategory[]> = await supabase
        .schema("portfolio")
        .from("skillSetCategories")
        .select()
        .order("displayOrder")

    if (skillSetCategoriesError)
        return <SupabaseError error={skillSetCategoriesError} />

    const {
        data: skillSetData,
        error: skillSetError,
    }: PostgrestSingleResponse<SkillSetDb[]> = await supabase
        .schema("portfolio")
        .from("skillSets")
        .select()
        .order("displayOrder", { ascending: true })

    if (skillSetError) return <SupabaseError error={skillSetError} />

    return (
        <div className="flex flex-col lg:flex-row gap-2 flex-wrap">
            {skillSetCategories.map((c) => (
                <SkillCategory key={c.id} name={c.name}>
                    {skillSetData
                        .filter((s) => s.categoryId == c.id)
                        .map((s) => (
                            <Skill
                                key={s.id}
                                categoryId={s.categoryId}
                                name={s.name}
                                logoUrl={s.logoUrl}
                            ></Skill>
                        ))}
                </SkillCategory>
            ))}
        </div>
    )
}
