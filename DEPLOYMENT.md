# Deploying the Attune website

The site is a static Vite build (`npm run build` → `dist/public`). It can be hosted on any static host.

## Default: GitHub Pages (live today)

Pushing to `main` runs `.github/workflows/deploy-pages.yml`, which builds the site and publishes it to
**https://attune-care.github.io/**. No other setup is needed.

To check a deploy: GitHub → **Actions** → "Deploy to GitHub Pages".

## Alternatives (all have free tiers)

| Host | Free URL | Commercial use on free tier | Setup |
| --- | --- | --- | --- |
| GitHub Pages | `attune-care.github.io` | Allowed for project and org sites (not for running a business's transactions) | Already configured |
| Cloudflare Pages | `attune.pages.dev` | Yes | Connect repo; build `npm run build`, output `dist/public` |
| Netlify | `attune.netlify.app` | Yes | Connect repo; `netlify.toml` is included |
| Vercel | `attune.vercel.app` | **No**: Hobby is for personal, non-commercial use. A company site should use Pro | Import repo; `vercel.json` is included |

Any of these will auto-deploy on push once the repo is connected. Each requires signing in with the team's
own account, so it can't be done from this repo alone.

## Custom domain (recommended for credibility)

There are no reputable *free* custom domains anymore. Free registries like Freenom have shut down, and
free subdomain services look untrustworthy to clinicians and investors. A real domain costs roughly
$10–35/year (for example `attune.care`, `attunecare.com`, or `attune.health`, if available).

To use one with GitHub Pages:

1. Buy the domain from a registrar (Cloudflare Registrar, Namecheap, Porkbun, etc.).
2. In the repo: **Settings → Pages → Custom domain**, enter the domain and save.
3. At the registrar, add DNS records:
   - Apex (`attune.care`): `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: `CNAME` to `attune-care.github.io`
4. Once DNS resolves, tick **Enforce HTTPS**.

Also add a matching email address on the domain (e.g. `hello@attune.care`) and update `client/src/lib/site.ts`.
