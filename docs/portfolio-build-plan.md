# Developer Portfolio — Build Plan

**Stack:** Next.js (App Router) · React · Tailwind CSS · TypeScript · Deployed on Vercel
**Goal:** A fast, professional, fully custom developer portfolio that also demonstrates your engineering skill.

---

## 1. Why this stack (quick rationale)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router)** | Industry standard for React sites; handles routing, SEO, image optimization, and static generation out of the box. |
| UI library | **React** | Component-based; reusable building blocks (cards, nav, buttons). |
| Styling | **Tailwind CSS** | Utility-first CSS — style directly in markup, fast to iterate, consistent design. |
| Language | **TypeScript** | Catches errors early and looks great to employers reviewing your code. |
| Hosting | **Vercel** | Made by the Next.js team; free tier, automatic deploys from GitHub, custom domains, instant HTTPS. |

**Recommended add-ons (optional, but nice):**
- **shadcn/ui** — copy-paste accessible components built on Tailwind.
- **Motion** (formerly Framer Motion) — smooth animations.
- **lucide-react** — clean icon set.
- **MDX** — write blog posts / project write-ups in Markdown.
- **Vercel Analytics** — free traffic stats.

---

## 2. Prerequisites — set up your machine first

Install these before touching any code:

1. **Node.js** (LTS version) — from nodejs.org. This runs everything.
2. **A code editor** — VS Code is the standard.
3. **Git** — version control (comes with macOS/Linux; Windows: git-scm.com).
4. **A GitHub account** — hosts your code and connects to Vercel.
5. **A Vercel account** — sign up with your GitHub login (free).

> You'll create the project with a single command later: `npx create-next-app@latest` — this always pulls the current versions, so you don't need to worry about version numbers.

---

## 3. Sitemap — what pages the site has

A clean single-page-plus-sections layout works great for portfolios. Recommended structure:

```
/                → Home (hero + highlights)
  #about         → About section
  #projects      → Featured projects
  #skills        → Tech stack / tools
  #experience    → Work history / résumé
  #contact       → Contact form or links
/projects/[slug] → (Optional) detailed case-study page per project
/blog            → (Optional) blog index
/blog/[slug]     → (Optional) individual posts
```

Start with the single-page version. Add `/projects/[slug]` and `/blog` later once the core is live.

---

## 4. Page-by-page content outline

**Hero (top of home)**
- Your name + one-line title ("Full-Stack Developer", "CS Student & Builder")
- A short punchy tagline (what you do / what you're looking for)
- Two buttons: "View Projects" and "Contact / Resume"
- Optional: subtle background animation or your photo

**About**
- 2–3 short paragraphs: who you are, what you build, what excites you
- A downloadable résumé (PDF) button

**Projects** (the most important section)
- 3–6 project cards, each with: title, thumbnail, 1–2 line description, tech tags, and links (Live Demo + GitHub)
- Lead with your strongest project

**Skills**
- Grouped: Languages / Frameworks / Tools
- Simple icon grid or tag list — keep it honest and scannable

**Experience**
- Timeline of roles, education, or notable achievements
- Company/school, title, dates, 1–2 bullet points each

**Contact**
- Either a simple form (name, email, message) or just clear links: email, GitHub, LinkedIn, X/Twitter

---

## 5. Design direction

Keep it clean and let the work speak. Suggested defaults:

- **Layout:** generous whitespace, max content width ~1100px, centered.
- **Typography:** one modern sans-serif (e.g. Inter or Geist) via `next/font`. Big, confident headings.
- **Color:** neutral base (white/near-black) + one accent color. Add a dark-mode toggle — expected for dev portfolios.
- **Motion:** subtle fade/slide-in on scroll. Don't overdo it.
- **Responsive:** design mobile-first; test at phone, tablet, desktop widths.

---

## 6. Project folder structure (App Router)

```
my-portfolio/
├─ app/
│  ├─ layout.tsx        ← global layout (nav, footer, fonts)
│  ├─ page.tsx          ← home page (assembles all sections)
│  ├─ globals.css       ← Tailwind + base styles
│  └─ blog/             ← optional blog routes
├─ components/          ← Hero, About, ProjectCard, Nav, Footer, etc.
├─ data/
│  └─ projects.ts       ← your project list as structured data
├─ public/              ← images, resume.pdf, favicon
└─ ... config files
```

Keeping projects in `data/projects.ts` means you update one file to add a project — no digging through markup.

---

## 7. Build roadmap (phased — follow in order)

**Phase 0 — Setup (30 min)**
- Run `npx create-next-app@latest` (choose: TypeScript ✅, Tailwind ✅, App Router ✅).
- Push the starter to a new GitHub repo.
- Connect the repo to Vercel → you now have a live URL that auto-updates on every push.

**Phase 1 — Skeleton (half day)**
- Build the global `layout.tsx` with a nav bar and footer.
- Create empty section components (Hero, About, Projects, Skills, Experience, Contact) and stack them on the home page.

**Phase 2 — Content (1–2 days)**
- Fill each section with your real content and Tailwind styling.
- Set up `data/projects.ts` and render project cards from it.

**Phase 3 — Polish (1–2 days)**
- Dark mode toggle, scroll animations, hover states.
- Responsive fixes across screen sizes.

**Phase 4 — Contact + Extras (half day)**
- Wire up the contact form (e.g. Formspree/Resend) or use mailto + social links.
- Add favicon, Open Graph image, page metadata for SEO.

**Phase 5 — Ship (1 hour)**
- Final review, run `npm run build` to catch errors, push to main.
- Buy a custom domain (~$10–15/yr) and connect it in Vercel.
- Add Vercel Analytics.

**Later / optional:** blog with MDX, per-project case-study pages, i18n, CMS.

---

## 8. Content checklist — gather these before Phase 2

- [ ] Name + professional title + tagline
- [ ] Short bio (2–3 paragraphs)
- [ ] Résumé as PDF
- [ ] 3–6 projects: title, description, tech used, live link, repo link, screenshot/thumbnail
- [ ] Skills list (languages, frameworks, tools)
- [ ] Experience/education entries with dates
- [ ] Contact links: email, GitHub, LinkedIn, other socials
- [ ] A profile photo (optional)

---

## 9. Learning resources

- **Next.js official tutorial** — nextjs.org/learn (free, hands-on, best starting point)
- **Tailwind docs** — tailwindcss.com/docs (keep open while styling)
- **React docs** — react.dev/learn
- **shadcn/ui** — ui.shadcn.com (components to drop in)
- **Deploying on Vercel** — vercel.com/docs

---

## 10. Rough timeline & cost

- **Time:** ~1 to 2 weeks part-time for a solid v1 (faster if you skip blog/case studies at first).
- **Cost:** Hosting free on Vercel. Only real cost is a domain name (~$10–15/year). Everything else in this stack is free and open source.

---

## Suggested first move

Do **Phase 0** end to end before anything else — getting a live URL on Vercel on day one (even if it's just the starter page) makes the whole project feel real and gives you a deploy pipeline from the start. Then build section by section.
