# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters, hiring managers, and technical leads evaluating Moe Ayoub for full-stack and product-engineering roles (mobile, web, and backend). Secondary: peers and collaborators reviewing projects and contact paths.

## Product Purpose

Personal portfolio site that leads with Moe’s current AgTerra work, includes substantial Raven experience because that integration and systems background was crucial to the current role, showcases selected personal projects as short case studies, and makes resume and contact easy to reach.

## Positioning

**Full-Stack Engineer** whose **current AgTerra work leads**, with **Raven kept visible and material**—not a short footnote. Raven’s ERP, Salesforce, Azure, Boomi, and sync work is owner-confirmed as crucial to landing and succeeding in the current AgTerra job; the site should make that continuity readable (systems integration → full-stack product delivery in the AgTerra suite, including MapItFast / WhereAbout–related surfaces). Distinct from a generic “tool logo wall” full-stack presentation.

Confirmed public title string: **Full-Stack Engineer**.

Experience section expectation: AgTerra first (full LinkedIn bullets), then Raven with its LinkedIn bullets retained (not collapsed to one vague prior-roles line).

## Operating Context

- Employer (current): AgTerra Technologies, Sheridan, Wyoming, United States. Role: Software Developer. Dates: May 2024 – Present.
- Employer (prior): Raven Industries, Sioux Falls, South Dakota, United States. Role: Software Developer. Dates: Oct 2020 – Sep 2023.
- Portfolio stack: Next.js App Router, React, TypeScript, Tailwind; Supabase `portfolio` schema (`aboutMe`, `projects`, `skillSetCategories`, `skillSets`) with static fallbacks when the database is unavailable.
- Public contact already on the site: LinkedIn (`https://www.linkedin.com/in/mhayoub/`), email, GitHub, Salesforce Trailblazer.
- Day-to-day product work (from local AgTerra git checkouts and agent memories, not invented claims): WhereAbout.iOS (SwiftUI offline-first field GIS), MapItFastX (.NET for iOS), WhereAboutMaps (web/server), plus related AgTerra services (`AgTerraAPI`, `AgTerraIdentityServer`, `AgTerraLogging`, MapItFastWeb, ODKFormsKit, and related repos under `~/Developer`).

## Capabilities and Constraints

- Must keep dark/light mode.
- Brand colors stay recognizable: primary `#5356FF`, secondary `#0B60B0`.
- Do not invent employers, dates, metrics, or claims beyond LinkedIn (owner-confirmed), the repo, Supabase data, the resume PDF, and facts recorded here.
- Do not deploy, change Vercel settings, rotate keys, or commit secrets.
- Site must remain usable when Supabase is unavailable (static fallback content).
- Resume PDF remains linked (`public/moe.ayoub_resume.pdf`); refreshed for AgTerra through Present, address/phone redacted. Source DOCX in `docs/`.
- Open decisions: optional dedicated headshot beyond Gravatar. MapItFast iOS may appear in public copy (LinkedIn + resume already name it). WhereAbout product names stay off the public portfolio unless the owner adds them.

## Brand Commitments

- Name: Moe Ayoub
- Public title: Full-Stack Engineer
- Logo: `/public/moeAyoub_logo.png`
- Accent pair: `#5356FF` (primary), `#0B60B0` (secondary)
- Existing socials and project URLs in the repo/footer remain authoritative
- Voice: confident, concrete, technical without hype filler (“seamless”, “unleash”, etc.)
- Location OK to show: Sheridan, Wyoming

## Evidence on Hand

### Role source of truth (owner-confirmed via LinkedIn + init Q&A)

LinkedIn: `https://www.linkedin.com/in/mhayoub/`  
Headline: Full Stack Engineer → portfolio uses **Full-Stack Engineer**.  
Init answers (2026-10-25): (1) Full-Stack Engineer (2) current work leads (3) publish LinkedIn bullets with light cleanup only (4) show dates and location.

**AgTerra Technologies — Software Developer (May 2024 – Present), Sheridan, WY**

- Developed a self-service admin web application for client management of users and permissions, utilizing React.js, TailwindCSS, and .NET 8 API.
- Built user interfaces with ASP.NET, incorporating SASS for styling and jQuery for interactive features.
- MapItFast iOS UI development and enhancements.
- Streamlined support ticket workflows through automation with Trello integration.
- Designed and implemented a database logging library using .NET Standard 2.0 and SQL Server.
- Revamped and modernized a custom enterprise website, including database restructuring and UI upgrades, using SQL Server, SASS, and Blazor.

**Raven Industries — Software Developer (Oct 2020 – Sep 2023), Sioux Falls, SD**

- Integrated the e-commerce web site to Raven's new ERP system. Utilizing C#, Azure Web App, Message Service Bus Queues, Web Job, MSSQL, and Oracle SQL.
- Integrated a third-party CRM (Salesforce) with Raven’s ERP system. Utilizes C#, Boomi, and Oracle. Then re-did the integration by building a .NET library (SOAP) for Salesforce and creating .NET console apps to sync data between Raven’s ERP and Salesforce.
- Integrated the IT ticketing system (Ivanti) with Azure DevOps using .NET 6 C#.
- Developed Salesforce LWC, Aura, and APEX classes to enhance Raven’s business processes.
- Trailblazer: `https://www.salesforce.com/trailblazer/thelegend107`

### Portfolio / content assets

- Supabase tables in schema `portfolio` (aboutMe, projects, skillSets, skillSetCategories)
- Personal projects: moviesApp, fakeStore, resumeWebsite (descriptions, links, repos, screenshots)
- Resume PDF: `/public/moe.ayoub_resume.pdf` (AgTerra through Present; address/phone redacted)
- Gravatar for profile image via email hash

### Local AgTerra product evidence (workspace; do not invent metrics)

Repos and memories confirm ongoing engineering on AgTerra field/GIS products, including:

- `~/Developer/WhereAbout.iOS` — SwiftUI offline-first geospatial collection (PRODUCT.md in that repo)
- `~/Developer/MapItFastX` — MapItFast .NET for iOS
- `~/Developer/WhereAboutMaps` — maps web/server stack
- Related: `AgTerraAPI`, `AgTerraIdentityServer`, `AgTerraLogging`, `MapItFastWeb`, `MapItFast.iOS`, `ODKFormsKit`, and agent memories under `codex-workspace/memories/claude-agent-memory/`

Use these to keep positioning and skills grounded in current work. Do not publish internal repo paths, device serials, customer account names, or unpublished benchmarks on the portfolio site unless the owner explicitly adds them.

## Product Principles

1. Lead with current AgTerra full-stack / product work; keep Raven’s integration experience fully present because it was crucial to the current role.
2. Prefer truthful brevity; LinkedIn bullets are approved copy for Experience (both employers).
3. Case studies over screenshots-only cards for personal projects.
4. Accessibility and readability beat decorative glass/noise.
5. Fail soft when data sources are down.

## Accessibility & Inclusion

Keyboard-operable navigation (including mobile menu controls), semantic headings, meaningful image alt text, selectable body text, WCAG AA contrast for text and controls, and honor `prefers-reduced-motion`.
