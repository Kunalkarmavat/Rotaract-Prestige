# Rotaract Club of Prestige: website (Next.js)

Redesigned site for the Rotaract Club of Prestige (RID 3053), Gwalior.
Pages: **Home** (`/`), **About** (`/about`), **Contact** (`/contact`).

Built with Next.js 15 (App Router), React 19 and TypeScript. No UI library, just one CSS file.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Deploy

**Vercel (recommended):** push this folder to GitHub, import the repo on vercel.com, click Deploy.
No settings needed.

**GitHub Pages / any static host:**

```bash
STATIC_EXPORT=1 NEXT_PUBLIC_BASE_PATH=/Rotaract_Prestige.github.io npm run build
```

Upload the generated `out/` folder. (Skip `NEXT_PUBLIC_BASE_PATH` if the site is on a root domain.)

## Edit content

Almost all text lives in **`lib/site.ts`**: contact details, stats, causes, events, team, FAQ and news.
Colors and fonts are CSS variables at the top of `app/globals.css`.

- **Stats** in `lib/site.ts` are placeholders based on what is on the page (20 post holders, 3 causes, 3 drives). Replace with your real numbers.
- **Events** have no year, as on the old site. Add one in `events` if you like.

## Images

All pictures are custom illustrations in `public/illustrations/` (SVG, so they stay sharp and load fast):
hero, mission, vision, the three causes (economy, education, health) and the three events (clothes, trees, birds).

To use a real club photo instead, put the file in `public/images/`, set `NEXT_PUBLIC_IMAGE_BASE=/images`,
and add one line to the `photos` map in `lib/site.ts`, for example `clothes: "ClothesDonation.webp"`.
Photos you do not list keep their illustration. Team members use initials; convert any `.heic`
portraits to `.jpg` or `.webp` before adding them.

## Contact form

By default, sending opens the visitor's email app with the message filled in (works on any host).
To receive messages directly, create a free form at formspree.io and set
`NEXT_PUBLIC_FORM_ENDPOINT` to its URL (see `.env.example`).

## Environment variables

See `.env.example`. All are optional.
