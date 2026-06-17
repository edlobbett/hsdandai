import type { InsightPost } from "./types";

const post: InsightPost = {
  slug: "why-nobody-trusts-the-pipeline-report",
  title: "Why Nobody Trusts the HubSpot Pipeline Report",
  series: "Five Things That Go Wrong in HubSpot",
  date: "2026-06-17",
  excerpt:
    "Lifecycle stages drift from how the team actually sells, leaving pipeline reports that nobody trusts — and the fix depends on which version of the problem you have.",
  body: `There are two ways a HubSpot lifecycle setup stops working, and they need different fixes.

The first is the most common. Stages were configured at setup — either internally or with a consultant — and made sense at the time. A year later, contacts have piled up in Lead stage, the MQL definition means anything or nothing depending on who you ask, and the pipeline report gets presented with caveats.

This is generally more about systems understanding than systems design. HubSpot assumes you came in with a sales methodology or went on the courses. Most businesses did neither. They got up and running, the team developed its own habits, and the gap between what the system was built for and how people actually work grew from there.

The second version is less common. The stages are understood, the definitions exist — but the signals feeding them are broken. Lead scoring built on activity volume rather than fit means the high scorers don't convert, the team stops trusting the scores, and the system carries on unattended.

Both are fixable. But they need diagnosing separately because the fixes pull in different directions.

## What to do about it

Start with a one-hour session between whoever owns marketing and whoever owns sales. Pull up the lifecycle stage definitions in HubSpot. For each stage, ask three questions:

What specifically moves a contact here? Not "they've shown interest." A named action — a form submission, a pricing page visit, a sales call booked.

Who decides — a person or a workflow? If it's a person, it will happen inconsistently. Anything that can be automated should be.

Does this still reflect how we actually sell? If the honest answer is no, that is useful information. Either the stage definition needs updating, or the sales process does. Either outcome is worth having.

For deal stages, pull your actual close rate data by stage. Compare it to the probability weightings currently set in HubSpot. In most portals these have never been updated since implementation. A 60% probability at Proposal that was set two years ago is not a forecast — it is a number someone invented. Set the weightings to match your real close rates and your pipeline value becomes something you can actually rely on.

If the signals are the problem — scoring, triggers, workflow connections — the quickest diagnostic is to look at your last 20 closed deals and trace back through HubSpot what the contact record showed at each stage. If the data does not tell the story of how those deals actually progressed, the signals are wrong. That is where to start.

None of this takes a consultant or a rebuild. It takes an afternoon and someone willing to be honest about the gap between the system and the reality.`,
};

export default post;
