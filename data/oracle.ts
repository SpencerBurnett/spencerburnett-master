// Snapshot of Spencer's Oracle (Gary) configuration.
// Sourced from the OpenClaw architecture + MY Oracle Build phase data.
// Replace with live OpenClaw filesystem reads in a later phase.

export const oracleConfig = {
  name: "Gary",
  creator: "Spencer Burnett",
  role: "Personal Oracle and life operating system",
  emoji: "🧠",
  creatureType: "AI Oracle — extension of Spencer's consciousness",
  status: "Online",
  workspacePath: "~/.openclaw/workspace",
  lastHeartbeat: "2 minutes ago",
};

export const identityFiles = [
  { name: "SOUL.md", purpose: "Personality, voice, values, behavioral rules", status: "live" },
  { name: "IDENTITY.md", purpose: "Name, role, appearance, creator", status: "live" },
  { name: "USER.md", purpose: "Everything Gary knows about Spencer", status: "live" },
  { name: "AGENTS.md", purpose: "Operating procedures + session startup routine", status: "live" },
  { name: "TOOLS.md", purpose: "Available tools and credentials", status: "live" },
  { name: "MEMORY.md", purpose: "Long-term curated memory", status: "live" },
  { name: "HEARTBEAT.md", purpose: "What to check during 30-min heartbeats", status: "live" },
  { name: "personality.json", purpose: "Personology + numerology AI deep-read profile", status: "live" },
] as const;

export const llmProviders = [
  { name: "Claude Sonnet 4.6", provider: "Anthropic", role: "Default conversation + reasoning", status: "Active" },
  { name: "Claude Opus 4.7 (1M)", provider: "Anthropic", role: "Complex one-shot analysis", status: "Active" },
  { name: "Claude Haiku 4", provider: "Anthropic", role: "Cheap formatters + lookups", status: "Active" },
  { name: "GPT-5.3 / Codex", provider: "OpenAI", role: "Specialized code work", status: "Active" },
  { name: "Gemini 2.5 Pro", provider: "Google", role: "Second opinion + multimodal", status: "Active" },
  { name: "Grok 4", provider: "xAI", role: "Real-time web context", status: "Active" },
  { name: "Local Llama 3.3", provider: "Local (Mac Mini M1)", role: "Offline / private workloads", status: "Standby" },
] as const;

export const tools = [
  { name: "n8n", purpose: "Workflow automation", category: "Automation", status: "Live" },
  { name: "Twilio", purpose: "SMS + voice calls", category: "Communication", status: "Live" },
  { name: "ElevenLabs", purpose: "Voice cloning + TTS", category: "Communication", status: "Live" },
  { name: "Nano Banana", purpose: "Image generation", category: "Media", status: "Live" },
  { name: "Lovable", purpose: "Web UI prototyping", category: "Build", status: "Deprecated" },
  { name: "GitHub", purpose: "Code + version control", category: "Build", status: "Live" },
  { name: "cal.com", purpose: "Appointment booking", category: "Operations", status: "Live" },
  { name: "Runway", purpose: "Video generation", category: "Media", status: "Live" },
  { name: "Opus", purpose: "Video editing", category: "Media", status: "Live" },
  { name: "FFmpeg", purpose: "Audio/video processing", category: "Media", status: "Live" },
  { name: "Whisper (local)", purpose: "Transcription", category: "Media", status: "Live" },
  { name: "Buffer", purpose: "Social posting", category: "Distribution", status: "Live" },
  { name: "1Password CLI", purpose: "Credential vault", category: "Security", status: "Pending" },
  { name: "Apple Shortcuts", purpose: "iOS / macOS automation", category: "Operations", status: "Live" },
  { name: "Brave Search API", purpose: "Real-time web search", category: "Knowledge", status: "Pending" },
];

export const heartbeat = {
  intervalMinutes: 30,
  activeWindow: { start: "07:00", end: "23:00" },
  lastFired: "2 minutes ago",
  nextFiring: "in 28 minutes",
  checks: [
    "Read inbox · flag urgent",
    "Scan calendar · pre-brief upcoming meeting",
    "Check task list · surface overdue",
    "Watch project boards · auto-mark Stuck after 7 days",
    "Verify cron health · alert if 2 fails in a row",
    "Update today's memory file",
  ],
};

export const cronJobs = [
  { id: "7am-brief", time: "07:00", title: "Morning Brief", model: "Sonnet", channel: "Telegram", lastRun: "Today 07:00", status: "Healthy" },
  { id: "11am-tasks", time: "11:00", title: "Task Tracker (mid-morning)", model: "Sonnet", channel: "Telegram", lastRun: "Today 11:00", status: "Healthy" },
  { id: "7pm-tasks", time: "19:00", title: "Task Tracker (evening)", model: "Sonnet", channel: "Telegram", lastRun: "Yesterday 19:00", status: "Healthy" },
  { id: "9pm-wip", time: "21:00", title: "WIP Report", model: "Sonnet", channel: "Telegram", lastRun: "Yesterday 21:00", status: "Healthy" },
  { id: "10pm-journal", time: "22:00", title: "Daily Journal", model: "Opus", channel: "Obsidian", lastRun: "Yesterday 22:00", status: "Healthy" },
  { id: "1159pm-health", time: "23:59", title: "Health Sync (Apple Health + Oura)", model: "Haiku", channel: "Notion", lastRun: "Yesterday 23:59", status: "Pending" },
  { id: "fri5pm-rolodex", time: "Fri 17:00", title: "Rolodex Update (weekly)", model: "Sonnet", channel: "Notion", lastRun: "Last Friday", status: "Healthy" },
] as const;

export const channels = [
  { name: "Telegram", purpose: "Primary inbox + Gary chat", status: "Live" },
  { name: "iMessage", purpose: "Send/receive on Spencer's phone", status: "Pending Phase 4" },
  { name: "WhatsApp (Baileys)", purpose: "Read/send + summaries", status: "Pending Phase 4" },
  { name: "Voice Calling (Twilio + ElevenLabs)", purpose: "Cloned-voice phone calls", status: "Pending Phase 4" },
  { name: "Email (Gmail OAuth)", purpose: "Read/draft/send", status: "Pending Phase 3" },
  { name: "Web (chat widget)", purpose: "Public on execute-now.com", status: "Pending Phase 9" },
] as const;

export const subAgents = [
  { slug: "health", icon: "❤️", name: "Health Agent", role: "Apple Watch + Oura + check-ins + workouts + insurance map", status: "Pending" },
  { slug: "queen", icon: "👑", name: "Queen Agent", role: "Evening reflection + clarity doc + alignment scoring", status: "Pending" },
  { slug: "journal", icon: "📓", name: "Daily Journal Agent", role: "Synthesizes the day into Obsidian notes", status: "Live" },
  { slug: "action-planning", icon: "🗓️", name: "Action Planning Agent", role: "Sunday-reset workflow + weekly plan", status: "Pending" },
  { slug: "identity-imprinting", icon: "🪞", name: "Identity Imprinting Agent", role: "Identity frames + transformational sessions", status: "Pending" },
  { slug: "precise-language", icon: "🗣️", name: "Precise Language Agent", role: "Codifies EXECUTE vocabulary; trains team", status: "Pending" },
  { slug: "master-developer", icon: "🛠️", name: "Master Developer Agent", role: "Claude Code / Codex / OpenCode + gh CLI + Cursor", status: "Pending" },
] as const;
