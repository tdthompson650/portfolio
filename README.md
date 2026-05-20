# Tyler Thompson — Portfolio

Personal portfolio site for Tyler Thompson, full-stack developer. A single-page marketing site with project highlights, core tech stack, and contact links.

**Live site:** [https://www.tdthompson.dev](https://www.tdthompson.dev)

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, static generation)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/) (Simple Icons)

## Features

- Responsive layout from mobile through large desktop
- Light and dark theme (system preference on first visit, persisted in `localStorage`)
- WCAG-oriented accessibility (skip link, landmarks, focus styles, semantic HTML)
- SEO: Open Graph, Twitter cards, `robots.txt`, `sitemap.xml`, favicon / app icons
- Optimized project screenshots (WebP, 16:9)
- Email contact button copies address to clipboard and opens the default mail client

## Getting started

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm

### Install and run

```bash
git clone <your-repo-url>
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

Verify the site at [http://localhost:3000](http://localhost:3000) before deploying.

### Lint

```bash
npm run lint
```

## Environment variables

Copy `env.example` to `.env.local` for local overrides:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata, Open Graph, and sitemap (e.g. `https://www.tdthompson.dev`) |

On Vercel, set `NEXT_PUBLIC_SITE_URL` in **Project → Settings → Environment Variables** for Production (and Preview if you want correct OG URLs on preview deploys). If unset, Vercel preview builds use `VERCEL_URL`; local dev defaults to `http://localhost:3000`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run optimize-images` | Convert `public/projects/*.png` to optimized WebP (1200×675) |
| `npm run generate-seo-assets` | Regenerate `public/og-image.png` and `app/icon*.png` |

### Updating project images

1. Add PNG screenshots to `public/projects/` (16:9 aspect ratio works best).
2. Run `npm run optimize-images`.
3. Point each project’s `image` field in `lib/content.ts` to the new `.webp` path.

### Updating site copy and projects

- Page layout: `app/page.tsx`
- Projects and nav links: `lib/content.ts`
- Site name, contact URLs, and metadata: `lib/site.ts`
- SEO layout metadata: `app/layout.tsx`

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx            # Homepage (all sections)
│   ├── globals.css         # Theme tokens and global styles
│   ├── robots.ts           # /robots.txt
│   ├── sitemap.ts          # /sitemap.xml
│   ├── icon.png            # App icon
│   └── apple-icon.png      # Apple touch icon
├── components/
│   ├── Navigation.tsx
│   ├── ProjectCard.tsx
│   ├── TechnologyList.tsx
│   ├── ThemeToggle.tsx
│   ├── EmailContactButton.tsx
│   └── SkipLink.tsx
├── lib/
│   ├── site.ts             # Site URL, name, contact links, metadata
│   ├── content.ts          # Nav links and project list
│   ├── theme.ts            # Light/dark theme logic
│   ├── layout.ts           # Shared layout width/padding classes
│   └── styles.ts           # Shared button/link class strings
├── public/
│   ├── og-image.png        # Social preview (1200×630)
│   └── projects/           # Project screenshots (.webp)
├── scripts/
│   ├── optimize-project-images.mjs
│   └── generate-seo-assets.mjs
├── types/
│   └── index.ts
├── next.config.ts
└── package.json
```

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com/) (framework preset: **Next.js**).
3. Set `NEXT_PUBLIC_SITE_URL` to `https://www.tdthompson.dev` (use your `www` canonical host).
4. Deploy. Preview URLs are created automatically for pull requests.
5. Add a custom domain under **Project → Settings → Domains** when ready.
6. After deploy, test Open Graph previews (e.g. [opengraph.xyz](https://www.opengraph.xyz/)) and submit `/sitemap.xml` in Google Search Console.

No extra build command is required; Vercel runs `next build` by default.

## Browser support

Production builds target modern browsers (Chrome, Edge, and Firefox 111+, Safari 16.4+) via `browserslist` in `package.json`.

## License

[MIT](LICENSE)
