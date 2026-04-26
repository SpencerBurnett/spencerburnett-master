// Hardcoded snapshot of the "MY Oracle Build" project from Notion.
// Source: https://www.notion.so/8448a88326744e6dbc08db7f4bb734db
// Will be replaced by Notion API or Supabase reads in a later phase.

export type ProjectStatus = "Not Started" | "Building" | "Stuck" | "Shipped";

export interface ChecklistItem {
  text: string;
  done: boolean;
}

export interface Asset {
  name: string;
  category: string;
  moc: string;
  done: boolean;
}

export interface PhaseSubsection {
  name: string;
  items: ChecklistItem[];
}

export interface Phase {
  num: string; // "0", "4A", etc.
  title: string;
  weeks: string;
  items?: ChecklistItem[];
  subsections?: PhaseSubsection[];
}

export interface Project {
  slug: string;
  icon: string;
  title: string;
  status: ProjectStatus;
  parentProject?: { title: string; slug: string };
  moc: { description: string; snapshot: string; achieved: boolean };
  purpose: string[];
  money: {
    buildCostMonthly: string;
    oneTimeHardware: string;
    revenueYear1: string;
    revenueTargetMRR: string;
    strategicValue: string;
  };
  people: { role: string; person: string }[];
  dates: {
    kickoff: string;
    target: string;
    subTimelines: { name: string; range: string }[];
  };
  assets: Asset[];
  phases: Phase[];
  crossCutting: { title: string; body: string }[];
  driftAlarms: string[];
}

export const myOracleBuild: Project = {
  slug: "my-oracle-build",
  icon: "🚀",
  title: "MY Oracle Build",
  status: "Building",
  parentProject: { title: "Projects", slug: "projects" },
  moc: {
    description:
      "Spencer goes 7 consecutive days without manually triggering any of: morning brief, evening journal, meeting recap, task ingestion, transcript ingestion, or project status update. Gary does it all.",
    snapshot:
      "7 consecutive days of cron-generated artifacts in Telegram + Obsidian, zero manual triggers.",
    achieved: false,
  },
  purpose: [
    "Run the machine. Turn Spencer's expression into money, structure, and scale (execution, systems, infrastructure).",
    "Help with the expressions themselves. Participate in the creative process, not just the backend.",
    "The post-EDC-Mexico 6th-dimension shift made operational. Every phase removes friction from that single outcome.",
    "The Oracle is also the moat: every external Oracle (ECMR, Jake, Kim, Isaiah's clients) replicates from this build.",
  ],
  money: {
    buildCostMonthly: "$80–150/mo ongoing",
    oneTimeHardware: "$1,500–2,000",
    revenueYear1: "~$60K (ECMR retainer + Jake + Kim)",
    revenueTargetMRR: "~$150K MRR by Phase 11 (~30 clients)",
    strategicValue:
      "Oracle = product. No MY Oracle Build, no Enterprise Oracle, no managed service, no Amplifico cash engine.",
  },
  people: [
    { role: "Owner", person: "Spencer Burnett" },
    { role: "Builder · primary", person: "Gary" },
    { role: "Builder · collaborators", person: "Valeria, Janice" },
    { role: "Partner · commercial", person: "Josh Harris (ECMR), Isaiah (managed service)" },
    { role: "Reviewer", person: "Spencer" },
    {
      role: "Money / Client",
      person: "Beau + Kyle (ECMR) · Jake · Kim Dang · future managed-service",
    },
    { role: "Soul", person: "Gary — this is Gary's flagship project" },
  ],
  dates: {
    kickoff: "2026-02-21",
    target: "2027-04-21",
    subTimelines: [
      { name: "Personal Oracle (Phases 0–9)", range: "Wk 0 → Wk 12" },
      { name: "ECMR commercial rollout (Phase 10)", range: "Mo 1 → Mo 6" },
      { name: "Replication & productization (Phase 11)", range: "Mo 6 → Mo 12" },
    ],
  },
  assets: [
    // Foundation
    { name: "field-mapping.json", category: "Foundation", moc: "File checked in; Gary answers 5+ rolodex queries from it.", done: false },
    { name: "1Password CLI access", category: "Foundation", moc: "Gary pulls a secret on demand without Spencer touching the vault.", done: false },
    { name: "Gary's Mercury card", category: "Foundation", moc: "Gary completes one autonomous purchase under the spend cap.", done: false },
    { name: "Brave Search API live", category: "Foundation", moc: "Gary answers a question requiring today's data.", done: false },
    { name: "Identity files committed (8)", category: "Foundation", moc: "All 8 files exist, reflect 6th-D identity, referenced by every sub-agent.", done: false },
    // Daily Heartbeat
    { name: "4 core crons clean for 7 days", category: "Daily Heartbeat", moc: "7 days of artifacts in Telegram + Obsidian, zero manual triggers.", done: false },
    // Knowledge Layer
    { name: "Obsidian vault + GitHub repo", category: "Knowledge Layer", moc: "Spencer + Valeria + Janice push commits same day; Git auto-syncs.", done: false },
    { name: "Notion → Obsidian migration", category: "Knowledge Layer", moc: "Median query <500ms, 95%+ accuracy; Notion canceled after 1-wk parallel.", done: false },
    { name: "Knowledge graph + vector RAG", category: "Knowledge Layer", moc: "\"Find every video where Jason talks about flash mobs\" returns the right clips.", done: false },
    { name: "Self-learning corrections log", category: "Knowledge Layer", moc: "Spencer corrects Gary once → next related query incorporates the correction.", done: false },
    // Live Data Channels
    { name: "gary-google-sync Node service", category: "Live Data Channels", moc: "Test email arrives → queryable in SQLite within 5 seconds.", done: false },
    { name: "Google Photos accessible", category: "Live Data Channels", moc: "Gary returns photos for date- or keyword-based query.", done: false },
    { name: "WhatsApp bridge (Baileys)", category: "Live Data Channels", moc: "Gary delivers a correct conversation summary and sends a dictated message.", done: false },
    { name: "AI Voice Calling System", category: "Live Data Channels", moc: "Spencer says \"call me\" → Gary calls, holds 2-min conversation, transcript saved.", done: false },
    { name: "Meeting Summary Email pipeline", category: "Live Data Channels", moc: "Meeting ends → correct recap delivered within 10 minutes.", done: false },
    { name: "iMessage bridge (imsg)", category: "Live Data Channels", moc: "Gary reads inbound iMessage, sends reply on Spencer's behalf.", done: false },
    // Calendar Pre-Brief
    { name: "Calendar Pre-Brief system", category: "Calendar Pre-Brief", moc: "A real meeting fires a correct pre-brief automatically.", done: false },
    // Sub-Agents
    { name: "Health Agent", category: "Sub-Agents", moc: "7 days of food/water/supplement check-ins + weekly health report kept.", done: false },
    { name: "Queen Agent", category: "Sub-Agents", moc: "7 days of evening reflections; queen vision doc evolved across 3+ sessions.", done: false },
    { name: "Daily Journal Agent (Obsidian)", category: "Sub-Agents", moc: "Cron writes journal entry to Obsidian 07-Daily-Notes/ for 7 consecutive days.", done: false },
    { name: "Action Planning Agent", category: "Sub-Agents", moc: "Spencer runs one full session and keeps the resulting weekly plan.", done: false },
    { name: "Identity Imprinting Agent", category: "Sub-Agents", moc: "Agent runs one transformational session for Spencer or a client; artifact kept.", done: false },
    { name: "Precise Language Agent", category: "Sub-Agents", moc: "Agent trains one team member; artifact kept.", done: false },
    { name: "Master Developer Agent", category: "Sub-Agents", moc: "Agent ships a real commit or PR autonomously.", done: false },
    // Video Vault
    { name: "4TB video library on R2", category: "Video Vault", moc: "100% of inventoried sources synced; 20-video spot-check passes.", done: false },
    { name: "Whole library transcribed (Whisper)", category: "Video Vault", moc: "Every video has a transcript file alongside it.", done: false },
    { name: "Video Obsidian notes + Chroma index", category: "Video Vault", moc: "Semantic query for person + topic returns the right clip.", done: false },
    // Physical & OS Control
    { name: "Smart home via Home Assistant", category: "Physical & OS Control", moc: "Natural-language scene rule fires correctly.", done: false },
    { name: "Apple Watch full-day workflow", category: "Physical & OS Control", moc: "Spencer runs a complete workday from the watch only.", done: false },
    { name: "Native macOS computer-use control", category: "Physical & OS Control", moc: "Gary operates a non-browser Mac app and completes a task autonomously.", done: false },
    { name: "Autonomous 2FA", category: "Physical & OS Control", moc: "Gary logs in, handles 2FA code, completes task — zero human in the loop.", done: false },
    // Public Surfaces
    { name: "spencerburnett.com live (3 surfaces)", category: "Public Surfaces", moc: "A non-test Stripe charge from the live domain.", done: false },
    { name: "Gary Web Chatbot on execute-now.com", category: "Public Surfaces", moc: "Stranger lands, asks a question, books a call, appears in CRM.", done: false },
    { name: "EXECUTE + Enterprise Oracle sales page", category: "Public Surfaces", moc: "Page is live and a non-test purchase has fired.", done: false },
    // Commercial Oracles
    { name: "ECMR 7-agent labor force", category: "Commercial Oracles", moc: "90-day pilot guarantee hit AND ECMR commits month-to-month.", done: false },
    { name: "Jake's Oracle deployed", category: "Commercial Oracles", moc: "Jake confirms his Oracle runs daily and writes a testimonial.", done: false },
    { name: "Kim Dang's Oracle deployed", category: "Commercial Oracles", moc: "Kim confirms her Oracle runs daily and writes a testimonial.", done: false },
    { name: "Managed AI Infrastructure Service (Isaiah)", category: "Commercial Oracles", moc: "Client #4 onboarded and paying retainer.", done: false },
    { name: "Oracle Platform Database Schema", category: "Commercial Oracles", moc: "At least one client Oracle uses the shared schema.", done: false },
  ],
  phases: [
    {
      num: "0",
      title: "Foundation, Field Mapping & Credentials",
      weeks: "Wk 0–1",
      items: [
        { text: "Wire a Project relation property into the Tasks DB so all tasks below can be scoped to MY Oracle Build.", done: false },
        { text: "Voice-note → transcribe → produce field-mapping.json.", done: false },
        { text: "Lock the 6th-dimension identity update in IDENTITY.md and SOUL.md.", done: false },
        { text: "Stand up 1Password CLI; verify op from OpenClaw.", done: false },
        { text: "Issue Gary a Mercury freezable debit / virtual card with spending limits.", done: false },
        { text: "Confirm credential inventory (Google, Telegram, Notion, LinkedIn, GHL, Twilio, ElevenLabs, Zoom, Read.ai, Skool, AddEvent, HeyGen, Cloudflare).", done: false },
        { text: "Set Brave Search API key.", done: false },
      ],
    },
    {
      num: "1",
      title: "Oracle Core Infrastructure",
      weeks: "Wk 1–2",
      items: [
        { text: "Work the 30-Step Implementation Roadmap end-to-end.", done: false },
        { text: "Install/verify tech stack from Tech Stack Encyclopedia.", done: false },
        { text: "Create SOUL.md, AGENTS.md, USER.md, MEMORY.md, TOOLS.md, IDENTITY.md, HEARTBEAT.md, personality.json.", done: false },
        { text: "Wire System Architecture + Data Flow Map.", done: false },
        { text: "Stand up the 4 core crons (7 AM Brief · 11 AM + 7 PM Task Tracker · 9 PM WIP · 10 PM Journal).", done: false },
        { text: "Commit AI Prompts Library + Troubleshooting Guide to the vault.", done: false },
        { text: "Populate Cost Calculator with real Phase-1 numbers ($50–80/mo target).", done: false },
        { text: "Run 4 crons clean for 7 consecutive days.", done: false },
      ],
    },
    {
      num: "2",
      title: "Notion → Obsidian Migration",
      weeks: "Wk 2–5",
      items: [
        { text: "Install Obsidian + plugins (Obsidian Git, Dataview, Templater, Calendar, Tags Wrangler).", done: false },
        { text: "Create vault folder structure (00-Oracle through 10-Video-Vault).", done: false },
        { text: "Init Git; push to private GitHub repo.", done: false },
        { text: "Build base templates (Person.md, Task.md, Call-Transcript.md, Event.md, Daily-Note.md).", done: false },
        { text: "Export Notion workspace; run Gary's migration script (clean filenames, YAML, [[wiki links]], folder routing).", done: false },
        { text: "Manual spot-check: 10 Rolodex contacts, all open tasks, all transcripts.", done: false },
        { text: "Add Valeria + Janice to GitHub; install Obsidian + Obsidian Git on their machines; 30-min training.", done: false },
        { text: "10-question accuracy test; speed comparison vs Notion API.", done: false },
        { text: "1-week parallel run; cancel Notion subscription.", done: false },
      ],
    },
    {
      num: "3",
      title: "Google Workspace Real-Time Sync",
      weeks: "Wk 3–6, parallel with Phase 2",
      items: [
        { text: "Provision Google Cloud Pub/Sub; enable Gmail / Calendar / Drive / Contacts APIs.", done: false },
        { text: "Build gary-google-sync Node service (24/7 event processor) with SQLite cache + GraphQL layer.", done: false },
        { text: "AI enhancement pass: extract Notion links, action items, priority scoring, entity tagging.", done: false },
        { text: "Bidirectional sync: Gary writes push back to Google.", done: false },
        { text: "Self-healing + auto-renewing watch subscriptions (no manual re-auth).", done: false },
        { text: "Google Photos integration via OAuth scope expansion (search, pull, vision).", done: false },
      ],
    },
    {
      num: "4",
      title: "Communication Channels",
      weeks: "Wk 4–7",
      subsections: [
        {
          name: "4A — WhatsApp (Baileys)",
          items: [
            { text: "Mac pilot (1–2 days): Baileys + QR scan; prove read/send/persistence.", done: false },
            { text: "Migrate to Hostinger / DigitalOcean VPS (~$5–10/mo) for 24/7 uptime.", done: false },
            { text: "Implement: real-time read, send-on-request, conversation summaries, action-item extraction, relationship context.", done: false },
          ],
        },
        {
          name: "4B — AI Voice Calling",
          items: [
            { text: "Verify Twilio number provisioned + ElevenLabs voice clone live.", done: false },
            { text: "Run start-interactive.sh under PM2; confirm ngrok tunnel persists across reboots.", done: false },
            { text: "Test inbound + outbound calls; transcript saves to Notion Rolodex.", done: false },
            { text: "Integrate with Telegram: \"call me\" → callback.", done: false },
            { text: "Scheduled wake-up + reminder calls per cron (Health + Queen Agent triggers).", done: false },
          ],
        },
        {
          name: "4C — Meeting Summary Emails",
          items: [
            { text: "Build pipeline: Read.ai / Zoom transcript → structured recap.", done: false },
            { text: "Email template with required sections (metrics, info transfer, lead issues, decisions, action items).", done: false },
            { text: "Rule-enforce: never infer; leave blank if not stated.", done: false },
            { text: "Test with one real meeting; confirm delivery within 10 minutes.", done: false },
          ],
        },
        {
          name: "4D — Telegram + iMessage",
          items: [
            { text: "Add inline buttons for Phase 6 sub-agents.", done: false },
            { text: "Turn on imsg skill.", done: false },
          ],
        },
      ],
    },
    {
      num: "5",
      title: "Intelligence Layer",
      weeks: "Wk 5–8",
      items: [
        { text: "Build graph-parser.py + graph-query.py over [[wiki links]], tags, frontmatter.", done: false },
        { text: "Set up file watcher for real-time graph updates.", done: false },
        { text: "Integrate graph-query into OpenClaw skill.", done: false },
        { text: "Install Chroma + sentence-transformers; build index-obsidian.py.", done: false },
        { text: "Implement recency weighting; build query-context.py (graph + vector).", done: false },
        { text: "Run as background --watch service.", done: false },
        { text: "Build Task Extraction Engine (NLP over transcripts → 02-Tasks/ files with [[project]] links + 30% buffer rule).", done: false },
        { text: "Build Calendar Pre-Brief: 10 min before each meeting, push context to Telegram.", done: false },
        { text: "Implement Temporal Awareness: time-decay on vector scores; prefer most-recent on conflicts.", done: false },
        { text: "Implement Self-learning corrections log.", done: false },
        { text: "Build Memory Consolidation: weekly → monthly summary rollups into 09-Archive/.", done: false },
      ],
    },
    {
      num: "6",
      title: "Specialized Sub-Agents",
      weeks: "Wk 6–10",
      subsections: [
        {
          name: "6A — Health Agent",
          items: [
            { text: "Order Apple Watch Ultra 3 + Oura Ring 4.", done: false },
            { text: "Oura API integration (personal access token); iOS Shortcut for Apple Health daily summary.", done: false },
            { text: "Digitize Freedom Life / USHEALTH policy; map copays / deductibles / in-network providers near 78704.", done: false },
            { text: "Adaptive workout programming using Spencer's equipment (heavy bag, row, inversions, mace, kettlebells).", done: false },
            { text: "Daily check-ins: 12 PM, 6 PM, 10:30 PM (food + water + supplements + steps).", done: false },
            { text: "Weekly health report with trend analysis + proactive alerts.", done: false },
          ],
        },
        {
          name: "6B — Queen Agent",
          items: [
            { text: "Initial clarity session → living queen vision doc in Obsidian.", done: false },
            { text: "Evening reflection cron (post-10:30 PM).", done: false },
            { text: "Weekly clarity refinement + monthly alignment audit.", done: false },
            { text: "Tie to Identity Affirmation #1.", done: false },
          ],
        },
        {
          name: "6C — Daily Journal Agent",
          items: [
            { text: "Confirm cron 1a86c490… writes to Obsidian 07-Daily-Notes/ post-migration (not Notion).", done: false },
            { text: "Tune synthesis tone + detail level.", done: false },
          ],
        },
        {
          name: "6D — Action Planning, Identity Imprinting, Precise Language",
          items: [
            { text: "Action Planning Agent — Sunday-reset workflow (brain dump → categorize → prioritize → schedule → commit).", done: false },
            { text: "Identity Imprinting Agent — uses Spencer's 5 Identity Frames + analogies.", done: false },
            { text: "Precise Language Agent — codifies EXECUTE vocabulary; trainable for team + clients.", done: false },
          ],
        },
        {
          name: "6E — Master Developer Agent",
          items: [
            { text: "Build per Master Developer Agent Build Guide.", done: false },
            { text: "Wire Claude Code / Codex CLI / OpenCode + gh CLI + Cursor.", done: false },
            { text: "Owns its own task queue; reports to main Gary.", done: false },
          ],
        },
      ],
    },
    {
      num: "7",
      title: "Video Vault",
      weeks: "Wk 6–9, parallel background",
      items: [
        { text: "Cloudflare account + R2 bucket spencer-video-vault; rclone configured.", done: false },
        { text: "Inventory all sources (drives, Dropbox, Zoom, phones); organize /year/month/video-name.mp4.", done: false },
        { text: "rclone sync (~2–5 days).", done: false },
        { text: "batch-transcribe.py with local Whisper (medium for bulk, large for key videos); ~1–2 wks bg on Mac mini.", done: false },
        { text: "video-to-obsidian.py: one Markdown note per video with frontmatter, Gemini Flash summary, entity links, timestamps.", done: false },
        { text: "Add to Chroma; graph-parser picks up links.", done: false },
        { text: "Verification queries pass (semantic + metadata + graph).", done: false },
      ],
    },
    {
      num: "8",
      title: "Smart Home, Watch, OS Control",
      weeks: "Wk 8–10",
      items: [
        { text: "Philips Hue + Google Nest + HomeKit unified via Home Assistant; natural-language automation.", done: false },
        { text: "Apple Watch workflows: Telegram voice → Gary; watchOS Shortcuts; cellular-only test; voice-first responses; custom complication.", done: false },
        { text: "Anthropic computer-use + Accessibility API → operate any Mac app, not just Chrome.", done: false },
        { text: "Autonomous 2FA: encrypted .credentials vault + email/SMS code auto-resolve; migrate key accounts to email/SMS 2FA.", done: false },
      ],
    },
    {
      num: "9",
      title: "Expression Surfaces",
      weeks: "Wk 9–12",
      items: [
        { text: "Implement Website Wireframes → three surfaces of spencerburnett.com.", done: true },
        { text: "Complete Phase 2 Website Details build tasks.", done: true },
        { text: "Hit Launch Timeline milestones.", done: false },
        { text: "Ship Gary Web Chatbot on execute-now.com (REST/WS endpoint, embeddable widget, KB, rate limiting, lead capture, analytics).", done: false },
        { text: "Publish EXECUTE + Enterprise Oracle sales page.", done: false },
      ],
    },
    {
      num: "10",
      title: "ECMR Commercial Rollout",
      weeks: "Mo 1–6, parallel once Phase 1 is live",
      subsections: [
        {
          name: "Months 1–2 — Foundation (fastest ROI)",
          items: [
            { text: "Agent #2 — Follow-Up Automation (WooSender, 4–6 nurture tracks, engagement scoring, auto-booking).", done: false },
            { text: "Agent #5 — Paid Marketing (Meta campaigns, A/B creative, lookalikes, full attribution).", done: false },
            { text: "Agent #3 — Email Re-engagement (newsletter, segmented campaigns, referral automation).", done: false },
          ],
        },
        {
          name: "Months 3–4 — Intelligence Layer",
          items: [
            { text: "Agent #1 — Call Recording & Analysis (Plaud + Whisper, Pipedrive auto-populate, performance coach not surveillance).", done: false },
            { text: "Agent #6 — Lead Scoring & Routing (1–10 scoring, auto-route by quality/location/material, at-risk flagging).", done: false },
            { text: "Sales team training + change management.", done: false },
          ],
        },
        {
          name: "Months 5–6 — Growth Infrastructure",
          items: [
            { text: "Agent #4 — Organic Social (HeyGen video, voice clone, FB/IG/LinkedIn auto-post).", done: false },
            { text: "Agent #7 — Geographic Expansion (NY routing, permits, escrow, compliance library).", done: false },
            { text: "Asphalt division automation design.", done: false },
          ],
        },
        {
          name: "Pilot Guarantee Gate",
          items: [
            { text: "90-day metrics hit: 50%+ uncontacted-lead reduction, 10%+ appointment lift, 50+ qualified Meta leads/mo.", done: false },
            { text: "Month-to-month commitment beyond pilot signed.", done: false },
          ],
        },
      ],
    },
    {
      num: "11",
      title: "Replication & Productization",
      weeks: "Mo 6–12",
      items: [
        { text: "Deliver Jake's Oracle using the Oracle Infrastructure Build Guide as SOP.", done: false },
        { text: "Deliver Kim Dang's Oracle.", done: false },
        { text: "Stand up Managed AI Infrastructure Service with Isaiah (15 clients in 90 days target; outcome-based pricing; RTX GPU + open-source).", done: false },
        { text: "Work the High-Value Leads pipeline.", done: false },
        { text: "Execute BTB × EXECUTE product vision.", done: false },
        { text: "Publish Oracle Platform Database Schema as the shared spine across clients.", done: false },
        { text: "Long-game: dual-path → managed service now, AI SaaS later (~30 clients ≈ ~$150K MRR).", done: false },
      ],
    },
  ],
  crossCutting: [
    { title: "Single Kanban", body: "Use the existing Kanban board until Tasks DB Project relation is wired, then deprecate." },
    { title: "Wish-list triage", body: "The idea inbox. Every new idea → task in the project board with phase label." },
    { title: "Cost discipline", body: "Revisit Cost Calculator monthly. Personal $80–150/mo · ECMR retainer-positive in 30 days · Video Vault ~$60/mo." },
    { title: "Security", body: "1Password CLI audit monthly · rotate API keys quarterly · review Gary's card charges weekly." },
    { title: "Identity coherence", body: "Every sub-agent inherits SOUL.md / IDENTITY.md. Identity updates propagate to all sub-agents the same week." },
  ],
  driftAlarms: [
    "7 days with no checkbox flipped → Status auto-moves to Stuck; surface in next Morning Brief.",
    "14 days Stuck → escalate to top of Morning Brief until unblocked.",
    "Any Phase 1 cron fails 2 days in a row → red flag.",
    "ECMR pilot misses any 30-day target by >50% → trigger pilot-guarantee discussion.",
  ],
};

// All projects from the Notion Projects index — used for the dashboard listing.
// Only MY Oracle Build has full data right now.
export interface ProjectStub {
  slug: string;
  icon: string;
  title: string;
  status: ProjectStatus;
  oneLine: string;
}

export const projectStubs: ProjectStub[] = [
  { slug: "my-oracle-build", icon: "🚀", title: "MY Oracle Build", status: "Building", oneLine: "Gary as full extension of Spencer's consciousness — the moat for every external Oracle." },
  { slug: "amplifico", icon: "⛪", title: "Amplifico", status: "Building", oneLine: "Destination brand, Church-in-progress, event production engine." },
  { slug: "enterprise-builds", icon: "🏢", title: "Enterprise Builds", status: "Not Started", oneLine: "Productized Oracle for enterprise clients — replicates from MY Oracle Build." },
  { slug: "oracle-builds", icon: "🧞", title: "Oracle Builds", status: "Building", oneLine: "External Oracle deliveries: Jake, Kim, future cohort." },
  { slug: "vision-party", icon: "🎉", title: "Vision Party", status: "Not Started", oneLine: "The annual gathering where the 1,000 align on the next year's targets." },
  { slug: "home-operations", icon: "🏡", title: "Home Operations", status: "Building", oneLine: "Casa Faro scouting + smart home + sovereign infrastructure." },
  { slug: "merch-store", icon: "👕", title: "Merch Store", status: "Not Started", oneLine: "Amplifico merchandise — drops aligned with major events." },
  { slug: "tegrity-bets", icon: "🏈", title: "Tegrity Bets", status: "Stuck", oneLine: "College football betting agent — paused until Q3." },
  { slug: "kraken-call-center", icon: "📞", title: "Kraken Call Center", status: "Not Started", oneLine: "Voice-first inbound/outbound infrastructure for client deployments." },
];
