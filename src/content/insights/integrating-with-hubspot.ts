import type { InsightPost } from "./types";

const post: InsightPost = {
  slug: "integrating-with-hubspot",
  title: "Integrating With HubSpot — How to Avoid Accidental Systems Design and Bad Results",
  series: "Five Things That Go Wrong in HubSpot",
  date: "2026-06-10",
  excerpt:
    "Most integration work is actually accidental systems design — the path of least resistance defined the outcome instead of a deliberate decision.",
  body: `Most HubSpot users have done some integration work. Connected the native connections — the CMS, the email platform, maybe a Slack notification or a payment feed. It mostly works. There are a few manual steps nobody loves, a few places where data has to move by hand, but broadly the systems talk to each other.

This feels like integration. It is closer to accidental systems design.

What happened is: HubSpot got connected to whatever it makes easy to connect, and then processes got built around what got connected. The system constraints defined the outcome. Nobody made a deliberate decision — the path of least resistance became the design.

That is not a criticism. We all do it. The question is whether it is still serving us.

## Start with flows, not systems

When we approach integration properly, we start with what needs to move before deciding how to move it. Three questions that are worth sitting with before touching any settings:

What does a customer experience from first contact to delivery? Not in detail — a light sketch of the key moments. Where does information about them need to exist, and in which system, at each point?

What does the team need to see, and when? Where does a handoff happen? Where does something fall through the gap because the person picking it up can't see what the person passing it over knew?

What data needs to flow for both of those to work? Not all data — the specific fields, triggers, and records that actually matter.

Once we have those flows mapped, system constraints become an input to the design rather than the design itself. That shift changes what we build and — more often than expected — reveals that some of the manual steps we have been living with were never necessary.

## The options are broader than they used to be

Native integrations get us a long way. But where they fall short, there are now more options than most businesses realise — and they are more accessible than they used to be.

A simple API connection, a Cloudflare Worker, a lightweight iPaaS setup. Two years ago these felt like specialist territory. AI-assisted code has changed that. Building a connection that pulls data from one system and pushes it to another is genuinely within reach for most businesses now — not a major development project.

This matters because the constraint that used to justify "we'll live with the native connections" has largely gone. The manual step that has been accepted as a fixture of the process may just never have been questioned.

## Then use it, get the data, and refine

Integration design is not a one-time exercise. The first pass gets the critical flows working. Real use surfaces what was missed — a field not being passed, a trigger firing at the wrong moment, a notification going to the wrong person.

That is not failure. That is how deliberate systems design actually works. We build, we observe, we adjust. The data that comes back from actually using the connected system tells us where to go next.

The goal is not a perfect integration on day one. It is a deliberate one — built around what the business actually needs, with a clear picture of why each connection exists and what it is supposed to do.

That is the difference between a system that works for you and one you work around.`,
};

export default post;
