# Spencer Burnett Master Site

The single codebase that hosts three surfaces:

- **Public website** — marketing + sales (Oracle, Mission, Vision, Story, etc.)
- **The Vault** — password-protected member area (Supabase Auth with Google/Apple SSO)
- **Mission Control** — owner-only internal dashboard (CRM, projects, agents)

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + custom design tokens (teal/dark palette)
- Supabase — Postgres, Auth, Storage, Edge Functions
- Stripe — one-time checkout (Oracle $4,500)
- Vercel — auto-deploy from `main`

## Route Groups

- `app/(public)/*` — no auth required
- `app/(vault)/*` — auth-gated (redirects to sign-in if no session)
- `app/(command)/*` — owner-only

## Live URLs

- Production: `https://spencerburnett.com` (once DNS is pointed)
- Vercel preview: `https://spencerburnett-master.vercel.app`
- Supabase project: `https://pssumgqzpjnbsqsoabnm.supabase.co`
- Stripe Oracle checkout: `https://buy.stripe.com/4gMeVegEi20FfGf5Ki63K0v`

## Local Development

This repo was bootstrapped without Node installed locally. To run locally:

```bash
# install Node (one-time):
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh | bash
brew install node gh

# then:
cd ~/spencerburnett-master
npm install
cp .env.local.example .env.local
npm run dev
```

## Deploy

Push to `main` → Vercel auto-builds and deploys.

## Phases

- **Phase 0** — Foundation (Stripe, Supabase, Vercel, repo) ✅
- **Phase 1** — `/oracle` page ✅ ← shipped tonight
- **Phase 2** — Remaining public pages (Home, Mission, Vision, Story, Amplifico, Events, MindShare, Join)
- **Phase 3** — The Vault (6 pages, Supabase Auth w/ Google + Apple SSO)
- **Phase 4** — Mission Control rebuild (migrate from `oracle-command-center` Lovable repo)
- **Phase 5** — Agent integrations (Gary SMS capture, Rolodex sync, cron heartbeats)

See Notion "🏗️ Master Site — Build Plan" for the full plan and phase-by-phase status.
