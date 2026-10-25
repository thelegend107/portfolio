import { createClient } from "@/utils/supabase/server"
import { IconDownload, IconExternal } from "@/components/icons/InkIcon"
import gravatarProfilePic from "@/utils/gravatarProfilePic"
import Image from "next/image"
import LinkButton from "../linkButton"
import type AboutMeDb from "@/types/aboutMe"
import { fallbackAboutMe } from "@/data/fallbacks"

export default async function () {
    let aboutMeData: AboutMeDb[] = fallbackAboutMe
    try {
        const supabase = await createClient()
        const { data, error } = await supabase
            .schema("portfolio")
            .from("aboutMe")
            .select()
            .order("displayOrder", { ascending: true })
        if (!error && data?.length) aboutMeData = data
    } catch {
        aboutMeData = fallbackAboutMe
    }

    return (
        <div className="about-panel ink-surface">
            <Image
                className="about-portrait"
                src={gravatarProfilePic("mma.ayoub@outlook.com", 500)}
                width={220}
                height={220}
                alt="Portrait of Moe Ayoub"
            />
            <div className="about-copy">
                {aboutMeData.map((a) => (
                    <p
                        key={a.id}
                        className="max-w-[62ch] leading-relaxed text-[color:var(--color-body)]"
                    >
                        {a.description}
                    </p>
                ))}
                <div className="mt-auto flex w-full flex-col gap-3 sm:flex-row">
                    <LinkButton
                        href="/moe.ayoub_resume.pdf"
                        className="w-full sm:w-auto"
                        ariaLabel="View resume PDF"
                    >
                        <IconExternal size={16} />
                        View resume
                    </LinkButton>
                    <LinkButton
                        ariaLabel="Download resume PDF"
                        href="/moe.ayoub_resume.pdf"
                        className="w-full sm:w-auto"
                        download={true}
                    >
                        <IconDownload size={16} />
                        Download resume
                    </LinkButton>
                </div>
            </div>
        </div>
    )
}
