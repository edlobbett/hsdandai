import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, RefreshCw, ShieldCheck, Link2, AlertTriangle, CheckCircle2 } from "lucide-react";

const pains = [
  {
    icon: Link2,
    title: "HubSpot and your PMS don't talk",
    description: "Tenant data lives in one system, sales pipeline in another. Nothing joins up, so leads get lost and reporting is guesswork.",
  },
  {
    icon: RefreshCw,
    title: "Manual follow-ups everywhere",
    description: "Renewals, rent reviews, maintenance follow-ups — your team is chasing things in spreadsheets that HubSpot should handle automatically.",
  },
  {
    icon: Building2,
    title: "No visibility across the tenant journey",
    description: "From enquiry to move-in to renewal, you can't see where tenants are in the pipeline or where they're dropping off.",
  },
  {
    icon: AlertTriangle,
    title: "May's regulatory changes add pressure",
    description: "The Renters' Rights Act changes coming in May 2025 mean tighter requirements on communications, records and tenant interactions. If your systems aren't ready, compliance gets harder.",
  },
];

const deliverables = [
  "HubSpot ↔ PMS integration mapping and build",
  "Tenant journey pipeline setup with lifecycle stages",
  "Automated renewal and rent review workflows",
  "Compliance-ready communication templates",
  "Reporting dashboards for occupancy, pipeline and comms",
  "Team training and documentation",
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
                For property operators
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-600 leading-tight mb-6 text-balance">
                Make HubSpot work for property
              </h1>
              <p className="text-lg md:text-xl opacity-80 leading-relaxed mb-8 max-w-2xl">
                Connect your PMS, automate tenant journeys, fix pipeline visibility — and get ready for the regulatory changes coming in May.
              </p>
              <Button variant="cta" className="text-base px-8 h-12" asChild>
                <a href="mailto:hello@digitalandai.co.uk">
                  Book a free audit
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
                <span>Fixed-price sprints</span>
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
                Sound familiar?
              </h2>
              <p className="text-muted-foreground text-lg">
                Most property operators have HubSpot but aren't getting value from it. These are the patterns we see repeatedly.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {pains.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <item.icon className="h-5 w-5 text-accent mb-4" />
                  <h3 className="font-serif text-lg font-600 text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we deliver */}
        <section className="py-20 md:py-24 bg-muted/40">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What you get</p>
              <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                A HubSpot setup built for property
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Fixed-price sprint. Scoped to your priorities. Typically delivered in 2–4 weeks.
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

        {/* Housing Hand proof */}
        <section className="py-20 md:py-24">
          <div className="container max-w-3xl">
            <div className="p-8 md:p-10 rounded-lg border border-border bg-warm">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Case experience</p>
              <h2 className="font-serif text-2xl md:text-3xl font-600 text-foreground mb-4">
                Housing Hand
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Built automated customer and data systems in HubSpot for Housing Hand — a guarantor service working across the UK rental market. The project covered customer lifecycle automation, data integration, pipeline management and reporting.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This is the kind of work we do: connecting HubSpot to property-specific systems and making it handle the complexity of tenant and customer journeys properly.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-surface-dark text-surface-dark-foreground">
          <div className="container text-center max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-600 mb-4">
              Let's see what's fixable
            </h2>
            <p className="text-lg opacity-70 mb-8">
              Start with a free audit of your HubSpot setup. We'll map what's working, what's not, and what a sprint would look like for you.
            </p>
            <Button variant="cta" size="lg" className="text-base px-8 h-12" asChild>
              <a href="mailto:hello@digitalandai.co.uk">
                Book your free audit
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
