# manuelflores.me

Personal portfolio site + Claude job-hunt skill folder for Manuel Flores — bilingual Sales Engineer for LATAM expansion.

## Repo structure

```
manuelflores-me/
├── SKILL.md          # Claude skill definition (job-hunt SE LATAM)
├── assets/           # Skill assets consumed by Claude Desktop
├── references/       # Reference docs for the skill
└── site/             # Next.js 15 standalone — the actual portfolio site
```

### Skill folder

`SKILL.md`, `assets/`, and `references/` are loaded locally by Claude Desktop. They are not deployed anywhere — they live in this repo for version control and portability.

### Portfolio site

The `site/` directory is a Next.js 15 app deployed to [manuelflores.me](https://manuelflores.me) via Vercel.

```bash
cd site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

The site auto-deploys to manuelflores.me on every push to `main` via Vercel.

## License

© Manuel Flores. All rights reserved.
