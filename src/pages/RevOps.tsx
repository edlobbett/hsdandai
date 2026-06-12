import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, GitBranch, BarChart3, Users } from "lucide-react";

const covers = [
  {
    icon: Database,
    title: "Apollo and lead enrichment",
    description:
      "Clean, enriched contact data flowing into HubSpot automatically. Proper deduplication, firmographic enrichment, and intent signals wired into your pipeline.",
  },
  {
    icon: GitBranch,
    title: "CRM integration and data architecture",
    description:
      "HubSpot configured around how your business actually sells. Custom objects, proper pipeline stages, data hygiene rules, and integrations that don't break.",
  },
  {
    icon: BarChart3,
    title: "Outbound sequencing and automation",
    description:
      "Multi-channel sequences that work. Personalisation at scale, task automation, and lead routing that puts the right conversations in front of the right people.",
  },
  {
    icon: Users,
    title: "Pipeline visibility and reporting",
    description:
      "Dashboards your team actually uses. Conversion rates, velocity, source performance, and activity metrics — built on clean data, not manual tracking.",
  },
];

const audience = [
  "GTM leads who need the stack to match the strategy",
  "RevOps managers tired of patching broken integrations",
  "Founders scaling a sales function from ad-hoc to repeatable",
];

const RevOps = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="container max-w-3xl">
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                REVENUE OPERATIONS
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-600 leading-tight text-foreground mb-6 text-balance">
                The stack that connects your CRM, outreach, data, and pipeline
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Built for how modern GTM teams actually work. Fixed-scope, fixed-price, delivered in weeks.
              </p>
              <Button variant="hero" asChild>
                <a href="mailto:ed.lobbett@thecakemix.co.uk">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What this covers */}
        <section className="py-20 md:py-24 bg-muted/40">
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What this covers</p>
              <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                Everything in the revenue stack
              </h2>
              <p className="text-muted-foreground text-lg">
                From lead generation through to pipeline reporting — we build, fix, and connect the systems that make revenue operations work.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {covers.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <item.icon className="h-5 w-5 text-accent mb-3" />
                  <h3 className="font-serif text-lg font-600 text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-20 md:py-24">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Who it's for</p>
            <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-6">
              GTM leads, RevOps managers, founders scaling a sales function
            </h2>
            <div className="space-y-4">
              {audience.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
                >
                  <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-surface-dark text-surface-dark-foreground">
          <div className="container text-center max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-600 mb-4">
              Ready to build your revenue stack?
            </h2>
            <p className="text-lg opacity-70 mb-8">
              A short call to understand your setup. You'll get clear thoughts on what needs building and how we'd approach it. No pitch deck, no pressure.
            </p>
            <Button variant="cta" size="lg" className="text-base px-8 h-12" asChild>
              <a href="https://calendly.com/thecakemix/15min">
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

export default RevOps;
