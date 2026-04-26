// Rolodex snapshot — Spencer's top relationships.
// Sourced from MEMORY.md "top 12 energy" + project plan stakeholders.

export type RolodexTier = "Tier 1" | "Tier 2" | "Tier 3" | "Client" | "Partner";
export type RolodexStage =
  | "Active"
  | "Warm"
  | "Cooling"
  | "Onboarding"
  | "Closed-Won"
  | "Pipeline";

export interface Contact {
  id: string;
  name: string;
  role: string;
  tier: RolodexTier;
  stage: RolodexStage;
  lastContact: string;
  nextAction: string;
  context: string;
  channels: string[];
}

export const contacts: Contact[] = [
  {
    id: "jason-neimer",
    name: "Jason Neimer",
    role: "Most-impactful partner · 2-person household revenue ($350-400K/qtr)",
    tier: "Tier 1",
    stage: "Active",
    lastContact: "2 days ago",
    nextAction: "Weekly co-CEO sync · Wednesday 2pm",
    context: "Highest-leverage relationship. Co-anchor of household business architecture.",
    channels: ["WhatsApp", "Phone", "In-person"],
  },
  {
    id: "dina-maayan",
    name: "Dina Maayan",
    role: "Partner · Legacy Earth co-builder (Hawaii / Austin / Costa Rica)",
    tier: "Tier 1",
    stage: "Active",
    lastContact: "Yesterday",
    nextAction: "Sovereign-village land scout planning",
    context: "Parallel sovereign-village project. Aligned on Costa Rica scouting.",
    channels: ["Daily contact"],
  },
  {
    id: "josh-harris",
    name: "Josh Harris",
    role: "AI Sales Systems · ECMR co-builder · Kyle Plumbing co-seller",
    tier: "Partner",
    stage: "Active",
    lastContact: "3 days ago",
    nextAction: "ECMR Phase 10 launch coordination",
    context: "Commercial Oracle partner. Driving the ECMR + plumbing media-buy plays.",
    channels: ["Phone", "Slack", "WhatsApp"],
  },
  {
    id: "valeria-solorzano",
    name: "Valeria Solorzano",
    role: "EXECUTE collaborator · Phase 2 Obsidian + event automation",
    tier: "Tier 2",
    stage: "Active",
    lastContact: "Today",
    nextAction: "EXECUTE event automation handoff",
    context: "Trusted operator. Owning EXECUTE event lifecycle automation.",
    channels: ["Slack", "WhatsApp"],
  },
  {
    id: "kim-dang",
    name: "Kim Dang",
    role: "Oracle client · Yale lecturer · book / film / TV / retreats vision",
    tier: "Client",
    stage: "Onboarding",
    lastContact: "10 days ago",
    nextAction: "Send proposal video + book follow-up call",
    context: "$1M → $10M reverse-engineering. Public site + Vault + Mission Control build pending.",
    channels: ["Email", "Phone"],
  },
  {
    id: "jake-novak",
    name: "Jake Novak",
    role: "Oracle client · insurance founder · sports-betting agent + email automation",
    tier: "Client",
    stage: "Pipeline",
    lastContact: "9 days ago",
    nextAction: "Confirm payment + access checklist",
    context: "Locked-in $3K founding tier. Build kickoff pending on payment.",
    channels: ["Phone", "Text"],
  },
  {
    id: "beau-saad",
    name: "Beau Saad",
    role: "Co-owner ECMR (American Installations + Alpine Heat Pumps)",
    tier: "Client",
    stage: "Onboarding",
    lastContact: "1 week ago",
    nextAction: "Phase 10 agent rollout kickoff",
    context: "$15K Phase 1 CRM build. Anchor client. White-label play in motion.",
    channels: ["Email", "Phone"],
  },
  {
    id: "kyle-couper",
    name: "Kyle Couper",
    role: "Co-owner ECMR · Kyle Plumbing (South FL)",
    tier: "Client",
    stage: "Onboarding",
    lastContact: "1 week ago",
    nextAction: "Plumbing Meta media-buyer + WooSender build",
    context: "$15K plumbing project, Josh Harris co-seller. Alongside ECMR.",
    channels: ["Email", "Phone"],
  },
  {
    id: "isaiah",
    name: "Isaiah",
    role: "BTB × EXECUTE managed service partner",
    tier: "Partner",
    stage: "Active",
    lastContact: "5 days ago",
    nextAction: "Define managed-service product wedge",
    context: "Co-architect of the AI infrastructure managed service. Phase 11.",
    channels: ["WhatsApp", "Phone"],
  },
  {
    id: "joel-elster",
    name: "Joel Elster",
    role: "Top-12 energy",
    tier: "Tier 2",
    stage: "Warm",
    lastContact: "2 weeks ago",
    nextAction: "Schedule monthly catch-up",
    context: "Long-arc relationship. High signal, low cadence.",
    channels: ["Phone"],
  },
  {
    id: "ky-jodi",
    name: "Ky & Jodi",
    role: "LIFT Lounge co-founders",
    tier: "Tier 2",
    stage: "Warm",
    lastContact: "1 week ago",
    nextAction: "Action planning sync · Monday 11am",
    context: "Anchor Austin community node. LIFT Lounge ecosystem node.",
    channels: ["In-person", "WhatsApp"],
  },
  {
    id: "janice",
    name: "Janice",
    role: "EXECUTE collaborator · Phase 2 Obsidian",
    tier: "Tier 2",
    stage: "Active",
    lastContact: "3 days ago",
    nextAction: "Obsidian onboarding (Phase 2 task)",
    context: "Phase 2 collaborator. Joining vault edit workflow.",
    channels: ["Slack"],
  },
  {
    id: "john",
    name: "John",
    role: "Top-12 energy",
    tier: "Tier 2",
    stage: "Warm",
    lastContact: "4 days ago",
    nextAction: "Quarterly check-in",
    context: "Trusted long-time collaborator.",
    channels: ["Phone"],
  },
  {
    id: "alex",
    name: "Alex",
    role: "Top-12 energy",
    tier: "Tier 2",
    stage: "Warm",
    lastContact: "1 week ago",
    nextAction: "Reach out · invite to Body Party (June)",
    context: "Top-12. Cooling slightly — needs a touch.",
    channels: ["Text"],
  },
];

export const stats = {
  total: contacts.length,
  tier1: contacts.filter((c) => c.tier === "Tier 1").length,
  active: contacts.filter((c) => c.stage === "Active").length,
  pipeline: contacts.filter((c) => c.stage === "Pipeline" || c.stage === "Onboarding").length,
  cooling: contacts.filter((c) => c.stage === "Cooling" || c.stage === "Warm").length,
};
