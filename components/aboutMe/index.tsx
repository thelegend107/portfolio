import { createClient } from "@/utils/supabase/server"
import { BiDownload, BiLinkExternal } from "react-icons/bi"
import { PostgrestSingleResponse } from "@supabase/supabase-js"
import gravatarProfilePic from "@/utils/gravatarProfilePic"
import Image from "next/image"
import LinkButton from "../linkButton"
import type AboutMeDb from "@/types/aboutMe"

export default async function () {
    const supabase = createClient()
    const { data: aboutMeData, error }: PostgrestSingleResponse<AboutMeDb[]> =
        await supabase.schema("portfolio").from("aboutMe").select()

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
        <div className="flex flex-col md:flex-row bg-glass font-light md:divide-x-4 md:divide-neutral-400 md:dark:divide-neutral-800">
            <Image
                className="border-4 border-neutral-400 dark:border-neutral-800 rounded-full mx-auto m-4 md:m-0 md:border-0 md:rounded-none md:rounded-l-lg md:mx-0 md:p-0"
                src={gravatarProfilePic("mma.ayoub@outlook.com", 500)}
                width={250}
                height={250}
                alt="gravatar-pic"
            />
            <div className="flex flex-col p-2 items-center justify-center gap-4 md:text-lg">
                {aboutMeData.map((a) => (
                    <p key={a.id}>{a.description}</p>
                ))}
                <div className="flex flex-col sm:flex-row w-full gap-1 mt-auto">
                    <LinkButton href="/moe.ayoub_resume.pdf" className="w-full">
                        <BiLinkExternal size={20} />
                        View Resume
                    </LinkButton>
                    <LinkButton
                        href="/moe.ayoub_resume.pdf"
                        className="w-full"
                        download={true}
                    >
                        <BiDownload size={20} />
                        Download Resume
                    </LinkButton>
                </div>
            </div>
        </div>
    )
}
