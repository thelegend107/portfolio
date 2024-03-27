import { createClient } from "@/utils/supabase/server"
import { PostgrestSingleResponse } from "@supabase/supabase-js"
import type SkillSetDb from "@/types/skillSet"

import Skill from "./skill"
import SkillCategory from "./skillCategory"

export default async function SkillSets() {
    const supabase = createClient()

    const { data: skills, error }: PostgrestSingleResponse<SkillSetDb[]> =
        await supabase
            .schema("portfolio")
            .from("skillSets")
            .select()
            .order("id")

    if (error)
        return (
            <>
                <p className="font-semibold text-2xl">
                    Please make sure you're connected to the internet and then
                    refresh
                </p>
                <p>{error.details}</p>
            </>
        )

    let distinctCategories: string[] = []
    skills.forEach((s, i) => {
        if (!distinctCategories.includes(s.category))
            distinctCategories.push(s.category)
    })

    return (
        <div className="flex flex-col lg:flex-row gap-2 flex-wrap">
            {distinctCategories.map((c) => (
                <SkillCategory key={c} name={c}>
                    {skills
                        .filter((s) => s.category == c)
                        .sort((a, b) =>
                            a.displayOrder > b.displayOrder ? 1 : -1
                        )
                        .map((s) => (
                            <Skill
                                key={s.id}
                                category={s.category}
                                name={s.name}
                                logoUrl={s.logoUrl}
                            ></Skill>
                        ))}
                </SkillCategory>
            ))}
        </div>
    )
}
