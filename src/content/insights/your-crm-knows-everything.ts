import type { InsightPost } from "./types";

const post: InsightPost = {
  slug: "your-crm-knows-everything",
  title: "Your CRM Knows Everything. That's the Problem.",
  series: "Five Things That Go Wrong in HubSpot",
  date: "2026-06-03",
  excerpt:
    "Capturing everything in HubSpot isn't the problem — finding anything useful once it's there is.",
  body: `Capturing everything in HubSpot is not the problem. Storage is free and data you did not collect cannot help you later. The problem is whether anyone can find something useful once it is there.

Most portals accumulate data without structure. The team stops trusting the system, starts working around it, and the CRM becomes a record of what happened rather than a tool for what happens next. That is a signal and noise problem, and it usually has four roots.

## Get the reference data right first

Before worrying about what HubSpot does with data, check what it is receiving. If the systems feeding it are passing partial or inconsistent information, nothing downstream fixes that. The richer and more reliable the data coming in, the more useful everything that follows becomes.

## Surface what matters, capture the rest

A sales rep opening a contact record needs to see what is relevant to the conversation they are about to have — not every property ever stored. HubSpot gives us the tools for this: custom views, property sections grouped by function, dashboards built around specific roles and decisions. Most portals use almost none of them.

The question worth asking for every record type is: when someone opens this, what are they trying to do? Build the view around that. Capture everything else in the background.

## Decide which system owns what

Every piece of data has a natural home. Billing in finance. Support history in the helpdesk. Relationship context in the CRM. When that has not been decided, the same information ends up in multiple systems, updated independently, and gradually contradicting itself. HubSpot shows one address. The finance system shows another. Neither gets trusted. Both get used.

This is not a technical problem. It is a decision that has not been made. For each important data type: which system owns it, which display it, which are allowed to write to it. Once that is agreed, integrations can be built to respect it.

## Control where inputs happen and where views are allowed

The final piece is governance across the whole stack — including HubSpot's customer portals, finance integrations, and any other system that touches the same data. Where do we allow data to be entered, and by whom? Where does it appear, and in what form?

This is what builds trust in a CRM. Not clean data alone — a clear set of rules about what can change it, and what can only read it. Without that, the data layer is always one accidental import or one enthusiastic new user away from inconsistency.

Together these four elements — better inputs, deliberate surfacing, source of truth decisions, and input/view governance — reduce noise, build focus, and create a system the team actually uses. Each one is a design decision, not a technical one. And each one compounds the others.

## What to do about it

Pick one contact record for a customer you know well. Ask three people who work with that customer — in sales, in delivery, in support — whether it reflects what they know about the relationship.

The gaps are the data architecture problems. Missing integrations. Data that exists but is not visible. Fields showing different things in different systems. That exercise, done honestly, tells you where to start.`,
};

export default post;
