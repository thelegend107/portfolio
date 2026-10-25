import HeroBasin from "@/components/inkBasin/HeroBasin"
import SkillSets from "@/components/skillSets"
import Projects from "@/components/projects"
import AboutMe from "@/components/aboutMe"
import Experience from "@/components/experience"
import SectionHeading from "@/components/sectionHeading"

export default async function Index() {
    return (
        <article className="mx-auto flex max-w-7xl flex-col gap-16 overflow-x-clip px-3 pb-8 pt-2 md:gap-24 md:px-6 md:pb-10 lg:gap-28">
            <HeroBasin />
            <section id="experience" className="scroll-mt-24">
                <SectionHeading
                    title="Experience"
                    lede="AgTerra Technologies since May 2024. Raven Industries before that."
                />
                <Experience />
            </section>
            <section id="projects" className="scroll-mt-24">
                <SectionHeading
                    title="Selected work"
                    lede="Personal projects, designed and built end to end."
                />
                <Projects />
            </section>
            <section id="skills" className="scroll-mt-24">
                <SectionHeading title="Skills" />
                <SkillSets />
            </section>
            <section id="about" className="scroll-mt-24">
                <SectionHeading title="About" />
                <AboutMe />
            </section>
        </article>
    )
}
