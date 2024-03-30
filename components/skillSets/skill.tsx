import Image from "next/image"
import { GrMysql } from "react-icons/gr"
import { SiMicrosoftsqlserver } from "react-icons/si"

export default function ({
    category,
    name,
    logoUrl,
}: {
    category: string
    name: string
    logoUrl: string
}) {
    return (
        <div className="flex flex-col justify-center items-center pt-2 px-4 rounded-lg bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.06)] gap-1">
            <div className="flex items-center size-8">
                {name.toLowerCase().replaceAll(" ", "") == "sqlserver" ? (
                    <SiMicrosoftsqlserver size={32} />
                ) : name.toLowerCase().replaceAll(" ", "") == "mysql" ? (
                    <GrMysql size={32} />
                ) : (
                    <Image
                        src={logoUrl}
                        height={32}
                        width={32}
                        alt={category + "-" + name}
                    />
                )}
            </div>
            <p className="font-light">{name}</p>
        </div>
    )
}
