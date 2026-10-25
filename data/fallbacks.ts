import type AboutMeDb from "@/types/aboutMe"
import type ProjectDb from "@/types/project"
import type SkillSetCategory from "@/types/skillSetCategory"
import type SkillSetDb from "@/types/skillSet"

const shot = (file: string) =>
    `https://eydbdcpzzsmvggpnjhjm.supabase.co/storage/v1/object/public/portfolio/${encodeURIComponent(file)}`

export const fallbackProjects: ProjectDb[] = [
    {
        id: 3,
        name: "moviesApp",
        description:
            "Browse and search films. Built with Nuxt, TypeScript, and Tailwind.",
        repoLink: "https://github.com/thelegend107/moviesApp",
        link: "https://moviesapp.thelegend107.com",
        imageLink: shot("Screenshot 2024-03-05 155129.png"),
        createdDate: new Date("2024-12-10T10:10:00-06:00"),
    },
    {
        id: 2,
        name: "fakeStore",
        description:
            "Product catalog and cart. Built with Vue, SASS, Azure, and Supabase.",
        repoLink: "https://github.com/thelegend107/fakeStore",
        link: "https://fakestore.thelegend107.com",
        imageLink: shot("Screenshot 2024-02-02 101908.png"),
        createdDate: new Date("2023-12-30T01:51:00-06:00"),
    },
    {
        id: 1,
        name: "resumeWebsite",
        description:
            "Earlier personal site. The predecessor to this portfolio.",
        repoLink: "https://github.com/thelegend107/ResumeWebsite",
        link: "https://resume.thelegend107.com",
        imageLink: shot("Screenshot 2024-03-25 191834.png"),
        createdDate: new Date("2023-11-04T03:48:00-05:00"),
    },
]

export const fallbackAboutMe: AboutMeDb[] = [
    {
        id: 1,
        description:
            "Full-Stack Engineer in Sheridan, Wyoming. Currently building field and admin software at AgTerra Technologies: React and .NET admin surfaces, plus MapItFast iOS.",
        displayOrder: 1,
    },
    {
        id: 2,
        description:
            "Previously systems integration at Raven Industries: ERP, Salesforce, Azure, and Boomi work that made the current role possible.",
        displayOrder: 2,
    },
]

export const fallbackSkillCategories: SkillSetCategory[] = [
    { id: 1, name: "Languages", displayOrder: 1 },
    { id: 2, name: "Frameworks", displayOrder: 2 },
    { id: 3, name: "Cloud & Data", displayOrder: 3 },
    { id: 4, name: "Platforms", displayOrder: 4 },
    { id: 5, name: "Tools", displayOrder: 5 },
]

export const publicSkillGroups: { name: string; names: string[] }[] = [
    {
        name: "Languages",
        names: [
            "C#",
            "TypeScript",
            "Swift",
            "JavaScript",
            "HTML",
            "CSS",
        ],
    },
    {
        name: "Frameworks",
        names: [
            "React",
            ".NET",
            "SwiftUI",
            "ASP.NET",
            "jQuery",
            "Blazor",
            "Tailwind CSS",
            "SASS",
            "Next.js",
            "Vue.js",
            "Nuxt.js",
            "Node.js",
        ],
    },
    {
        name: "Cloud & Data",
        names: [
            "SQL Server",
            "Azure",
            "Postgres",
            "Supabase",
            "Salesforce",
            "Oracle SQL",
            "Boomi",
        ],
    },
    {
        name: "Platforms",
        names: ["Azure DevOps", "Linux", "Windows Server"],
    },
    {
        name: "Tools",
        names: ["Git", "Visual Studio", "VS Code"],
    },
]

const si = (slug: string) =>
    `https://cdn.jsdelivr.net/npm/simple-icons@11/icons/${slug}.svg`

export const fallbackSkills: SkillSetDb[] = [
    { id: 2, name: "C#", categoryId: 1, logoUrl: si("csharp"), displayOrder: 1 },
    { id: 1, name: "TypeScript", categoryId: 1, logoUrl: si("typescript"), displayOrder: 2 },
    { id: 3, name: "Swift", categoryId: 1, logoUrl: si("swift"), displayOrder: 3 },
    { id: 4, name: "JavaScript", categoryId: 1, logoUrl: si("javascript"), displayOrder: 4 },
    { id: 19, name: "HTML", categoryId: 1, logoUrl: si("html5"), displayOrder: 5 },
    { id: 20, name: "CSS", categoryId: 1, logoUrl: si("css3"), displayOrder: 6 },
    { id: 9, name: "React", categoryId: 2, logoUrl: si("react"), displayOrder: 1 },
    { id: 12, name: ".NET", categoryId: 2, logoUrl: si("dotnet"), displayOrder: 2 },
    { id: 11, name: "SwiftUI", categoryId: 2, logoUrl: "", displayOrder: 3 },
    { id: 13, name: "ASP.NET", categoryId: 2, logoUrl: "", displayOrder: 4 },
    { id: 59, name: "jQuery", categoryId: 2, logoUrl: si("jquery"), displayOrder: 5 },
    { id: 14, name: "Blazor", categoryId: 2, logoUrl: si("blazor"), displayOrder: 6 },
    { id: 17, name: "Tailwind CSS", categoryId: 2, logoUrl: si("tailwindcss"), displayOrder: 7 },
    { id: 18, name: "SASS", categoryId: 2, logoUrl: si("sass"), displayOrder: 8 },
    { id: 10, name: "Next.js", categoryId: 2, logoUrl: si("nextdotjs"), displayOrder: 9 },
    { id: 15, name: "Vue.js", categoryId: 2, logoUrl: si("vuedotjs"), displayOrder: 10 },
    { id: 16, name: "Nuxt.js", categoryId: 2, logoUrl: si("nuxtdotjs"), displayOrder: 11 },
    { id: 21, name: "Node.js", categoryId: 2, logoUrl: si("nodedotjs"), displayOrder: 12 },
    { id: 22, name: "SQL Server", categoryId: 3, logoUrl: si("microsoftsqlserver"), displayOrder: 1 },
    { id: 26, name: "Azure", categoryId: 3, logoUrl: si("microsoftazure"), displayOrder: 2 },
    { id: 24, name: "Postgres", categoryId: 3, logoUrl: si("postgresql"), displayOrder: 3 },
    { id: 25, name: "Supabase", categoryId: 3, logoUrl: si("supabase"), displayOrder: 4 },
    { id: 27, name: "Salesforce", categoryId: 3, logoUrl: si("salesforce"), displayOrder: 5 },
    { id: 23, name: "Oracle SQL", categoryId: 3, logoUrl: si("oracle"), displayOrder: 6 },
    {
        id: 28,
        name: "Boomi",
        categoryId: 3,
        logoUrl: "",
        displayOrder: 7,
    },
    { id: 29, name: "Azure DevOps", categoryId: 4, logoUrl: si("azuredevops"), displayOrder: 1 },
    { id: 31, name: "Linux", categoryId: 4, logoUrl: si("linux"), displayOrder: 2 },
    { id: 32, name: "Windows Server", categoryId: 4, logoUrl: si("windows"), displayOrder: 3 },
    { id: 30, name: "Git", categoryId: 5, logoUrl: si("git"), displayOrder: 1 },
    { id: 33, name: "Visual Studio", categoryId: 5, logoUrl: si("visualstudio"), displayOrder: 2 },
    { id: 34, name: "VS Code", categoryId: 5, logoUrl: si("visualstudiocode"), displayOrder: 3 },
]
