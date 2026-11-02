import HeroBasin from "@/components/inkBasin/HeroBasin"
import SectionReveal from "@/components/inkBasin/SectionReveal"
import SkillSets from "@/components/skillSets"
import Projects from "@/components/projects"
import AboutMe from "@/components/aboutMe"
import Experience from "@/components/experience"
import SectionHeading from "@/components/sectionHeading"

export default async function Index() {
    return (
        <>
            <HeroBasin />
            <article className="mx-auto flex max-w-7xl flex-col gap-16 overflow-x-clip px-3 pb-8 pt-2 md:gap-24 md:px-6 md:pb-10 lg:gap-28">
                <SectionReveal id="experience">
                    <SectionHeading
                        title="Experience"
                        lede="AgTerra Technologies since May 2024. Raven Industries before that."
                    />
                    <Experience />
                </SectionReveal>
                <SectionReveal id="projects">
                    <SectionHeading
                        title="Selected work"
                        lede="Personal projects, designed and built end to end."
                    />
                    <Projects />
                </SectionReveal>
                <SectionReveal id="skills">
                    <SectionHeading title="Skills" />
                    <SkillSets />
                </SectionReveal>
                <SectionReveal id="about">
                    <SectionHeading title="About" />
                    <AboutMe />
                </SectionReveal>
            </article>
        </>
    )
}
