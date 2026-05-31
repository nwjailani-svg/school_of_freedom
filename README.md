# The School of Freedom

[![Netlify Status](https://api.netlify.com/api/v1/badges/c3899189-8651-4236-abe9-f353cf8def27/deploy-status)](https://app.netlify.com/projects/funny-cocada-c5316a/deploys)

The website for **The School of Freedom**, a nonprofit providing free
education, tutoring, and mentorship for Afghan girls and for refugee and
newcomer youth in the United States.

## Tech stack

- **React 18** + **React Router** (single-page app)
- **Vite** (build tool / dev server)
- **Tailwind CSS** + custom design tokens in `src/index.css`
- **Framer Motion** (animations)
- Deployed on **Netlify**

## Local development

You need [Node.js](https://nodejs.org/) 20+ installed.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Editing site content (no coding required)

Most of the text and images on the site come from JSON files in
`src/data/`, so you can update content without touching React code:

| File | Controls |
| --- | --- |
| `src/data/home.json` | Home page hero, quote, stats, features, mission, CTA |
| `src/data/about.json` | About page |
| `src/data/programs.json` | Programs page |
| `src/data/team.json` | Team members (name, role, photo, bio) |
| `src/data/updates.json` | News / updates entries |
| `src/data/navigation.json` | Nav links and the Donate / Petition / Volunteer / Newsletter buttons |

**Images** live in `public/` (referenced by absolute paths like `/logo.jpg`)
and `src/images/` (imported in code). To add a new image, drop it in
`public/` and reference it as `"/your-image.jpg"` in the relevant JSON file.

After editing, run `npm run dev` to preview your changes locally.

## Deployment

Netlify builds and deploys automatically:

- **Merging a pull request to `main`** triggers a production deploy.
- Every **pull request** also gets its own **Deploy Preview** URL, so you can
  review changes on a live site before merging.

Build settings are pinned in `netlify.toml`. SPA routing (so a page reload on
`/team` doesn't 404) is handled by `public/_redirects`.
