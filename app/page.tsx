import HeroSection from "@/components/heroSection"
import SkillSets from "@/components/skillSets"
import Projects from "@/components/projects"
import Title from "@/components/title"

export default async function Index() {
    return (
        <article className="flex flex-col max-w-7xl mx-auto gap-4 p-2">
            <section className="min-h-screen">
                <HeroSection></HeroSection>
                <SkillSets></SkillSets>
            </section>
            <section className="min-h-[82vh]">
                <Title>
                    <p>
                        Projects I've <span>designed</span> &{" "}
                        <span>developed</span>
                    </p>
                </Title>
                <Projects></Projects>
            </section>
        </article>
    )
}
