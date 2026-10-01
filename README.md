# Amabo Joshua Portfolio

A responsive, single-page portfolio for Amabo Joshua, a Computer Engineer and Full-Stack Developer. It presents selected projects, professional experience, awards, and contact links, with English and French copy and light/dark themes.

## Getting Started

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app uses Next.js App Router; the home page is composed in `src/app/page.tsx`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Run ESLint. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build locally. |

There is currently no test script configured in `package.json`.

## Tech Stack

- Next.js 16 with React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion for section and content animation
- `next-themes` for theme selection
- React Lenis for smooth scrolling
- JSON message files and a small React context for English/French copy

## Documentation

See [docs/PROJECT.md](docs/PROJECT.md) for the source layout, content editing locations, translation workflow, assets, and production notes.

## Deployment

The app can be deployed to a Next.js-compatible host such as Vercel. Verify a release locally with `npm run lint` and `npm run build`; configure the host to install dependencies from `package-lock.json` and run the Next.js production build.
