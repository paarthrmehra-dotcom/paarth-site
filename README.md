# paarthmehra.com

Static site built with [Astro](https://astro.build). Two writing streams
(Investing & Strategy, Careers), a coaching page, and a Calendly-first contact
flow. No database, no server, no monthly hosting cost.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## The two files that make it yours

| File | What is in it |
| --- | --- |
| `src/site.config.ts` | Name, role, intro, email, Calendly link, social links, availability, topic definitions |
| `src/data/services.ts` | The three coaching offers, with descriptions and deliverables |

Change those and the whole site follows. Then rewrite `src/pages/about.astro`,
which is currently written as instructions to you rather than as copy.

## Before you publish

1. **Rewrite the five sample posts.** They are drafts in `src/content/writing/`
   and each opens with an italic line saying so. Delete that line when you
   replace the content. They are built from your real background — CDD, GCC
   portfolio work, case interviews, resumes, MBA essays — but the opinions in
   them are constructed, not yours.
2. **Rewrite the last paragraph of the About page.** The facts come from your
   LinkedIn and are accurate, but the voice is generic. The paragraph on why you
   coach is the one prospective clients actually read.
3. **Check the credentials ledger** in `src/site.config.ts`. It says "6+ years"
   at Bain and "20+ IIM graduates" — adjust if you'd phrase either differently.
4. **Set your availability.** `available` and `availabilityNote` in
   `src/site.config.ts` control the amber marker in the hero and on the coaching page.
5. **Update `site`** in `astro.config.mjs` to your real domain. It drives canonical
   tags and the RSS feed.

## Writing a post

Add a Markdown file to `src/content/writing/`. The filename becomes the URL, so
`why-vcs-pass.md` publishes at `/writing/why-vcs-pass/`.

```markdown
---
title: "Your title"
description: "One line, shown in the index and in search results."
date: 2026-09-01
topic: practice   # 'practice' = Investing & Strategy, 'careers' = Careers
tags: ["venture capital"]
draft: false
---

Your post, in Markdown.
```

`topic` is required and must be `practice` or `careers` — the build fails
otherwise, which is deliberate. It routes the post to the right stream at
`/writing/topic/investing-strategy/` or `/writing/topic/careers/`.

Set `draft: true` to keep something out of the index without deleting it.

To rename the streams or add a third, edit `topics` in `src/site.config.ts` and
the `topic` enum in `src/content.config.ts`.

## Contact form

The contact section currently shows your Calendly link and email. To add a real
form, get a free access key at [web3forms.com](https://web3forms.com) and paste
it into `web3formsKey` in `src/site.config.ts`. The form appears automatically
and submissions arrive in your inbox — there is no backend to run.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. At [pages.cloudflare.com](https://pages.cloudflare.com), connect the repo.
3. Choose the **Astro** framework preset — it fills in `npm run build` and `dist`.
4. Deploy. You are live at `yourproject.pages.dev`.

Every push to `main` rebuilds automatically. A custom domain is the only thing
that costs money: roughly ₹1,000–1,500 a year. Cloudflare adds it and issues
the certificate for free.

## Design notes

Dark theme. Deep slate ground, raised panels for the coaching and contact
sections, a cool blue for structure, and a single warm amber accent used once
per page — the availability dot, the tick beside each section marker, the corner
rule on your portrait, the submit button. The writing index is a register rather
than a card grid, because a logbook is the honest shape for two parallel streams
of dated entries.

Tokens are at the top of `src/styles/global.css`. Change `--accent` and `--warm`
and the site re-skins; change `--bg` and `--text` to go light again. Typefaces
are Archivo (display, set narrow), Newsreader (body), and IBM Plex Mono
(labels), loaded in `src/layouts/Base.astro`.

## Your photo

Four files in `public/` — `paarth-560` and `paarth-280`, each as `.jpg` and
`.webp`. Browsers pick the smallest one that fits, so the homepage loads about
31 KB of image rather than the full-size original. To swap the photo, replace
all four at the same dimensions (560x560 and 280x280 square) and keep the
filenames. `src/components/Portrait.astro` controls where it appears.

## Not included

- **Sitemap** — `npx astro add sitemap` if you want one.
- **Analytics** — Cloudflare Web Analytics is free and needs no cookie banner.
- **Instagram embeds** — link out rather than embedding; the scripts are heavy.
