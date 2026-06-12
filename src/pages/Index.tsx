import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Wrench, BarChart3, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const tracks = [
  {
    icon: Wrench,
    title: "HubSpot Sprints",
    description:
      "Fix HubSpot fast. Fixed-price, fixed-scope implementations in days, not months.",
    link: "/hubspot-sprints",
  },
  {
    icon: BarChart3,
    title: "Revenue Operations",
    description:
      "Build the stack that connects your pipeline, data, and outreach. Apollo, CRM, enrichment, automation.",
    link: "/revops",
  },
  {
    icon: Cpu,
    title: "Digital & AI",
    description:
      "Digital transformation done properly — strategy, data, systems design, and AI when the foundations are right.",
    link: "/digital-ai",
  },
];

const trustItems = [
  "HubSpot Specialist",
  "Fixed-price, fixed-scope delivery",
  "Built systems for Housing Hand",
];

const personas = [
  {
    title: "Operations leads",
    description:
      "You're responsible for how the CRM, outreach, and data work together. You know what needs fixing but don't have the time or headcount to do it yourself.",
  },
  {
    title: "Growing teams (10–100 people)",
    description:
      "You've outgrown the startup setup. HubSpot is in place but it's not configured for your stage — messy data, manual processes, reporting that nobody trusts.",
  },
  {
    title: "Founders scaling a function",
    description:
      "You're building a sales or customer operations function and need the systems right from the start. No legacy mess to untangle, but you want it done properly.",
  },
];

const outcomesList = [
  {
    title: "CRM that reflects how you actually sell",
    description:
      "Deal stages, pipelines, and properties configured for your business — not the default HubSpot setup. Clean data, accurate forecasting.",
  },
  {
    title: "Outreach that runs itself",
    description:
      "Sequences, follow-ups, and task creation automated. Your team focuses on conversations, not clicking buttons.",
  },
  {
    title: "Reporting the business trusts",
    description:
      "Dashboards built on clean, connected data. Pipeline velocity, conversion rates, and team performance — not vanity metrics.",
  },
  {
    title: "Systems that talk to each other",
    description:
      "HubSpot connected to your operational stack — CRM, enrichment, finance tools — with data flowing where it should.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="container max-w-4xl">
            <div className="animate-fade-in-up text-center">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                THIN LAYER CONSULTING LTD
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-600 leading-tight text-foreground mb-6 text-balance">
                Digital transformation. Revenue operations. HubSpot.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Senior consulting and implementation for growing businesses — fixed-scope, fixed-price, no retainer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" asChild>
                  <a href="mailto:ed.lobbett@thecakemix.co.uk">
                    Discuss a project →
                  </a>
                </Button>
                <Button variant="hero-outline" asChild>
                  <Link to="/hubspot-sprints">
                    See how we work →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-y border-border bg-muted/50 py-6">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service tracks */}
        <section className="py-20 md:py-24">
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What we do</p>
              <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                Three areas. One approach.
              </h2>
              <p className="text-muted-foreground text-lg">
                Each engagement is scoped, priced, and delivered with a clear handover. No open-ended retainers.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {tracks.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow group block"
                >
                  <item.icon className="h-5 w-5 text-accent mb-3" />
                  <h3 className="font-serif text-lg font-600 text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="py-20 md:py-24 bg-muted/40">
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Who this is for</p>
              <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                Teams that need systems to work — not a team to manage them
              </h2>
              <p className="text-muted-foreground text-lg">
                You need someone senior to come in, fix what's broken, build what's missing, and hand it back in a state your team can manage.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {personas.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <h3 className="font-serif text-lg font-600 text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 md:py-24">
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What changes</p>
              <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                Systems that actually work for your business
              </h2>
              <p className="text-muted-foreground text-lg">
                Most teams use a fraction of what their tools can do. We close that gap.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {outcomesList.map((item) => (
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

        {/* CTA */}
        <section className="py-20 md:py-24 bg-surface-dark text-surface-dark-foreground">
          <div className="container text-center max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-600 mb-4">
              Let's talk about what you need
            </h2>
            <p className="text-lg opacity-70 mb-8">
              A short call to understand your setup. You'll get clear thoughts on what needs fixing and how we'd approach it. No pitch deck, no pressure.
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
