const roles = [
    {
        company: "AgTerra Technologies",
        title: "Software Developer",
        location: "Sheridan, WY",
        dates: "May 2024 - Present",
        bullets: [
            "MapItFast iOS interface work and UI enhancements.",
            "Self-service admin so clients manage users and permissions, using React, Tailwind CSS, and a\u00A0.NET 8 API.",
            "ASP.NET interfaces, with SASS and jQuery on the interactive parts.",
            "Support-ticket workflows automated through a Trello integration.",
            "A database logging library on .NET Standard 2.0 and SQL Server.",
            "Enterprise site modernization: database restructuring and UI, with SQL Server, SASS, and Blazor.",
        ],
    },
    {
        company: "Raven Industries",
        title: "Software Developer",
        location: "Sioux Falls, SD",
        dates: "Oct 2020 - Sep 2023",
        bullets: [
            "Integrated the e-commerce site with Raven's ERP using C#, Azure Web Apps, Service Bus queues, WebJobs, SQL Server, and Oracle.",
            "Integrated Salesforce with the ERP using C#, Boomi, and Oracle, then replaced that path with a\u00A0.NET SOAP library and console apps that sync the two systems.",
            "Integrated Ivanti tickets with Azure DevOps using .NET 6.",
            "Built Salesforce LWC, Aura, and Apex for Raven's CRM processes.",
        ],
    },
]

export default function Experience() {
    return (
        <div className="flex flex-col gap-4 md:gap-5">
            {roles.map((role) => (
                <article
                    key={role.company}
                    className="experience-role ink-surface page-split"
                >
                    <header className="space-y-1.5">
                        <h3 className="font-display text-[clamp(1.45rem,0.5vw+1.1rem,1.8rem)] font-bold leading-[1.15] tracking-[-0.03em] text-ink dark:text-paper">
                            {role.company}
                        </h3>
                        <p className="font-medium text-[color:var(--color-body)]">
                            {role.title}
                        </p>
                        <p className="experience-meta mt-2 text-sm leading-snug">
                            <span className="block">{role.dates}</span>
                            <span className="block">{role.location}</span>
                        </p>
                    </header>
                    <ul className="type-body space-y-4 text-[color:var(--color-body)]">
                        {role.bullets.map((text) => (
                            <li key={text} className="experience-bullet relative pl-4">
                                {text}
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    )
}
