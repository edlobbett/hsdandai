import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, BarChart3, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const outcomes = [
  {
    icon: BarChart3,
    title: "Pipeline visibility",
    description: "See exactly where deals stand and where they stall. No more guessing.",
  },
  {
    icon: Zap,
    title: "Less manual work",
    description: "Automate follow-ups, data entry and handoffs so your team focuses on revenue.",
  },
  {
    icon: Users,
    title: "Cleaner reporting",
    description: "Dashboards your leadership actually trusts, built on data that's accurate.",
  },
  {
    icon: Settings,
    title: "Systems that connect",
    description: "HubSpot working properly with your other tools — not fighting them.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Audit",
    description: "We review your HubSpot setup, identify what's broken or missing, and map quick wins.",
  },
  {
    step: "2",
    title: "Sprint",
    description: "A fixed-scope, fixed-price sprint to fix, build, or automate what matters most.",
  },
  {
    step: "3",
    title: "Handover",
    description: "Clean documentation, team walkthrough, and a setup your team can actually maintain.",
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
                HubSpot specialists
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-600 leading-tight text-foreground mb-6 text-balance">
                Get more from HubSpot without hiring a full team
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Fixed-price sprints to fix your pipeline, clean your data, automate your processes, and make HubSpot actually work for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" asChild>
                  <a href="mailto:hello@digitalandai.co.uk">
                    Book a free audit
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

        {/* Social proof bar */}
        <section className="border-y border-border bg-muted/50 py-6">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>HubSpot certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Fixed-price sprints — no retainers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Built systems for Housing Hand</span>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 md:py-24">
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Outcomes</p>
              <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                What actually changes
              </h2>
              <p className="text-muted-foreground text-lg">
                Most teams use about 30% of HubSpot. We close the gap — quickly, with clear deliverables.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {outcomes.map((item) => (
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

        {/* How it works */}
        <section className="py-20 md:py-24 bg-muted/40">
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">How it works</p>
              <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                Audit → Sprint → Handover
              </h2>
              <p className="text-muted-foreground text-lg">
                No long discovery phases. No open-ended retainers. Scoped work, delivered fast.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {howItWorks.map((item) => (
                <div key={item.step} className="relative">
                  <div className="text-5xl font-serif font-bold text-accent/20 mb-2">{item.step}</div>
                  <h3 className="font-serif text-xl font-600 text-foreground mb-2">{item.title}</h3>
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
              Ready to fix your HubSpot?
            </h2>
            <p className="text-lg opacity-70 mb-8">
              Start with a free audit. We'll tell you exactly what's wrong, what to fix first, and what it'll cost. No pressure, no pitch deck.
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

export default Index;
