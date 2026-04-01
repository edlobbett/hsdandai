import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, Target, FileText, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const offerings = [
  {
    icon: Target,
    title: "HubSpot Sprint",
    price: "2–4 weeks\nPrice Range £950 - £3,750\n\n",
    description:
      "A focused implementation sprint. We scope what needs fixing, build it, document it, and hand it over. No ongoing retainer.",
  },
  {
    icon: FileText,
    title: "Audit + Action Plan",
    price: "1 week\n£1,300\n\n",
    description:
      "A detailed review of your HubSpot setup with a prioritised action plan. You'll know exactly what's broken, what to fix first, and what it'll cost.",
  },
  {
    icon: Wrench,
    title: "Focused support",
    price: "Day rate · £500",
    description:
      "Senior HubSpot implementation support for specific problems — integrations, automations, reporting, data cleanup. Scoped tightly, delivered fast.",
  },
];

const benefits = [
  "Scoped in days, not weeks",
  "Delivered by a senior specialist, not a junior team",
  "Fixed price — you know the cost before we start",
  "Clean handover with documentation your team can use",
  "No retainer, no long discovery, no bloated process",
];

const outcomes = [
  {
    title: "Pipeline that reflects reality",
    description:
      "Deals in the right stages. Accurate forecasting. No more guessing which opportunities are real.",
  },
  {
    title: "Automation that saves hours",
    description:
      "Follow-ups, task creation, lifecycle updates and handoffs running automatically — not manually.",
  },
  {
    title: "Reporting your leadership trusts",
    description:
      "Dashboards built on clean data, showing the numbers that matter. Not vanity metrics.",
  },
  {
    title: "Integrations that actually work",
    description:
      "HubSpot connected properly to your other systems — CRM, finance, ops tools — with data flowing correctly.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="container max-w-3xl">
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                HubSpot implementation specialist
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-600 leading-tight text-foreground mb-6 text-balance">
                Fix your HubSpot. Fast, scoped, no retainer.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Senior HubSpot implementation support for teams that need it working properly — without hiring a full-time person or signing up to an agency retainer. Fixed-scope sprints. Clear deliverables. Done in weeks, not months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" asChild>
                  <a href="https://calendly.com/thecakemix/15min">
                    Discuss a sprint
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="hero-outline" asChild>
                  <Link to="/property">Property operators →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility bar */}
        <section className="border-y border-border bg-muted/50 py-6">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>HubSpot certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Fixed-price, fixed-scope delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Built systems for Housing Hand</span>
              </div>
            </div>
          </div>
        </section>

        {/* What you can buy */}
        <section className="py-20 md:py-24">
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What you can buy</p>
              <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                Three ways to work together
              </h2>
              <p className="text-muted-foreground text-lg">
                Each one is scoped, priced, and delivered with a clear handover. No open-ended engagements.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {offerings.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <item.icon className="h-5 w-5 text-accent mb-3" />
                  <h3 className="font-serif text-lg font-600 text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs font-semibold text-accent mb-3">{item.price}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 md:py-24 bg-muted/40">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-start">
              <div>
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">How it works</p>
                <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                  Simple, fast, senior-led
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  This is practical implementation work, not a consulting engagement. You get a senior specialist doing all of the work — not managing a team of juniors.
                </p>
                <div className="space-y-4">
                  {benefits.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-accent mt-1 shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-5 rounded-lg border border-border bg-card">
                  <div className="text-2xl font-serif font-bold text-accent/30 mb-1">1</div>
                  <h3 className="font-serif text-lg font-600 text-foreground mb-1">Scope</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Short call to understand what's broken. You get a clear proposal with fixed pricing within days.
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-border bg-card">
                  <div className="text-2xl font-serif font-bold text-accent/30 mb-1">2</div>
                  <h3 className="font-serif text-lg font-600 text-foreground mb-1">Build</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Focused sprint. I fix, build, or automate what's been agreed. You see progress throughout, not just at the end.
                  </p>
                </div>
                <div className="p-5 rounded-lg border border-border bg-card">
                  <div className="text-2xl font-serif font-bold text-accent/30 mb-1">3</div>
                  <h3 className="font-serif text-lg font-600 text-foreground mb-1">Handover</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Clean documentation, team walkthrough, and a setup your team can maintain without me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 md:py-24">
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What changes</p>
              <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                HubSpot that actually works for your business
              </h2>
              <p className="text-muted-foreground text-lg">
                Most teams use about 30% of HubSpot. The rest is misconfigured, unused, or working against them. I close that gap.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {outcomes.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <h3 className="font-serif text-lg font-600 text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="py-20 md:py-24 bg-muted/40">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Who this is for</p>
            <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-6">
              Teams that need HubSpot to work — not a HubSpot team
            </h2>
            <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
              <p>
                You're a company of 10–100 people. You have HubSpot but it's not set up properly. Your data is messy, your pipeline doesn't reflect reality, and your team is doing manually what HubSpot should handle.
              </p>
              <p>
                You don't want to hire a full-time RevOps or HubSpot person. You don't want an agency retainer. You want someone senior to come in, fix what's broken, build what's missing, and hand it back to your team in a state they can manage.
              </p>
              <p>
                That's what I do.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-surface-dark text-surface-dark-foreground">
          <div className="container text-center max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-600 mb-4">
              Let's see what needs fixing
            </h2>
            <p className="text-lg opacity-70 mb-8">
              Book a short call. I'll tell you what I'd fix first, what it would cost, and whether a sprint makes sense. No pitch deck, no pressure.
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

export default Index;
