import { createClient } from "@/utils/supabase/server"
import type SkillSetDb from "@/types/skillSet"
import { fallbackSkills, publicSkillGroups } from "@/data/fallbacks"

import Skill from "@/components/skillSets/skill"
import SkillCategory from "@/components/skillSets/skillCategory"

export default async function () {
    let skillSetData: SkillSetDb[] = fallbackSkills

    try {
        const supabase = await createClient()
        const skills = await supabase
            .schema("portfolio")
            .from("skillSets")
            .select()
        if (!skills.error && skills.data?.length) skillSetData = skills.data
    } catch {
        skillSetData = fallbackSkills
    }

    const byName = new Map(skillSetData.map((skill) => [skill.name, skill]))
    const curated = new Map(fallbackSkills.map((skill) => [skill.name, skill]))
    for (const skill of fallbackSkills) {
        if (!byName.has(skill.name)) byName.set(skill.name, skill)
    }

    return (
        <div className="flex flex-col">
            {publicSkillGroups.map((group) => (
                <SkillCategory key={group.name} name={group.name}>
                    {group.names.map((name) => {
                        const skill = curated.get(name) ?? byName.get(name)
                        if (!skill) return null
                        return (
                            <Skill
                                key={name}
                                name={skill.name}
                                logoUrl={skill.logoUrl}
                            />
                        )
                    })}
                </SkillCategory>
            ))}
        </div>
    )
}
