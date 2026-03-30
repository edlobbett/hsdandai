import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle } from "lucide-react";

const pains = [
  {
    title: "HubSpot and your PMS are disconnected",
    description:
      "Tenant data sits in your property management system. Sales and pipeline data sits in HubSpot. Nothing joins up — so leads fall through gaps, handoffs are manual, and no one trusts the reporting.",
  },
  {
    title: "The tenant journey is fragmented",
    description:
      "From initial enquiry to viewing, referencing, move-in, tenancy management, renewal and eventually move-out — there's no single view. Each stage lives in a different system or spreadsheet.",
  },
  {
    title: "Renewals and rent reviews are manual",
    description:
      "Your team is tracking renewal dates in spreadsheets, sending rent review letters manually, and chasing follow-ups by memory. HubSpot should handle all of this automatically.",
  },
  {
    title: "Pipeline visibility is poor",
    description:
      "You can't see how many enquiries converted to viewings, how long referencing takes, or where tenants are dropping off. Leadership asks for numbers and your team scrambles to pull them together.",
  },
  {
    title: "Customer comms are inconsistent",
    description:
      "Move-in instructions, maintenance updates, renewal notices — they're sent ad hoc, from personal inboxes, with no tracking or consistency. HubSpot has the tools, but they're not set up.",
  },
  {
    title: "May's regulatory changes add pressure",
    description:
      "The Renters' Rights Act changes mean tighter requirements on tenant communications, records and interaction tracking. If your systems aren't set up properly, compliance gets harder — not easier.",
    isHighlight: true,
  },
];

const deliverables = [
  "HubSpot ↔ PMS integration scoping and build",
  "Tenant lifecycle pipeline with proper stages and automation",
  "Automated renewal and rent review workflows",
  "Enquiry-to-tenancy reporting dashboard",
  "Compliance-ready communication sequences",
  "Data cleanup and contact deduplication",
  "Team training and written documentation",
];

const Property = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-28 lg:py-32 bg-surface-dark text-surface-dark-foreground">
          <div className="container max-w-3xl">
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                HubSpot for property operators
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-600 leading-tight mb-6 text-balance">
                Connect your PMS to HubSpot. Fix the tenant journey. Get ready for May.
              </h1>
              <p className="text-lg md:text-xl opacity-80 leading-relaxed mb-8 max-w-2xl">
                Fixed-scope HubSpot implementation for property operators — connecting systems, automating workflows, and building the pipeline visibility your team is missing. Delivered in weeks, not months.
              </p>
              <Button variant="cta" className="text-base px-8 h-12" asChild>
                <a href="mailto:hello@digitalandai.co.uk">
                  Discuss a sprint
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Credibility bar */}
        <section className="border-b border-border bg-muted/50 py-6">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>Built automated customer systems for <strong className="text-foreground">Housing Hand</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>HubSpot certified</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>Fixed-price, fixed-scope delivery</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-20 md:py-24">
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">The problem</p>
              <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                You have HubSpot. It's not doing what it should.
              </h2>
              <p className="text-muted-foreground text-lg">
                These are the patterns I see in every property operator running HubSpot alongside a PMS.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {pains.map((item) => (
                <div
                  key={item.title}
                  className={`p-6 rounded-lg border bg-card hover:shadow-md transition-shadow ${
                    item.isHighlight
                      ? "border-accent/40 bg-accent/5"
                      : "border-border"
                  }`}
                >
                  {item.isHighlight && (
                    <AlertTriangle className="h-5 w-5 text-accent mb-3" />
                  )}
                  <h3 className="font-serif text-lg font-600 text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Housing Hand */}
        <section className="py-20 md:py-24 bg-muted/40">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Proof of work</p>
            <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-6">
              Housing Hand
            </h2>
            <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
              <p>
                I built the automated customer and data systems in HubSpot for Housing Hand — a UK guarantor service operating across the rental market.
              </p>
              <p>
                The work covered customer lifecycle automation from application through to renewal, integrating HubSpot with their operational systems, building pipeline reporting, and setting up the communication workflows that let a small team handle high volumes without manual follow-up.
              </p>
              <p>
                It's the same kind of work I do for property operators: connecting HubSpot to property-specific systems and making it handle the complexity of tenant and customer journeys properly — not just store contacts.
              </p>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="py-20 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What a sprint covers</p>
              <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                Scoped to your priorities. Delivered in 2–4 weeks.
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Every sprint is different, but these are the deliverables I typically cover for property operators. Fixed price, clear scope, clean handover.
              </p>
              <div className="grid gap-4">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">How it works</p>
            <h2 className="font-serif text-2xl md:text-3xl font-600 text-foreground mb-8">
              Short call → Scoped proposal → Sprint → Handover
            </h2>
            <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
              <p>
                We start with a short call so I understand your setup — what PMS you're on, how HubSpot is configured, and what's causing the most pain. Within a few days you get a fixed-price proposal with a clear scope.
              </p>
              <p>
                I do the implementation work directly. No juniors, no subcontracting, no layers. You get a senior specialist building what's been agreed, with regular check-ins throughout.
              </p>
              <p>
                At the end you get clean documentation, a team walkthrough, and a HubSpot setup your team can manage going forward — without needing me on retainer.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-surface-dark text-surface-dark-foreground">
          <div className="container text-center max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-600 mb-4">
              See what a sprint would look like for you
            </h2>
            <p className="text-lg opacity-70 mb-8">
              Book a short call. I'll review your HubSpot and PMS setup, tell you what I'd fix first, and give you a clear scope and price. No commitment, no pitch deck.
            </p>
            <Button variant="cta" size="lg" className="text-base px-8 h-12" asChild>
              <a href="mailto:hello@digitalandai.co.uk">
                Book a short call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Property;
